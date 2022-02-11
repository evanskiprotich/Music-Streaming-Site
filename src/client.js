import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://rkesxbyrdogckdfvgedj.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJrZXN4YnlyZG9nY2tkZnZnZWRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQzOTc4NDgsImV4cCI6MTk1OTk3Mzg0OH0._DbvWw2iJ-5BxYBX7N-VQf49t4AKZTz_T1oXNT2AB2g"
);
