"use client";
import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const form = new FormData(e.currentTarget);
    const data = {
      name: form.get("name"),
      email: form.get("email"),
      message: form.get("message"),
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
    });

    setLoading(false);

    if (res.ok) {
      setStatus("success");
      e.currentTarget.reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#F9F5EE] p-8 rounded-sm shadow-xl border border-[#203F9A]"
    >
      <h4 className="text-xl font-bold mb-6 text-[#203F9A] text-center">
        Any Question?
      </h4>

      <div className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          required
          placeholder="Your Name"
          className="px-4 py-3 rounded-md border border-[#203F9A]/40 focus:outline-none focus:border-[#203F9A]"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Your Email"
          className="px-4 py-3 rounded-md border border-[#203F9A]/40 focus:outline-none focus:border-[#203F9A]"
        />
        <textarea
          placeholder="Your Message"
          name="message"
          required
          rows={5}
          className="px-4 py-3 rounded-md border border-[#203F9A]/40 focus:outline-none focus:border-[#203F9A]"
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className="mt-3 bg-[#203F9A] text-white py-3 rounded-md font-bold hover:bg-[#2e52c7] transition"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </div>

      {/* STATUS MESSAGE */}
      {status === "success" && (
        <div
          className="mt-3 px-4 py-3 rounded-xl bg-[#0f2b1f]/60 border border-green-400/40 
    shadow-[0_0_15px_rgba(34,197,94,0.5)] text-green-300 text-sm flex items-center gap-2 backdrop-blur-md
    animate-slideIn"
        >
          ✅ Your message has been sent successfully.
        </div>
      )}

      {status === "error" && (
        <div
          className="mt-3 px-4 py-3 rounded-xl bg-[#2b0f0f]/60 border border-red-400/40 
    shadow-[0_0_15px_rgba(239,68,68,0.5)] text-red-300 text-sm flex items-center gap-2 backdrop-blur-md
    animate-slideIn"
        >
          ❌ Something went wrong. Please try again.
        </div>
      )}
    </form>
  );
}
