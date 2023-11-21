import React, { useState } from "react";
import { Container } from "./styles";
import emailjs from "@emailjs/browser";
import { object, string, ObjectSchema } from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useToastContext } from "components/Toast/useToastContext";

const Contact: React.FC = () => {
  const { createToast, ToastComponent } = useToastContext();
  interface formProps {
    name: string;
    email: string;
    message: string;
  }
  const formSchema: ObjectSchema<formProps> = object({
    name: string().required("é necessário preencher o campo de nome"),
    email: string()
      .email()
      .required("é necessário preencher o campo de e-mail"),
    message: string().required("é necessário preencher a mensagem"),
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
          createToast.success('Mensagem enviada com sucesso');
          reset();
        },
        (err) => {
          createToast.error('Ocorreu um erro ao enviar a mensagem');
          console.log("erro: ", err);
        }
      );
  };
  return (
    <Container>
      <div className="container">
        <h1 className="title">Contato</h1>

        <form className="form" onSubmit={handleSubmit(sendEmail)}>
          <input
            className="input"
            placeholder="digite seu nome"
            type="text"
            {...register("name")}
          />
          {errors.name && <span>{errors.name?.message}</span>}

          <input
            className="input"
            type="text"
            placeholder="Digite seu email"
            {...register("email")}
          />
          {errors.email && <span>{errors.email?.message}</span>}

          <textarea
            className="textarea"
            placeholder="Digite sua mensagem..."
            {...register("message")}
          />
          {errors.message && <span>{errors.message?.message}</span>}
          
          <input className="button" type="submit" value="Enviar" />
        </form>
      </div>
    </Container>
  );
};

export default Contact;
