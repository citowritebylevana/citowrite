// Nomor WhatsApp (gunakan format internasional tanpa + atau 0)
const WHATSAPP_NUMBER = "6281143412970"; // Format: 62 + nomor lokal tanpa 0 (dari 08114341297)
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
    data.subject
  )}&body=${encodeURIComponent(
    `Dari: ${data.name} (${data.email})\n\n${data.message}`
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
  const serviceNames: Record<string, string> = {
    "ppt-sidang": "PPT Sidang",
    "hasil-skripsi": "Hasil Skripsi",
    "proposal-skripsi": "Proposal Skripsi",
    "other": "Lainnya",
  };

  const serviceName = serviceNames[data.serviceType] || data.serviceType;

  return `🎓 *ORDER BARU - Citowrite*

*Nama Klien:* ${data.name}
*Email:* ${data.email}

*📋 Jenis Layanan:* ${serviceName}

*📝 Detail Kebutuhan:*
${data.details}

${data.fileLink ? `*📎 File Pendukung:* ${data.fileLink}` : "*📎 File Pendukung:* Tidak ada"}

---
Pesan ini dikirim otomatis dari Order Form Citowrite`.trim();
};
