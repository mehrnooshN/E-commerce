import { createClient } from "@supabase/supabase-js";
const supabaseURL = "https://eybjlvnvtpxumhmqcgwk.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV5Ympsdm52dHB4dW1obXFjZ3drIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI1ODI0NDQsImV4cCI6MjAyODE1ODQ0NH0.AwGhpZ9OMH_Z6ByCoLzyqdIBIea299chPiBkYDVh9d8";
export const supabase = createClient(supabaseURL , supabaseAnonKey);