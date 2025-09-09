// EXEMPLO DE CONFIGURAÇÃO PARA ENVIO REAL DE EMAILS
// Para implementar envio real de emails, siga estes passos:

// 1. Instalar dependência do Resend:
// npm install resend

// 2. Criar conta no Resend (https://resend.com) e obter API key

// 3. Adicionar variáveis de ambiente no arquivo .env.local:
// RESEND_API_KEY=your_api_key_here
// CONTACT_EMAIL=alinencchi@gmail.com

// 4. Substituir o código da API route por este:

/*
import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import { ContactFormRequest } from '@/types/api';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormRequest = await request.json();
    
    // Validação dos dados
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { success: false, message: 'Todos os campos são obrigatórios' },
        { status: 400 }
      );
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { success: false, message: 'Email inválido' },
        { status: 400 }
      );
    }

    // Enviar email real
    await resend.emails.send({
      from: 'contato@seudominio.com', // Deve ser um domínio verificado no Resend
      to: process.env.CONTACT_EMAIL || 'alinencchi@gmail.com',
      subject: `Novo contato do portfólio: ${body.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563EB;">Novo contato do seu portfólio</h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #1e293b;">Informações do contato:</h3>
            <p><strong>Nome:</strong> ${body.name}</p>
            <p><strong>Email:</strong> ${body.email}</p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
            <h3 style="margin-top: 0; color: #1e293b;">Mensagem:</h3>
            <p style="white-space: pre-line; line-height: 1.6;">${body.message}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #f1f5f9; border-radius: 8px; font-size: 14px; color: #64748b;">
            <p style="margin: 0;">Este email foi enviado através do formulário de contato do seu portfólio em ${new Date().toLocaleString('pt-BR')}.</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: 'Mensagem enviada com sucesso! Entrarei em contato em breve.',
    });

  } catch (error) {
    console.error('Erro no envio do email:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Erro interno do servidor. Tente novamente mais tarde.' 
      },
      { status: 500 }
    );
  }
}
*/

// ALTERNATIVA COM EMAILJS (mais simples, sem backend):
// 1. Criar conta no EmailJS (https://emailjs.com)
// 2. npm install @emailjs/browser
// 3. Configurar no frontend:

/*
import emailjs from '@emailjs/browser';

export async function sendContactEmail(data: ContactFormRequest): Promise<ContactFormResponse> {
  try {
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      message: data.message,
      to_email: 'alinencchi@gmail.com',
    };

    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      templateParams,
      'YOUR_PUBLIC_KEY'
    );

    return {
      success: true,
      message: 'Mensagem enviada com sucesso!',
    };
  } catch (error) {
    console.error('Erro:', error);
    return {
      success: false,
      message: 'Erro ao enviar mensagem.',
    };
  }
}
*/
