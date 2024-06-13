import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fnleocefcqvfelbnkzkh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZubGVvY2VmY3F2ZmVsYm5remtoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY5MjQzNjEsImV4cCI6MjAzMjUwMDM2MX0.G_DZwVHSECqBnYrY6CB6F4K5AVJVgxygq2jmVQVuYQQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
