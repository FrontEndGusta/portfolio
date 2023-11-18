import React, { useState } from "react";
import { Container } from "./styles";
import emailjs from '@emailjs/browser'
import { object, string } from 'yup'
const Contact: React.FC = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail=(e: { preventDefault: () => void; })=>{
    e.preventDefault()
    if(name === '' || email === '' || message === ''){
        alert("preencha os campos")
        return
    }

    const templateParams ={
        from_name: name,
        message: message,
        email: email
    }
    emailjs.send("service_fhy02sg", "template_jtxxf7o", templateParams, "H0O3O5bLqwzn8jgA8")
    .then((response)=>{
        console.log("email enviado")
        setName('')
        setEmail('')
        setMessage('')
    }, (err)=>{
        console.log("erro: ", err)
    })
  }
  return (
    <Container>
    <div className="container">
      <h1 className="title">Contato</h1>

      <form className="form" onSubmit={sendEmail}>
        <input
          className="input"
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <input
          className="input"
          type="text"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <textarea
          className="textarea"
          placeholder="Digite sua mensagem..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <input className="button" type="submit" value="Enviar" />
      </form>
    </div>
    </Container>
  );
};

const formSchema = object({
    name: string().required(),
    email: string().email().required(),
})

export default Contact;
