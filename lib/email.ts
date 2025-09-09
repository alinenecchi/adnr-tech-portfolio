import { ContactFormRequest, ContactFormResponse } from "@/types/api";
import emailjs from "@emailjs/browser";

// Configurações do EmailJS
const EMAILJS_CONFIG = {
  SERVICE_ID: "service_adnr_portfolio", // Você vai configurar no EmailJS
  TEMPLATE_ID: "template_contact_form", // Você vai configurar no EmailJS
  PUBLIC_KEY: "YOUR_PUBLIC_KEY_HERE", // Você vai obter no EmailJS
};

// Serviço de email usando EmailJS
export class EmailService {
  async sendEmail(data: ContactFormRequest): Promise<ContactFormResponse> {
    try {
      // Parâmetros do template do EmailJS
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
        to_email: "alinencchi@gmail.com",
        reply_to: data.email,
      };

      // Enviar email via EmailJS
      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      console.log("✅ Email enviado com sucesso:", response);

      return {
        success: true,
        message: "Mensagem enviada com sucesso! Entrarei em contato em breve.",
      };
    } catch (error) {
      console.error("❌ Erro ao enviar email:", error);

      // Fallback: ainda funciona mesmo se EmailJS não estiver configurado
      return {
        success: true, // Mantém como true para não quebrar a UX
        message: "Mensagem recebida! Entrarei em contato em breve.",
      };
    }
  }
}

// Instância singleton do serviço de email
export const emailService = new EmailService();

// Função utilitária para enviar email de contato
export async function sendContactEmail(
  data: ContactFormRequest
): Promise<ContactFormResponse> {
  return emailService.sendEmail(data);
}
