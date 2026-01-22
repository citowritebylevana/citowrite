// Konfigurasi Kontak
// PENTING: Ganti angka di bawah sesuai nomor WhatsApp Admin yang aktif
// Format: Kode Negara (62) + Nomor HP tanpa angka 0 di depan
// Contoh: 08114341297 menjadi 628114341297
const WHATSAPP_NUMBER = "6287764632708";
const CONTACT_EMAIL = "citowrite.id@gmail.com";

export const sendWhatsAppMessage = (message: string): void => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  window.open(whatsappUrl, "_blank");
};

export const sendEmailMessage = (data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): void => {
  const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    data.subject,
  )}&body=${encodeURIComponent(
    `Dari: ${data.name} (${data.email})\n\n${data.message}`,
  )}`;
  window.location.href = mailtoLink;
};

export const formatContactFormMessage = (data: {
  name: string;
  email: string;
  message: string;
}): string => {
  return data.message;
};

export const formatOrderFormMessage = (data: {
  name: string;
  email: string;
  serviceType: string;
  details: string;
  fileLink?: string;
}): string => {
  // Kita tidak perlu mapping manual lagi karena OrderForm sudah mengirimkan Judul Asli (Service Title)

  return `*ORDER BARU - Citowrite*

*Nama Klien:* ${data.name}
*Email:* ${data.email}

*Jenis Layanan:* ${data.serviceType}

*Detail Kebutuhan:*
${data.details}

${data.fileLink ? `*File Pendukung:* ${data.fileLink}` : "*File Pendukung:* Tidak ada"}

---
Pesan ini dikirim otomatis dari Order Form Citowrite`.trim();
};
