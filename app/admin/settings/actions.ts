"use server";

import { supabaseAdmin } from "@/lib/supabase";
import { redirect } from "next/navigation";

export async function updateSiteSettings(formData: FormData) {
  const payload = {
    brand: String(formData.get("brand") || ""),
    tagline: String(formData.get("tagline") || ""),
    hero_badge: String(formData.get("hero_badge") || ""),
    hero_title: String(formData.get("hero_title") || ""),
    hero_description: String(formData.get("hero_description") || ""),
    whatsapp_number: String(formData.get("whatsapp_number") || ""),
    email: String(formData.get("email") || ""),
    phone: String(formData.get("phone") || ""),
    address: String(formData.get("address") || ""),
    reservation_text: String(formData.get("reservation_text") || ""),
    updated_at: new Date().toISOString(),
  };

  const { error } = await supabaseAdmin
    .from("site_settings")
    .update(payload)
    .eq("id", 1);

  if (error) {
    redirect("/admin/settings?error=Failed to update settings");
  }

  redirect("/admin/settings?success=Settings updated successfully");
}