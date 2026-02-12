import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      full_name,
      company_name,
      email,
      phone,
      city_country,
      industry,
      company_size,
      primary_objective,
      estimated_budget,
      timeline,
      message,
    } = body;

    if (!full_name || !company_name || !email) {
      return NextResponse.json(
        { error: "Full name, company name, and email are required." },
        { status: 400 }
      );
    }

    const payload = {
      full_name: String(full_name).trim(),
      company_name: String(company_name).trim(),
      email: String(email).trim(),
      phone: phone ? String(phone).trim() : null,
      city_country: city_country ? String(city_country).trim() : null,
      industry: industry ? String(industry).trim() : null,
      company_size: company_size ? String(company_size).trim() : null,
      primary_objective: Array.isArray(primary_objective) ? primary_objective : primary_objective ? [primary_objective] : null,
      estimated_budget: estimated_budget ? String(estimated_budget).trim() : null,
      timeline: timeline ? String(timeline).trim() : null,
      message: message ? String(message).trim() : null,
    };

    if (supabase) {
      const { error } = await supabase.from("leads").insert({
        ...payload,
        primary_objective: payload.primary_objective ? JSON.stringify(payload.primary_objective) : null,
      });
      if (error) {
        console.error("Supabase leads insert error:", error);
        return NextResponse.json(
          { error: "Failed to save submission. Please try again or email info@seedrix.co." },
          { status: 500 }
        );
      }
    } else {
      // TODO: Configure NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY. Leads are not persisted.
      console.warn("Supabase not configured. Lead (mock):", payload);
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Leads API error:", e);
    return NextResponse.json(
      { error: "Something went wrong. Please try again or email info@seedrix.co." },
      { status: 500 }
    );
  }
}
