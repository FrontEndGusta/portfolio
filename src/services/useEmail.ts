const email: string = "gustavo.lima1307@gmail.com";

const useContactClick = (): void => {
  const subject: string = "Interesse no seu portfólio"; // Assunto do e-mail

  // Criar o link de e-mail
  const mailtoLink: string = `mailto:${email}?subject=${encodeURIComponent(subject)}`;

  // Abrir o cliente de e-mail padrão do usuário
  window.location.href = mailtoLink;
};

export default useContactClick;
