'use client';

import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  serviceType: string;
  details: string;
  fileLink: string;
}

export default function OrderForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    serviceType: '',
    details: '',
    fileLink: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Add your form submission logic here
      console.log('Form submitted:', formData);
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        serviceType: '',
        details: '',
        fileLink: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-600 mx-auto py-10 px-4">
      <div className="rounded-[20px] border border-white/10 backdrop-blur-sm p-8 md:p-12 bg-black/40">
        
        {/* Header */}
        <div className="mb-8 space-y-3">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Formulir Pemesanan Citowrite
          </h1>
          <p className="text-gray-300 text-base md:text-lg">
            Lengkapi detail kebutuhan akademik anda dibawah ini untuk memulai pendampingan profesional.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Nama Lengkap */}
          <div>
            <label className="block text-sm font-semibold text-indigo-400 mb-2">
              Nama Lengkap
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Contoh: Andi Sentosa"
              className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-indigo-400 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="contoh@example.com"
              className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
              required
            />
          </div>

          {/* Jenis Layanan - Two Column on Desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-indigo-400 mb-2">
                Jenis Layanan
              </label>
              <select
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all appearance-none cursor-pointer"
                required
              >
                <option value="" disabled className="bg-gray-900">Pilih Jenis layanan</option>
                <option value="proposal" className="bg-gray-900">Proposal Penelitian</option>
                <option value="skripsi" className="bg-gray-900">Skripsi Lengkap</option>
                <option value="tesis" className="bg-gray-900">Tesis</option>
                <option value="meta-analysis" className="bg-gray-900">Meta-Analysis</option>
                <option value="other" className="bg-gray-900">Lainnya</option>
              </select>
            </div>
          </div>

          {/* Detail Kebutuhan */}
          <div>
            <label className="block text-sm font-semibold text-indigo-400 mb-2">
              Detail Kebutuhan
            </label>
            <textarea
              name="details"
              value={formData.details}
              onChange={handleChange}
              placeholder="Ceritakan detail kebutuhan atau kesulitan anda..."
              rows={6}
              className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none"
              required
            />
          </div>

          {/* File Pendukung */}
          <div>
            <label className="block text-sm font-semibold text-indigo-400 mb-2">
              File Pendukung (Apabila ada)
            </label>
            <p className="text-sm text-gray-400 mb-3">
              Pastikan berupa link Google Drive dengan akses viewer/editor
            </p>
            <input
              type="url"
              name="fileLink"
              value={formData.fileLink}
              onChange={handleChange}
              placeholder="Tambahkan File pendukung (Link)"
              className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full md:w-auto flex items-center gap-2 justify-center px-8 py-3 bg-indigo-500 hover:bg-indigo-600 disabled:bg-gray-600 text-white font-semibold rounded-full transition-all duration-200 mt-8"
          >
            Order Sekarang
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
}
