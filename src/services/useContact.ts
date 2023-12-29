const email: string = "gustavo.lima1307@gmail.com";

const useContactClick = (): { handleContactClick: () => void } => {
  const handleContactClick = (): void => {
    const phoneNumber: number = 5511996952488; // Assunto do e-mail

    const whatsappUrl: string = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=Ol%C3%A1,%20tudo%20bem?%20vi%20seu%20portf%C3%B3lio%20e%20tive%20interesse%20em%20saber%20mais%20sobre%20voc%C3%AA!`;

    window.location.href = whatsappUrl;
  };

  return { handleContactClick };
};

export default useContactClick;
