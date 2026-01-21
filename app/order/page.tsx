import { Suspense } from "react";
import OrderForm from "@/components/sections/OrderForm";

export default function OrderPage() {
  return (
    <Suspense fallback={<div className="w-full px-4 py-18">Loading...</div>}>
      <OrderForm />
    </Suspense>
  );
}
