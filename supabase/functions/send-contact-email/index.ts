/// <reference lib="deno.ns" />
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

// Note: We are using Resend for email sending. You must set the RESEND_API_KEY secret in Supabase.
const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const TARGET_EMAIL = "yassinbouf90@gmail.com";
const SENDER_EMAIL = "yassinbouf90@gmail.com"; // Updated to verified sender email

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  console.log("Edge Function received request.");

  if (!RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set. Please set it in Supabase secrets.");
    return new Response(JSON.stringify({ error: "Server configuration error: Email API key missing." }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    // The trigger payload comes in the request body
    const payload = await req.json();
    const newRecord = payload.record;

    console.log("Received payload:", JSON.stringify(payload, null, 2));

    if (!newRecord) {
      console.error("Invalid payload: missing record.");
      return new Response(JSON.stringify({ error: "Invalid payload: missing record." }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const { name, email, subject, message } = newRecord;

    const emailBody = `
      New Contact Message Received:
      
      Name: ${name}
      Email: ${email}
      Subject: ${subject}
      
      Message:
      ---
      ${message}
      ---
    `;

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: SENDER_EMAIL,
        to: TARGET_EMAIL,
        subject: `New Portfolio Contact: ${subject}`,
        text: emailBody,
      }),
    });

    if (!resendResponse.ok) {
      const errorData = await resendResponse.json();
      console.error("Resend API Error:", resendResponse.status, errorData);
      throw new Error(`Failed to send email: ${resendResponse.statusText}`);
    }

    console.log(`Successfully sent email notification for message from ${name}.`);

    return new Response(JSON.stringify({ message: "Email sent successfully" }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Edge Function Error:", error.message);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});