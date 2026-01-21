"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  serviceType: string;
  details: string;
  fileLink: string;
}

export default function OrderForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    serviceType: "",
    details: "",
    fileLink: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

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

    try {
      // Add your form submission logic here
      console.log("Form submitted:", formData);
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        serviceType: "",
        details: "",
        fileLink: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
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

        {/* Form */}
        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-5 items-start">
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
              <option value="proposal" className="bg-gray-900">
                Proposal Penelitian
              </option>
              <option value="skripsi" className="bg-gray-900">
                Skripsi Lengkap
              </option>
              <option value="tesis" className="bg-gray-900">
                Tesis
              </option>
              <option value="meta-analysis" className="bg-gray-900">
                Meta-Analysis
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
              Pastikan berupa link Google Drive dengan akses viewer/editor
            </p>
            <input
              type="file"
              name="fileLink"
              value={formData.fileLink}
              onChange={handleChange}
              className="w-full px-3 md:px-8 py-4 rounded-[10px] text-white placeholder-gray-500 transition-all outline-none

              shadow-[inset_-10px_-15px_20px_0px_rgba(255,255,255,0.05),inset_10px_3px_30px_0px_rgba(0,0,0,0.3),1px_1px_0px_0px_rgba(255,255,255,0.3),-1px_-1px_0px_0px_rgba(255,255,255,0.3),0px_4px_4px_0px_rgba(0,0,0,0.25)]

              hover:shadow-[inset_0px_4px_39px_0px_rgba(97,95,255,0.4),inset_0px_0px_0px_0px_rgb(0,0,0),1px_1px_0px_0px_rgba(255,255,255,0.3),-1px_-1px_0px_0px_rgba(255,255,255,0.3)]
              "
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="justify-self-start md:w-auto flex items-center gap-2 justify-center px-8 py-3 bg-indigo-500 hover:bg-purple-700 disabled:bg-gray-600 text-white font-semibold rounded-full transition-all duration-200 mt-5"
          >
            Order Sekarang
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
}
