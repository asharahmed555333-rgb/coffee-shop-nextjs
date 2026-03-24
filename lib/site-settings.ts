import { supabaseAdmin } from "@/lib/supabase";

export async function getSiteSettings() {
  const { data, error } = await supabaseAdmin
    .from("site_settings")
    .select("*")
    .eq("id", 1)
    .single();

  if (error || !data) {
    return {
      brand: "Brew Haven",
      tagline: "Luxury Coffee House",
      hero_badge: "Premium Coffee Experience",
      hero_title: "Sip the Taste of Luxury.",
      hero_description:
        "Brew Haven blends artisan coffee, elegant interiors, and a refined atmosphere into a café experience that feels rich, warm, and unforgettable.",
      whatsapp_number: "923190367965",
      email: "yourgmail@gmail.com",
      phone: "+92 319 0367965",
      address: "Main City Road, Karachi, Pakistan",
      reservation_text: "Reserve your table today for a premium coffee experience.",
    };
  }

  return data;
}