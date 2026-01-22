"use client";

import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { sendWhatsAppMessage, formatOrderFormMessage } from "@/lib/whatsapp";

interface FormData {
  name: string;
  email: string;
  serviceType: string;
  details: string;
  file: File | null;
}

interface UploadedFile {
  fileUrl: string;
  fileName: string;
}

// Mapping dari title pricing card ke service type options
const serviceMapping: Record<string, string> = {
  "PPT Sidang": "ppt-sidang",
  "Hasil Skripsi": "hasil-skripsi",
  "Proposal Skripsi": "proposal-skripsi",
};

export default function OrderForm() {
  const searchParams = useSearchParams();
  const service = searchParams.get("service");

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    serviceType: "",
    details: "",
    file: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<UploadedFile | null>(null);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  // Set serviceType berdasarkan query parameter
  useEffect(() => {
    if (service && serviceMapping[service]) {
      setFormData((prev) => ({
        ...prev,
        serviceType: serviceMapping[service],
      }));
    }
  }, [service]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value, type } = e.target;

    if (type === "file") {
      const fileInput = e.target as HTMLInputElement;
      const file = fileInput.files?.[0] || null;
      setFormData((prev) => ({
        ...prev,
        [name]: file,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // Validasi form
      if (!formData.name.trim()) {
        throw new Error("Nama lengkap wajib diisi");
      }
      if (!formData.email.trim()) {
        throw new Error("Email wajib diisi");
      }
      if (!formData.serviceType) {
        throw new Error("Jenis layanan wajib dipilih");
      }
      if (!formData.details.trim()) {
        throw new Error("Detail kebutuhan wajib diisi");
      }

      let finalFileUrl = "";

      // 1. LOGIKA UPLOAD (Jika user melampirkan file)
      if (formData.file) {
        try {
          const uploadResponse = await fetch(
            `/api/upload?filename=${encodeURIComponent(formData.file.name)}`,
            {
              method: "POST",
              body: formData.file,
            }
          );

          if (!uploadResponse.ok) {
            const errorData = await uploadResponse.json().catch(() => ({}));
            throw new Error(
              errorData.error || "Gagal mengupload file. Coba lagi."
            );
          }

          const uploadedData = await uploadResponse.json();
          finalFileUrl = uploadedData.fileUrl;
          setUploadedFile(uploadedData);
        } catch (uploadError) {
          console.error("Upload error:", uploadError);
          throw new Error(
            uploadError instanceof Error
              ? uploadError.message
              : "Terjadi kesalahan saat mengupload file"
          );
        }
      }

      // 2. KIRIM KE WHATSAPP
      const messageData = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        serviceType: formData.serviceType,
        details: formData.details.trim(),
        fileLink: finalFileUrl,
      };

      const message = formatOrderFormMessage(messageData);
      sendWhatsAppMessage(message);

      // 3. TAMPILKAN NOTIF SUKSES
      setSubmitStatus({
        type: "success",
        message:
          "✓ Pesan berhasil dikirim ke WhatsApp! Silakan selesaikan obrolan dengan tim kami.",
      });

      // 4. RESET FORM
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          serviceType: "",
          details: "",
          file: null,
        });
        setUploadedFile(null);
        setSubmitStatus({ type: null, message: "" });
      }, 3000);
    } catch (error) {
      console.error("Error:", error);
      const errorMessage =
        error instanceof Error ? error.message : "Terjadi kesalahan yang tidak terduga";
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
              className="w-full px-3 md:px-8 py-4 rounded-[10px] text-white placeholder-gray-500 transition-all outline-none

              shadow-[inset_-10px_-15px_20px_0px_rgba(255,255,255,0.05),inset_10px_3px_30px_0px_rgba(0,0,0,0.3),1px_1px_0px_0px_rgba(255,255,255,0.3),-1px_-1px_0px_0px_rgba(255,255,255,0.3),0px_4px_4px_0px_rgba(0,0,0,0.25)]

              hover:shadow-[inset_0px_4px_39px_0px_rgba(97,95,255,0.4),inset_0px_0px_0px_0px_rgb(0,0,0),1px_1px_0px_0px_rgba(255,255,255,0.3),-1px_-1px_0px_0px_rgba(255,255,255,0.3)]
              "
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
              className="w-full px-3 md:px-8 py-4 rounded-[10px] text-white placeholder-gray-500 transition-all outline-none 

              shadow-[inset_-10px_-15px_20px_0px_rgba(255,255,255,0.05),inset_10px_3px_30px_0px_rgba(0,0,0,0.3),1px_1px_0px_0px_rgba(255,255,255,0.3),-1px_-1px_0px_0px_rgba(255,255,255,0.3),0px_4px_4px_0px_rgba(0,0,0,0.25)]

              hover:shadow-[inset_0px_4px_39px_0px_rgba(97,95,255,0.4),inset_0px_0px_0px_0px_rgb(0,0,0),1px_1px_0px_0px_rgba(255,255,255,0.3),-1px_-1px_0px_0px_rgba(255,255,255,0.3)]
              "
              required
            />
          </div>

          {/* Jenis Layanan - Two Column on Desktop */}
          <div className="w-full md:col-span-2">
            <label className="block text-sm font-semibold text-indigo-500 mb-2.5">
              Jenis Layanan
            </label>
            <select
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              className="w-full px-3 md:px-8 py-4 rounded-[10px] text-white placeholder-gray-500 transition-all outline-none

              shadow-[inset_-10px_-15px_20px_0px_rgba(255,255,255,0.05),inset_10px_3px_30px_0px_rgba(0,0,0,0.3),1px_1px_0px_0px_rgba(255,255,255,0.3),-1px_-1px_0px_0px_rgba(255,255,255,0.3),0px_4px_4px_0px_rgba(0,0,0,0.25)]

              hover:shadow-[inset_0px_4px_39px_0px_rgba(97,95,255,0.4),inset_0px_0px_0px_0px_rgb(0,0,0),1px_1px_0px_0px_rgba(255,255,255,0.3),-1px_-1px_0px_0px_rgba(255,255,255,0.3)]
              "
              required
            >
              <option value="" disabled className="bg-gray-900">
                Pilih Jenis layanan
              </option>
              <option value="ppt-sidang" className="bg-gray-900">
                PPT Sidang
              </option>
              <option value="hasil-skripsi" className="bg-gray-900">
                Hasil Skripsi
              </option>
              <option value="proposal-skripsi" className="bg-gray-900">
                Proposal Skripsi
              </option>
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
              className="w-full px-3 md:px-8 py-4 rounded-[10px] text-white placeholder-gray-500 transition-all outline-none

              shadow-[inset_-10px_-15px_20px_0px_rgba(255,255,255,0.05),inset_10px_3px_30px_0px_rgba(0,0,0,0.3),1px_1px_0px_0px_rgba(255,255,255,0.3),-1px_-1px_0px_0px_rgba(255,255,255,0.3),0px_4px_4px_0px_rgba(0,0,0,0.25)]

              hover:shadow-[inset_0px_4px_39px_0px_rgba(97,95,255,0.4),inset_0px_0px_0px_0px_rgb(0,0,0),1px_1px_0px_0px_rgba(255,255,255,0.3),-1px_-1px_0px_0px_rgba(255,255,255,0.3)]
              "
              required
            />
          </div>

          {/* File Pendukung */}
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-indigo-500 mb-1.5">
              File Pendukung (Apabila ada)
            </label>
            <p className="text-sm text-[#f5f5f5] mb-2.5">
              File akan diupload ke Google Drive dan link-nya akan dikirim
            </p>
            <input
              type="file"
              name="file"
              onChange={handleChange}
              className="w-full px-3 md:px-8 py-4 rounded-[10px] text-white placeholder-gray-500 transition-all outline-none

              shadow-[inset_-10px_-15px_20px_0px_rgba(255,255,255,0.05),inset_10px_3px_30px_0px_rgba(0,0,0,0.3),1px_1px_0px_0px_rgba(255,255,255,0.3),-1px_-1px_0px_0px_rgba(255,255,255,0.3),0px_4px_4px_0px_rgba(0,0,0,0.25)]

              hover:shadow-[inset_0px_4px_39px_0px_rgba(97,95,255,0.4),inset_0px_0px_0px_0px_rgb(0,0,0),1px_1px_0px_0px_rgba(255,255,255,0.3),-1px_-1px_0px_0px_rgba(255,255,255,0.3)]
              "
            />
            {uploadedFile && (
              <p className="text-sm text-green-400 mt-2">
                ✓ File &quot{uploadedFile.fileName}&quot siap dikirim
              </p>
            )}
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
                Mengirim...
              </>
            ) : (
              <>
                Order Sekarang
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
