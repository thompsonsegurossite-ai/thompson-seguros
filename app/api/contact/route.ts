import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation";
import { createContactInHuggy } from "@/lib/huggy";
import { sendConfirmationEmail } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validar dados
    const validationResult = contactFormSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Dados inválidos",
          details: validationResult.error.flatten(),
        },
        { status: 400 }
      );
    }

    const { name, email, whatsapp } = validationResult.data;

    // Criar contato no Huggy
    const huggyResult = await createContactInHuggy({
      name,
      email,
      phone: whatsapp,
      message: `Novo lead do site - ${name}\nEmail: ${email}\nWhatsApp: ${whatsapp}`,
      source: "website-form",
    });

    // Enviar email de confirmação (mesmo se Huggy falhar)
    const emailResult = await sendConfirmationEmail({
      to: email,
      name,
      phone: whatsapp,
    });

    // Se ambos falharem, retornar erro
    if (!huggyResult.success && !emailResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Erro ao processar solicitação",
        },
        { status: 500 }
      );
    }

    // Sucesso (mesmo com falha parcial)
    return NextResponse.json({
      success: true,
      message: "Solicitação recebida com sucesso!",
      huggy: huggyResult.success,
      email: emailResult.success,
      whatsappUrl: `https://wa.me/5521960190289?text=${encodeURIComponent(
        `Olá! Me chamo ${name}, meu email é ${email} e meu WhatsApp é ${whatsapp}. Gostaria de uma análise personalizada.`
      )}`,
    });
  } catch (error) {
    console.error("Error in contact API:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Erro ao processar solicitação",
      },
      { status: 500 }
    );
  }
}
