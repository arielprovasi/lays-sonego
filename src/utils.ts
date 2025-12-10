// WhatsApp utility functions
export const WHATSAPP_NUMBER = "+5515996108172"; // +55 15 99610-8172

/**
 * Generates a WhatsApp link with a personalized message
 * @param message - The personalized message to send
 * @returns WhatsApp deep link URL
 */
export const getWhatsAppLink = (message: string): string => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}?text=${encodedMessage}`;
};

/**
 * Generates personalized messages for different contexts
 */
export const getWhatsAppMessages = {
  // General contact message
  general: () => "Olá! Gostaria de saber mais sobre os serviços e agendar uma consulta.",

  // Package-specific messages
  package: (packageTitle: string, packagePrice: number) => 
    `Olá! Tenho interesse no pacote *${packageTitle}* (${packagePrice.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}). Gostaria de agendar esta experiência.`,

  // Service-specific messages
  service: (serviceName: string, servicePrice: number) => 
    `Olá! Tenho interesse no serviço *${serviceName}* (${servicePrice.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}). Gostaria de agendar uma sessão.`,

  // Body package messages
  bodyPackage: (packageName: string, packagePrice: number) => 
    `Olá! Tenho interesse no pacote *${packageName}* (${packagePrice.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}). Gostaria de agendar.`,
};

