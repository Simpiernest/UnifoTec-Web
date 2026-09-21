const API_BASE_URL = "http://localhost:8000/api";

export async function fetchHero() {
  const res = await fetch(`${API_BASE_URL}/hero`);
  if (!res.ok) throw new Error("Failed to fetch hero data");
  return res.json();
}

export async function updateHero(data: { title: string; subtitle: string }) {
  const res = await fetch(`${API_BASE_URL}/hero`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function fetchServices() {
  const res = await fetch(`${API_BASE_URL}/services`);
  if (!res.ok) throw new Error("Failed to fetch services");
  return res.json();
}

export async function addService(data: any) {
  const res = await fetch(`${API_BASE_URL}/services`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function updateService(id: number, data: any) {
  const res = await fetch(`${API_BASE_URL}/services/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function deleteService(id: number) {
  const res = await fetch(`${API_BASE_URL}/services/${id}`, {
    method: "DELETE",
  });
  return res.json();
}

export async function fetchTeam() {
  const res = await fetch(`${API_BASE_URL}/team`);
  if (!res.ok) throw new Error("Failed to fetch team");
  return res.json();
}
