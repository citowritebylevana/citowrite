import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Konfigurasi email transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

interface EmailRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const body: EmailRequest = await request.json();

    const { name, email, subject, message } = body;

    // Validasi input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Semua field wajib diisi" },
        { status: 400 }
      );
    }

    // Format pesan email
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f5f5f5; border-radius: 8px;">
        <h2 style="color: #333; margin-bottom: 20px;">Pesan Baru dari Citowrite</h2>
        
        <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <p><strong>Nama:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          
          <hr style="border: 1px solid #ddd; margin: 20px 0;" />
          
          <p><strong>Pesan:</strong></p>
          <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
        </div>
        
        <p style="color: #666; font-size: 12px; text-align: center;">
          Pesan ini dikirim otomatis dari Contact Form Citowrite
        </p>
      </div>
    `;

    // Kirim email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVE, // Email tujuan (email admin)
      subject: `Citowrite - ${subject}`,
      html: htmlContent,
      replyTo: email,
    });

    return NextResponse.json(
      { success: true, message: "Email berhasil dikirim" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { error: "Gagal mengirim email. Coba lagi nanti." },
      { status: 500 }
    );
  }
}
