import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER ?? "254746890852";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=Hello%20Altitude%20Concierge%2C%20I%27d%20like%20to%20enquire%20about%20your%20services.`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp Concierge"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-5px_rgba(37,211,102,0.5)] hover:scale-110 transition-transform"
    >
      <MessageCircle size={26} />
      <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-30 animate-ping" />
    </a>
  );
}
