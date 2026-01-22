"use client";

import ContactCard from "../ui/ContactCard";
import { MailsIcon } from "lucide-react";
import { SiWhatsapp } from "@icons-pack/react-simple-icons";
import { useState, useEffect } from "react";

interface ContactItem {
  icon: string;
  title: string;
  value: string;
  href: string;
}

interface ContactProps {
  data: {
    title: string;
    subtitle: string;
    contacts: ContactItem[];
  };
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

const iconMap: Record<string, any> = {
  SiWhatsapp,
  MailsIcon,
};

export default function Contact({ data }: ContactProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  // Ensure component only renders on client side to avoid hydration mismatch
  useEffect(() => {
    setIsClient(true);
  }, []);

  const contactsWithIcons = data.contacts.map((contact) => ({
    ...contact,
    icon: iconMap[contact.icon] || SiWhatsapp,
  }));

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Validasi input
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
        alert("Mohon lengkapi semua field required");
        setIsSubmitting(false);
        return;
    }

    const subject = `Pesan dari ${formData.name}`;
    const body = `Nama: ${formData.name}\nEmail: ${formData.email}\n\nPesan:\n${formData.message}`;
    
    // Buka email client default
    window.location.href = `mailto:citowrite.id@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="md:py-15 p-4 md:px-17.5 md:scroll-mt-20">
      {/* Main Card Container */}
      <div className=" rounded-[20px] md:border gap-y-5 md:border-gray-500 md:p-12 lg:p-5 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Left Column: Info */}
        <div className="flex flex-col">
          <h2 className="text-3xl md:text-[44px]/14.5 font-bold text-[#f5f5f5] mb-4.5">
            {data.title}
          </h2>
          <p className="text-[#f5f5f5] text-base/6 mb-5 md:mb-10">
            {data.subtitle}
          </p>

          <div className="space-y-5 md:space-y-4">
            {contactsWithIcons.map((contact, index) => (
              <ContactCard key={index} {...contact} />
            ))}
          </div>
        </div>

        {/* Right Column: Form */}
        {isClient && (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-2.5 rounded-[20px] p-2.5 border border-gray-500"
          >
            {/* Status Messages */}
            {submitStatus.type && (
              <div
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${submitStatus.type === "success"
                    ? "bg-green-500/20 text-green-300 border border-green-500/50"
                    : "bg-red-500/20 text-red-300 border border-red-500/50"
                  }`}
              >
                {submitStatus.message}
              </div>
            )}

            {/* Name Input */}
            <div className="flex flex-col gap-2">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Nama"
                required
                className="w-full rounded-[10px] px-8 py-4 placeholder-[#f5f5f5] focus:outline-none focus:border-none focus:ring-0 transition-all 

                shadow-[inset_-20px_-20px_40px_0px_rgba(255,255,255,0.04),inset_10px_3px_30px_0px_rgba(0,0,0,0.3),1px_1px_0px_0px_rgba(255,255,255,0.3),-1px_-1px_0px_0px_rgba(255,255,255,0.3),0px_4px_4px_0px_rgba(0,0,0,0.25)]

                hover:shadow-[inset_0px_4px_39px_0px_rgba(97,95,255,0.4),inset_0px_0px_0px_0px_rgb(0,0,0),1px_1px_0px_0px_rgba(255,255,255,0.3),-1px_-1px_0px_0px_rgba(255,255,255,0.3)]

                  "
              />
            </div>

            {/* Email Input */}
            <div className="flex flex-col gap-2">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full rounded-[10px] px-8 py-4 placeholder-[#f5f5f5] focus:outline-none focus:border-none focus:ring-0 transition-all 

                  shadow-[inset_-20px_-20px_40px_0px_rgba(255,255,255,0.04),inset_10px_3px_30px_0px_rgba(0,0,0,0.3),1px_1px_0px_0px_rgba(255,255,255,0.3),-1px_-1px_0px_0px_rgba(255,255,255,0.3),0px_4px_4px_0px_rgba(0,0,0,0.25)]

                  hover:shadow-[inset_0px_4px_39px_0px_rgba(97,95,255,0.4),inset_0px_0px_0px_0px_rgb(0,0,0),1px_1px_0px_0px_rgba(255,255,255,0.3),-1px_-1px_0px_0px_rgba(255,255,255,0.3)]
                  "
              />
            </div>

            {/* Message Textarea */}
            <div className="flex flex-col gap-2">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={15}
                placeholder="Tulis pesan kamu disini"
                required
                className="w-full rounded-[10px] px-8 py-4 placeholder-[#f5f5f5] focus:outline-none focus:border-none focus:ring-0 transition-all resize-none 
                shadow-[inset_-20px_-20px_40px_0px_rgba(255,255,255,0.04),inset_15px_10px_40px_0px_rgba(0,0,0,0.2),1px_1px_0px_0px_rgba(255,255,255,0.3),-1px_-1px_0px_0px_rgba(255,255,255,0.3),0px_4px_4px_0px_rgba(0,0,0,0.25)] 
                hover:shadow-[inset_0px_4px_39px_0px_rgba(97,95,255,0.4),inset_0px_0px_0px_0px_rgb(0,0,0),1px_1px_0px_0px_rgba(255,255,255,0.3),-1px_-1px_0px_0px_rgba(255,255,255,0.3)]"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-violet-500 hover:bg-purple-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-[#f5f5f5] font-semibold py-2 md:py-3.5 rounded-[50px] transition-all flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  Mengirim...
                </>
              ) : (
                "Kirim"
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
