"use client";

import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { sendWhatsAppMessage, formatOrderFormMessage } from "@/lib/whatsapp";

// 1. Definisi Tipe Data Props
interface ServiceItem {
  title: string;
}

interface OrderFormProps {
  services?: ServiceItem[]; // Data dinamis dari CMS (Optional array)
}

// 2. Helper untuk membuat slug (PPT Sidang -> ppt-sidang)
const slugify = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Ganti spasi dengan strip
    .replace(/[^\w\-]+/g, "") // Hapus karakter aneh
    .replace(/\-\-+/g, "-"); // Ganti strip ganda
};

export default function OrderForm({ services = [] }: OrderFormProps) {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service");

  interface FormData {
    name: string;
    email: string;
    serviceType: string;
    details: string;
    fileLink: string;
  }

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    serviceType: "",
    details: "",
    fileLink: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  // 3. LOGIKA OTOMATIS: Pilih layanan berdasarkan URL & Data CMS
  useEffect(() => {
    if (serviceParam && services.length > 0) {
      // Normalisasi parameter URL (misal: "PPT Sidang" atau "ppt-sidang")
      const paramSlug = slugify(serviceParam);

      // Cari apakah ada service yang cocok
      const foundService = services.find(
        (s) => slugify(s.title) === paramSlug
      );

      if (foundService) {
        setFormData((prev) => ({
          ...prev,
          serviceType: slugify(foundService.title),
        }));
      }
    }
  }, [serviceParam, services]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // Validasi
      if (!formData.name.trim()) throw new Error("Nama lengkap wajib diisi");
      if (!formData.email.trim()) throw new Error("Email wajib diisi");
      if (!formData.serviceType) throw new Error("Jenis layanan wajib dipilih");
      if (!formData.details.trim()) throw new Error("Detail kebutuhan wajib diisi");

      // Siapkan Data Pesan
      // Kita perlu mencari Title asli berdasarkan slug yang dipilih user agar pesan WA lebih rapi
      // Jika tidak ketemu, pakai value slug-nya saja (fallback)
      const selectedServiceObj = services.find(s => slugify(s.title) === formData.serviceType);
      const serviceDisplayTitle = selectedServiceObj ? selectedServiceObj.title : formData.serviceType;

      const messageData = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        serviceType: serviceDisplayTitle, // Kirim Title asli ke WA (contoh: "PPT Sidang")
        details: formData.details.trim(),
        fileLink: formData.fileLink.trim(),
      };

      const message = formatOrderFormMessage(messageData);

      await new Promise(resolve => setTimeout(resolve, 800)); // UX Delay
      sendWhatsAppMessage(message);

      setSubmitStatus({
        type: "success",
        message: "✓ Membuka WhatsApp...",
      });

      // Reset Form
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          serviceType: "",
          details: "",
          fileLink: "",
        });
        setSubmitStatus({ type: null, message: "" });
      }, 3000);

    } catch (error) {
      console.error("Error:", error);
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Terjadi kesalahan yang tidak terduga";
      setSubmitStatus({
        type: "error",
        message: `✗ ${errorMessage}`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full px-4 max-w-600 mx-auto py-18 md:px-17.5 md:mt-18">
      <div className="rounded-[20px] md:border md:border-gray-500 md:p-5">
        {/* Header */}
        <div className="mb-10 space-y-2">
          <h1 className="text-2xl md:text-[44px]/14.5 font-bold text-[#f5f5f5]">
            Formulir Pemesanan Citowrite
          </h1>
          <p className="text-[#f5f5f5] text-sm md:text-base/6 md:max-w-[60ch]">
            Lengkapi detail kebutuhan akademik anda dibawah ini untuk memulai
            pendampingan profesional.
          </p>
        </div>

        {/* Status Messages */}
        {submitStatus.type && (
          <div
            className={`mb-6 px-4 py-3 rounded-lg text-sm font-medium transition-all ${submitStatus.type === "success"
                ? "bg-green-500/20 text-green-300 border border-green-500/50"
                : "bg-red-500/20 text-red-300 border border-red-500/50"
              }`}
          >
            {submitStatus.message}
          </div>
        )}

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 gap-5 items-start"
        >
          {/* Nama Lengkap */}
          <div>
            <label className="block text-sm font-semibold text-indigo-500 mb-2.5">
              Nama Lengkap
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Contoh: Andi Sentosa"
              className="w-full px-3 md:px-8 py-4 rounded-[10px] text-white placeholder-gray-500 transition-all outline-none shadow-[inset_-10px_-15px_20px_0px_rgba(255,255,255,0.05),inset_10px_3px_30px_0px_rgba(0,0,0,0.3),1px_1px_0px_0px_rgba(255,255,255,0.3),-1px_-1px_0px_0px_rgba(255,255,255,0.3),0px_4px_4px_0px_rgba(0,0,0,0.25)] hover:shadow-[inset_0px_4px_39px_0px_rgba(97,95,255,0.4),inset_0px_0px_0px_0px_rgb(0,0,0),1px_1px_0px_0px_rgba(255,255,255,0.3),-1px_-1px_0px_0px_rgba(255,255,255,0.3)]"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-indigo-500 mb-2.5">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="contoh@example.com"
              className="w-full px-3 md:px-8 py-4 rounded-[10px] text-white placeholder-gray-500 transition-all outline-none shadow-[inset_-10px_-15px_20px_0px_rgba(255,255,255,0.05),inset_10px_3px_30px_0px_rgba(0,0,0,0.3),1px_1px_0px_0px_rgba(255,255,255,0.3),-1px_-1px_0px_0px_rgba(255,255,255,0.3),0px_4px_4px_0px_rgba(0,0,0,0.25)] hover:shadow-[inset_0px_4px_39px_0px_rgba(97,95,255,0.4),inset_0px_0px_0px_0px_rgb(0,0,0),1px_1px_0px_0px_rgba(255,255,255,0.3),-1px_-1px_0px_0px_rgba(255,255,255,0.3)]"
              required
            />
          </div>

          {/* 4. Dropdown Jenis Layanan (DINAMIS) */}
          <div className="w-full md:col-span-2">
            <label className="block text-sm font-semibold text-indigo-500 mb-2.5">
              Jenis Layanan
            </label>
            <select
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              className="w-full px-3 md:px-8 py-4 rounded-[10px] text-white placeholder-gray-500 transition-all outline-none shadow-[inset_-10px_-15px_20px_0px_rgba(255,255,255,0.05),inset_10px_3px_30px_0px_rgba(0,0,0,0.3),1px_1px_0px_0px_rgba(255,255,255,0.3),-1px_-1px_0px_0px_rgba(255,255,255,0.3),0px_4px_4px_0px_rgba(0,0,0,0.25)] hover:shadow-[inset_0px_4px_39px_0px_rgba(97,95,255,0.4),inset_0px_0px_0px_0px_rgb(0,0,0),1px_1px_0px_0px_rgba(255,255,255,0.3),-1px_-1px_0px_0px_rgba(255,255,255,0.3)]"
              required
            >
              <option value="" disabled className="bg-gray-900">
                Pilih Jenis layanan
              </option>

              {/* Looping Data Services dari CMS */}
              {services.length > 0 ? (
                services.map((service, index) => (
                  <option
                    key={index}
                    value={slugify(service.title)}
                    className="bg-gray-900"
                  >
                    {service.title}
                  </option>
                ))
              ) : (
                <option value="" disabled className="bg-gray-900">
                  Memuat layanan...
                </option>
              )}

              <option value="other" className="bg-gray-900">
                Lainnya
              </option>
            </select>
          </div>

          {/* Detail Kebutuhan */}
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-indigo-500 mb-2.5">
              Detail Kebutuhan
            </label>
            <textarea
              name="details"
              value={formData.details}
              onChange={handleChange}
              placeholder="Ceritakan detail kebutuhan atau kesulitan anda..."
              rows={12}
              className="w-full px-3 md:px-8 py-4 rounded-[10px] text-white placeholder-gray-500 transition-all outline-none shadow-[inset_-10px_-15px_20px_0px_rgba(255,255,255,0.05),inset_10px_3px_30px_0px_rgba(0,0,0,0.3),1px_1px_0px_0px_rgba(255,255,255,0.3),-1px_-1px_0px_0px_rgba(255,255,255,0.3),0px_4px_4px_0px_rgba(0,0,0,0.25)] hover:shadow-[inset_0px_4px_39px_0px_rgba(97,95,255,0.4),inset_0px_0px_0px_0px_rgb(0,0,0),1px_1px_0px_0px_rgba(255,255,255,0.3),-1px_-1px_0px_0px_rgba(255,255,255,0.3)]"
              required
            />
          </div>

          {/* Link File Pendukung */}
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-indigo-500 mb-1.5">
              Link File Pendukung (Google Drive)
            </label>
            <p className="text-sm text-[#f5f5f5] mb-2.5">
              Pastikan akses link diset ke "Anyone with the link" (Siapa saja yang memiliki link)
            </p>
            <input
              type="text"
              name="fileLink"
              value={formData.fileLink}
              onChange={handleChange}
              className="w-full px-3 md:px-8 py-4 rounded-[10px] text-white placeholder-gray-500 transition-all outline-none shadow-[inset_-10px_-15px_20px_0px_rgba(255,255,255,0.05),inset_10px_3px_30px_0px_rgba(0,0,0,0.3),1px_1px_0px_0px_rgba(255,255,255,0.3),-1px_-1px_0px_0px_rgba(255,255,255,0.3),0px_4px_4px_0px_rgba(0,0,0,0.25)] hover:shadow-[inset_0px_4px_39px_0px_rgba(97,95,255,0.4),inset_0px_0px_0px_0px_rgb(0,0,0),1px_1px_0px_0px_rgba(255,255,255,0.3),-1px_-1px_0px_0px_rgba(255,255,255,0.3)]"
              placeholder="https://drive.google.com/..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="justify-self-start md:w-auto flex items-center gap-2 justify-center px-8 py-3 bg-indigo-500 hover:bg-purple-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold rounded-full transition-all duration-200 mt-5"
          >
            {isSubmitting ? (
              <>
                <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                Memproses...
              </>
            ) : (
              <>
                Kirim ke WhatsApp
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
