export const SITE_URL = "https://koukiwebservice.com";

// Valores de exemplo: trocar pelos reais quando for configurar os contatos.
export const WHATSAPP_NUMBER = "5566997187450"; // país + DDD + número, só dígitos
export const INSTAGRAM_HANDLE = "kouki.web";

export const whatsappLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
export const INSTAGRAM_URL = `https://instagram.com/${INSTAGRAM_HANDLE}`;

export const EMAIL = "koukitech5@gmail.com";