interface HuggyCreateContactPayload {
  name: string;
  email: string;
  phone: string;
  message: string;
  source?: string;
}

export async function createContactInHuggy(
  data: HuggyCreateContactPayload
): Promise<{ success: boolean; contactId?: string; error?: string }> {
  const apiKey = process.env.HUGGY_API_KEY;
  const apiUrl = process.env.HUGGY_API_URL;
  const teamId = process.env.HUGGY_TEAM_ID;

  if (!apiKey || !apiUrl || !teamId) {
    console.error("Huggy credentials not configured");
    return {
      success: false,
      error: "Configuração Huggy incompleta",
    };
  }

  try {
    const response = await fetch(`${apiUrl}/contacts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        phone: data.phone,
        teamId: teamId,
        source: data.source || "website-form",
        // Iniciar conversa automaticamente
        message: data.message,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("Huggy API error:", error);
      return {
        success: false,
        error: `Erro Huggy: ${response.status}`,
      };
    }

    const result = await response.json();
    return {
      success: true,
      contactId: result.id || result.contactId,
    };
  } catch (error) {
    console.error("Error creating contact in Huggy:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Erro desconhecido",
    };
  }
}
