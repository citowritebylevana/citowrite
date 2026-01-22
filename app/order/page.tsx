import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Suspense } from "react";
import OrderForm from "@/components/sections/OrderForm";

// 1. Definisikan Tipe Data yang sesuai dengan pricing.md
interface PricingCard {
  title: string;
  // Kita hanya butuh title untuk dropdown, properti lain opsional disini
}

interface PricingData {
  cards: PricingCard[];
}

// 2. Fungsi untuk mengambil data pricing dari Markdown
function getPricingServices() {
  const filePath = path.join(process.cwd(), "contents", "pricing.md");

  // Cek apakah file ada
  if (!fs.existsSync(filePath)) return [];

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data } = matter(fileContent);
  const pricingData = data as PricingData;

  // Kembalikan array berisi title saja, atau array kosong jika tidak ada cards
  return pricingData.cards || [];
}

export default function OrderPage() {
  // 3. Ambil data service (Server Side Rendering)
  // Ini otomatis berjalan di server saat halaman dibuka
  const services = getPricingServices();

  // Format data agar sesuai dengan props yang diminta OrderForm
  // Kita map agar bentuknya [{ title: "Judul" }, ...]
  const formattedServices = services.map((card) => ({
    title: card.title,
  }));

  return (
    <Suspense fallback={<div className="w-full px-4 py-18 text-white text-center">Loading form...</div>}>
      {/* 4. Kirim data services ke OrderForm */}
      <OrderForm services={formattedServices} />
    </Suspense>
  );
}
