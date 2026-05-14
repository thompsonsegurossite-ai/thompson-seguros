import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface SendConfirmationEmailParams {
  to: string;
  name: string;
  phone: string;
}

export async function sendConfirmationEmail({
  to,
  name,
  phone,
}: SendConfirmationEmailParams): Promise<{ success: boolean; error?: string }> {
  try {
    const result = await resend.emails.send({
      from: "Thompson Seguros <noreply@thompsonseguros.com.br>",
      to: to,
      subject: "Análise personalizada solicitada - Thompson Seguros",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8">
            <style>
              body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #1A2D45; line-height: 1.6; }
              .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
              .header { text-align: center; border-bottom: 2px solid #42B4E8; padding-bottom: 20px; margin-bottom: 30px; }
              .header h1 { color: #42B4E8; margin: 0; font-size: 24px; }
              .content { margin: 30px 0; }
              .content p { margin: 15px 0; }
              .highlight { color: #255F8F; font-weight: 600; }
              .cta { background: #42B4E8; color: white; padding: 12px 30px; border-radius: 6px; text-decoration: none; display: inline-block; margin: 20px 0; }
              .footer { text-align: center; color: #5A6A7A; font-size: 12px; border-top: 1px solid #E2EDF5; padding-top: 20px; margin-top: 40px; }
              .contact-info { background: #F7F9FC; padding: 20px; border-radius: 8px; margin: 20px 0; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Thompson Seguros</h1>
              </div>

              <div class="content">
                <p>Oi <span class="highlight">${name}</span>,</p>

                <p>Recebemos sua solicitação de uma análise personalizada! 🎯</p>

                <p>Um dos nossos consultores entrará em contato com você em breve via <span class="highlight">WhatsApp</span> no número <span class="highlight">${phone}</span>.</p>

                <p>Nossos consultores especializados vão:</p>
                <ul>
                  <li>Entender sua realidade e necessidades</li>
                  <li>Analisar as melhores coberturas disponíveis</li>
                  <li>Explicar tudo com clareza (sem letra miúda)</li>
                  <li>Apresentar as melhores opções para você</li>
                </ul>

                <div class="contact-info">
                  <p><strong>Tempo médio de resposta:</strong> até 2 horas (seg-sex, 9h-18h)</p>
                  <p><strong>Dúvidas urgentes?</strong> Você também pode nos ligar:</p>
                  <p style="margin: 10px 0; font-size: 18px;"><span class="highlight">+55 21 96019-0289</span></p>
                </div>

                <p>Obrigado por escolher a Thompson Seguros! 🙏</p>
                <p>Com 40+ anos de mercado, estamos aqui para cuidar do que não pode ser deixado ao acaso.</p>
              </div>

              <div class="footer">
                <p>Thompson Seguros - Jardim Botânico, Rio de Janeiro — RJ</p>
                <p>© 2026 Thompson Seguros. Todos os direitos reservados.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (result.error) {
      console.error("Resend error:", result.error);
      return { success: false, error: result.error.message };
    }

    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Erro ao enviar email",
    };
  }
}
