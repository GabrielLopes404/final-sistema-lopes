const WHATSAPP_NUMBER = "5561991475054";

export function createWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
