<?php
/**
 * Saves Get Started form submissions to cPanel MySQL.
 * POST JSON: full_name, company_name, email, (optional) phone, city_country, industry, company_size, primary_objective[], estimated_budget, timeline, message
 */
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed.']);
    exit;
}

$configPath = __DIR__ . '/config.php';
if (!is_file($configPath)) {
    http_response_code(500);
    echo json_encode(['error' => 'Server configuration missing. Add api/config.php from config.example.php.']);
    exit;
}

$config = require $configPath;
$input = json_decode(file_get_contents('php://input'), true) ?: [];

$full_name   = isset($input['full_name'])   ? trim((string) $input['full_name'])   : '';
$company_name= isset($input['company_name'])? trim((string) $input['company_name']): '';
$email       = isset($input['email'])       ? trim((string) $input['email'])       : '';

if ($full_name === '' || $company_name === '' || $email === '') {
    http_response_code(400);
    echo json_encode(['error' => 'Full name, company name, and email are required.']);
    exit;
}

$phone            = isset($input['phone'])            ? trim((string) $input['phone'])            : null;
$city_country     = isset($input['city_country'])     ? trim((string) $input['city_country'])     : null;
$industry         = isset($input['industry'])        ? trim((string) $input['industry'])        : null;
$company_size     = isset($input['company_size'])    ? trim((string) $input['company_size'])    : null;
$estimated_budget = isset($input['estimated_budget'])? trim((string) $input['estimated_budget']): null;
$timeline         = isset($input['timeline'])        ? trim((string) $input['timeline'])        : null;
$message          = isset($input['message'])         ? trim((string) $input['message'])         : null;

$primary_objective = null;
if (!empty($input['primary_objective'])) {
    $arr = is_array($input['primary_objective']) ? $input['primary_objective'] : [$input['primary_objective']];
    $primary_objective = json_encode(array_values($arr));
}

try {
    $pdo = new PDO(
        'mysql:host=' . $config['host'] . ';dbname=' . $config['database'] . ';charset=utf8mb4',
        $config['username'],
        $config['password'],
        [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
    );
} catch (PDOException $e) {
    error_log('Leads DB connection failed: ' . $e->getMessage());
    http_response_code(500);
    echo json_encode(['error' => 'Something went wrong. Please try again or email info@seedrix.co.']);
    exit;
}

$sql = 'INSERT INTO leads (full_name, company_name, email, phone, city_country, industry, company_size, primary_objective, estimated_budget, timeline, message, created_at)
        VALUES (:full_name, :company_name, :email, :phone, :city_country, :industry, :company_size, :primary_objective, :estimated_budget, :timeline, :message, NOW())';

try {
    $stmt = $pdo->prepare($sql);
    $stmt->execute([
        'full_name'         => $full_name,
        'company_name'      => $company_name,
        'email'             => $email,
        'phone'             => $phone,
        'city_country'      => $city_country,
        'industry'          => $industry,
        'company_size'      => $company_size,
        'primary_objective' => $primary_objective,
        'estimated_budget'  => $estimated_budget,
        'timeline'          => $timeline,
        'message'           => $message,
    ]);
    echo json_encode(['ok' => true]);
} catch (PDOException $e) {
    error_log('Leads insert failed: ' . $e->getMessage());
    http_response_code(500);
    echo json_encode(['error' => 'Something went wrong. Please try again or email info@seedrix.co.']);
}
