"use client";

import { useRouter } from "next/navigation";
import { FiArrowLeft, FiShoppingCart } from "react-icons/fi";

export default function CatalogPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen p-10">
      <nav className="w-full flex items-center justify-between px-6 py-4 bg-white shadow-sm fixed top-0 left-0 z-50">
        {/* LEFT: BACK BUTTON */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-[#203F9A] font-semibold hover:opacity-70 transition"
        >
          <FiArrowLeft className="w-5 h-5" />
          Back
        </button>

        {/* TITLE / LOGO */}
        <h1 className="text-xl font-bold text-[#ff639b]">D.ELOiSE</h1>

        {/* RIGHT: CART */}
        <button
          onClick={() => router.push("/checkout")}
          className="relative flex items-center justify-center w-10 h-10 bg-[#203F9A] text-white rounded-full hover:bg-[#304fc7] transition"
        >
          <FiShoppingCart className="w-5 h-5" />
          {/* BADGE (opsional) */}
          <span className="absolute -top-1 -right-1 bg-[#ff4040] text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
            3
          </span>
        </button>
      </nav>

      <h1 className="text-3xl font-bold text-[#203F9A] mt-18">Catalog</h1>
      <p className="mt-4 text-zinc-700">This is the catalog page.</p>
    </div>
  );
}
