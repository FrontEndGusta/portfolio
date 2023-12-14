import React, { useState } from "react";
import { Container } from "./styles";
import emailjs from "@emailjs/browser";
import { object, string, ObjectSchema } from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useToastContext } from "components/Toast/useToastContext";
import IconsContact from "pages/Home/components/SectionFor/components/IconsContact";

const Contact: React.FC = () => {
  const { createToast } = useToastContext();
  interface formProps {
    name: string;
    email: string;
    message: string;
  }
  const formSchema: ObjectSchema<formProps> = object({
    name: string().required("É necessário preencher o campo de nome."),
    email: string()
      .email()
      .required("É necessário preencher o campo de e-mail."),
    message: string().required("É necessário preencher a mensagem."),
  });

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<formProps>({ resolver: yupResolver(formSchema) });

  const sendEmail = (data: formProps) => {
    const templateParams = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    emailjs
      .send(
        "service_fhy02sg",
        "template_jtxxf7o",
        templateParams,
        "H0O3O5bLqwzn8jgA8"
      )
      .then(
        (response) => {
          createToast.success("Mensagem enviada com sucesso");
          reset();
        },
        (err) => {
          createToast.error("Ocorreu um erro ao enviar a mensagem");
          console.log("erro: ", err);
        }
      );
  };
  return (
    <Container>
      <div className="container">
        <h2>Me mande um E-mail</h2>
        <form className="form" onSubmit={handleSubmit(sendEmail)}>
          <input
            className="input"
            placeholder="Digite seu nome"
            type="text"
            {...register("name")}
          />
          {errors.name && <span className="error">{errors.name?.message}</span>}

          <input
            className="input"
            type="text"
            placeholder="Digite seu e-mail"
            {...register("email")}
          />
          {errors.email && (
            <span className="error">{errors.email?.message}</span>
          )}

          <textarea
            className="textarea"
            placeholder="Digite sua mensagem..."
            {...register("message")}
          />
          {errors.message && (
            <span className="error">{errors.message?.message}</span>
          )}

          <input className="button" type="submit" value="Enviar" />
        </form>
        <div className="iconsContact">
          <IconsContact />
        </div>
      </div>
    </Container>
  );
};

export default Contact;
