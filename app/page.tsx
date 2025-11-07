"use client";

import Image from "next/image";
import Link from "next/link";
import { FiInstagram, FiShoppingBag, FiShoppingCart } from "react-icons/fi";
import { usePathname } from "next/navigation";
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity";
import { useState } from "react";
import ContactForm from "@/components/Contact";

export default function Home() {
  const [openHomeMenu, setOpenHomeMenu] = useState(false);
  const pathname = usePathname();

  const tabs = [
    { name: "Home", href: "/" },
    { name: "Catalog", href: "/catalog" },
  ];
  return (
    <div className="min-h-screen bg-[#F9F5EE]">
      {/* NAVBAR */}
      <nav className="w-full flex items-center justify-between px-8 py-4 bg-white shadow-sm fixed top-0 left-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 relative">
            <Image
              src="/deloise.png"
              alt="Logo"
              fill
              className="rounded-full object-cover"
            />
          </div>
          <h1 className="text-xl font-bold text-[#ff639b]">D.ELOiSE</h1>
        </div>

        <div className="flex items-center gap-3">
          {/* HOME DROPDOWN */}
          <div className="relative">
            <button
              onClick={() => setOpenHomeMenu(!openHomeMenu)}
              className={`
          uppercase px-2 py-1 text-sm font-bold text-[#203F9A] transition border-b-2
          ${
            pathname === "/"
              ? "border-[#203F9A]"
              : "border-transparent hover:border-[#203F9A]"
          }
        `}
            >
              Home
            </button>

            {openHomeMenu && (
              <div className="absolute top-full left-0 mt-2 bg-white dark:bg-zinc-800 border shadow-md rounded-md py-2 w-44 z-50">
                <a
                  href="#how-to-order"
                  className="block px-4 py-2 text-sm font-semibold text-[#203F9A] hover:bg-zinc-100 dark:hover:bg-zinc-700"
                  onClick={() => setOpenHomeMenu(false)}
                >
                  How to Order
                </a>

                <a
                  href="#about-us"
                  className="block px-4 py-2 text-sm font-semibold text-[#203F9A] hover:bg-zinc-100 dark:hover:bg-zinc-700"
                  onClick={() => setOpenHomeMenu(false)}
                >
                  About Us
                </a>

                <a
                  href="#contact"
                  className="block px-4 py-2 text-sm font-semibold text-[#203F9A] hover:bg-zinc-100 dark:hover:bg-zinc-700"
                  onClick={() => setOpenHomeMenu(false)}
                >
                  Contact
                </a>
              </div>
            )}
          </div>

          <Link
            href="/catalog"
            className={`uppercase px-2 py-1 text-sm font-bold text-[#203F9A] transition border-b-2 
        ${
          pathname === "/catalog"
            ? "border-[#203F9A]"
            : "border-transparent hover:border-[#203F9A]"
        }`}
          >
            Catalog
          </Link>

          <Link
            href="https://shopee.co.id/deloise.id"
            target="_blank"
            className="w-8 h-8 flex items-center justify-center bg-[#203F9A] rounded-full border-[1.5px] border-black text-white hover:bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#dc2743] transition"
          >
            <FiShoppingBag className="w-4 h-4" />
          </Link>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="w-full relative aspect-[16/6] sm:aspect-[16/5] md:aspect-[16/4] lg:aspect-[16/5] mt-18">
        <Image
          src="/banner.png"
          alt="Banner"
          fill
          className="object-contain sm:object-cover"
          priority
        />
      </section>

      <ScrollVelocityContainer className="text-sm text-white font-bold md:text-2xl">
        <ScrollVelocityRow baseVelocity={20} direction={1}>
          diamondeloise
        </ScrollVelocityRow>
        <ScrollVelocityRow baseVelocity={20} direction={-1}>
          deloisemond
        </ScrollVelocityRow>
      </ScrollVelocityContainer>

      {/* HOW TO ORDER */}
      <section
        id="how-to-order"
        className="min-h-screen max-w-5xl mx-auto px-8 py-12 sm:py-16 lg:py-20 text-center"
      >
        <h3 className="text-3xl font-bold mb-4 dark:text-white">
          How to Order?
        </h3>
        <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-15">
          Contains instructions on how to order products, please{" "}
          <strong>read</strong> and <strong>understand</strong> before ordering.
          Note! This website only provides products that are currently available
          for pre-order. For ready stock products, you can check directly on our
          Shopee page @deloise.id.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center">
          <div className="flower flex items-center justify-center text-center text-sm font-bold p-10 text-black bg-[#ff639b]">
            <p>
              To place an order for PO items, click the Catalog menu in the top
              right corner of the website.
            </p>
          </div>

          <div className="flower flex items-center justify-center text-center text-sm font-bold p-10 text-black shadow-lg bg-[#ff4040] border border-black/10">
            <p>
              Choose the product you want to order, then open your cart to
              continue to the checkout page.
            </p>
          </div>

          <div className="flower flex items-center justify-center text-center text-sm font-bold p-10 text-black shadow-lg bg-[#3cbf96] border border-black/10">
            <p>
              Review your selected items, fill in the required information
              correctly, and click the Order button.
            </p>
          </div>

          <div className="flower flex items-center justify-center text-center text-sm font-bold p-10 text-black shadow-lg bg-[#2e90cf] border border-black/10">
            <p>
              After receiving your payment invoice, complete the payment and
              your PO process is finished.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about-us"
        className="relative min-h-screen flex items-center justify-center py-12 sm:py-16 lg:py-20 px-4 sm:px-8 [background:repeating-linear-gradient(90deg,#4e7cb2_0px,#4e7cb2_30px,#F9F5EE_30px,#F9F5EE_60px)]"
      >
        <div className="relative max-w-2xl">
          <div
            className="
                absolute -top-10.5 left-0
                bg-[#F9F5EE] 
                px-8 py-2
                rounded-t-lg
                border-t-4 border-[#203F9A]
                border-l-2
                border-r-2
                z-10
              "
          >
            <span className="text-xs font-semibold text-[#203F9A]">
              GET TO KNOW
            </span>
          </div>

          <div
            className="
                relative
                bg-[#F9F5EE] 
                p-12 pt-8
                shadow-xl 
                text-center
                rounded-tr-lg rounded-b-lg
                border-2 border-[#203F9A]
              "
          >
            <h2 className="text-3xl font-bold mb-4 text-[#203F9A]">About Us</h2>

            <p className="text-zinc-700 leading-relaxed">
              Online store business, which was founded in July 2022 and was
              active in December 2023, provides card holders, keyrings,
              keychains, etc. that are designed by ourselves. We are waiting for
              your order! ૮₍ ˶ᵔ ᵕ ᵔ˶ ₎ა
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start relative justify-center py-12 sm:py-16 lg:py-20 px-4 sm:px-8 bg-[#e7a0cc]"
      >
        <div>
          <h3 className="text-3xl font-bold text-[#203F9A] mb-6 text-center">
            Social Media
          </h3>
          <p className="text-zinc-700 dark:text-zinc-300 mb-8 text-center">
            Reach us through our social media or fill the form to send us a
            message.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <a
              href="https://www.instagram.com/deloisemond"
              target="_blank"
              className="flex items-center gap-4 bg-[#F9F5EE] backdrop-blur-sm border border-[#203F9A] p-4 rounded-sm shadow-md hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#dc2743] text-white">
                💎
              </div>
              <div>
                <p className="font-bold text-[#203F9A]">Instagram</p>
                <span className="text-sm text-zinc-600">@deloisemond</span>
              </div>
            </a>

            <a
              href="https://wa.me/6283832486250"
              target="_blank"
              className="flex items-center gap-4 bg-[#F9F5EE] backdrop-blur-sm border border-[#203F9A] p-4 rounded-sm shadow-md hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#3cbf96] text-white">
                💬
              </div>
              <div>
                <p className="font-bold text-[#203F9A]">WhatsApp</p>
                <span className="text-sm text-zinc-600">0838-3248-6250</span>
              </div>
            </a>

            <a
              href="https://x.com/diamondeloise?t=3fop0Zta9F4AqtLGRqBmhw&s=09"
              target="_blank"
              className="flex items-center gap-4 bg-[#F9F5EE] backdrop-blur-sm border border-[#203F9A] p-4 rounded-sm shadow-md hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#4e7cb2] text-white text-xl">
                📱
              </div>
              <div>
                <p className="font-bold text-[#203F9A]">X/Twitter</p>
                <span className="text-sm text-zinc-600">@diamondeloise</span>
              </div>
            </a>

            <a
              href="https://shopee.co.id/deloise.id"
              target="_blank"
              className="flex items-center gap-4 bg-[#F9F5EE] backdrop-blur-sm border border-[#203F9A] p-4 rounded-sm shadow-md hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#ff4040] text-white text-xl">
                🛍️
              </div>
              <div>
                <p className="font-bold text-[#203F9A]">Shopee</p>
                <span className="text-sm text-zinc-600">deloise.id</span>
              </div>
            </a>
          </div>
        </div>

        {/* <form className="bg-[#F9F5EE] p-8 rounded-sm shadow-xl border border-[#203F9A]">
          <h4 className="text-xl font-bold mb-6 text-[#203F9A] text-center">
            Any Question?
          </h4>

          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="px-4 py-3 rounded-md border border-[#203F9A]/40 focus:outline-none focus:border-[#203F9A]"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-3 rounded-md border border-[#203F9A]/40 focus:outline-none focus:border-[#203F9A]"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="px-4 py-3 rounded-md border border-[#203F9A]/40 focus:outline-none focus:border-[#203F9A]"
            ></textarea>

            <button
              type="submit"
              className="mt-3 bg-[#203F9A] text-white py-3 rounded-md font-bold hover:bg-[#2e52c7] transition"
            >
              Send
            </button>
          </div>
        </form> */}

        <ContactForm />
      </section>

      <footer className="w-full bg-[#3cbf96] text-black text-center py-6">
        <p className="text-sm">
          © {new Date().getFullYear()} D.ELOiSE — All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
