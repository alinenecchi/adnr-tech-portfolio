import { NextRequest, NextResponse } from 'next/server';
import { ContactFormRequest } from '@/types/api';

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

    // Validação básica de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { success: false, message: 'Email inválido' },
        { status: 400 }
      );
    }

    // Aqui você pode integrar com serviços como:
    // - Resend (recomendado)
    // - SendGrid
    // - Nodemailer com SMTP
    // - EmailJS
    
    // Por enquanto, vou simular o envio e logar as informações
    console.log('📧 Novo contato recebido:', {
      nome: body.name,
      email: body.email,
      mensagem: body.message,
      timestamp: new Date().toISOString(),
      destinatario: 'alinencchi@gmail.com',
    });

    // Simular delay de envio
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Em produção, substitua por implementação real:
    /*
    const { Resend } = require('resend');
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    await resend.emails.send({
      from: 'contato@seudominio.com',
      to: 'alinencchi@gmail.com',
      subject: `Novo contato: ${body.name}`,
      html: `
        <h2>Novo contato do portfólio</h2>
        <p><strong>Nome:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${body.message}</p>
      `,
    });
    */

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
