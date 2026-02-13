#!/usr/bin/env bash
# Run this on the server (e.g. in cPanel Terminal) after cloning the repo.
# Usage: bash deploy.sh [target-dir]
# Default target: ../public_html (so if repo is in ~/seedrix-site, files go to ~/public_html)

set -e
TARGET="${1:-../public_html}"

echo "Pulling latest from GitHub..."
git pull

echo "Installing dependencies..."
npm install

echo "Building static export..."
npm run build

echo "Copying out/ to $TARGET..."
mkdir -p "$TARGET"
cp -r out/* "$TARGET/"

echo "Done. Site updated."
