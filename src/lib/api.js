import { supabase } from "./supabaseClient"

export async function getProjects() {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("featured", true)
    .order("sort_order", { ascending: true })

  if (error) {
    console.error("Error loading projects:", error)
    return []
  }

  return data
}

export async function getTechnologies() {
  const { data, error } = await supabase
    .from("technologies")
    .select("*")
    .order("sort_order", { ascending: true })

  if (error) {
    console.error("Error loading technologies:", error)
    return []
  }

  return data
}