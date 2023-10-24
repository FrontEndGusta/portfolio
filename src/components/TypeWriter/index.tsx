import React, { useContext, useEffect, useState } from "react";
import { TypeWriterContainer } from "./styles";
import { ThemeContext } from "styled-components";

interface Props {}
export const TypeWriter: React.FC<Props> = () => {
  const [texto, setTexto] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const theme = useContext(ThemeContext);
  const textInitial = "I'm Gustavo, a";
  const frases = ["Web Developer", "Designer"];
  const textArray = frases[textIndex].split(""); // Divide o texto em um array de letras

  useEffect(() => {
    let newText = ""; // Variável para acumular as letras

    const writer = (index: number) => {
      if (index < textArray.length) {
        newText += textArray[index]; // Adiciona a próxima letra à variável newText
        setTexto(newText); // Atualiza o estado com o novo texto

        setTimeout(() => {
          writer(index + 1); // Chama a função novamente para a próxima letra
        }, 75); // Define um atraso de 75 milissegundos
      } else {
        setTimeout(() => {
          deleter(textArray.length - 1); // Inicia a função para apagar o texto
        }, 1000); // Atraso após o texto ser totalmente digitado
      }
    };

    const deleter = (index: number) => {
      if (index >= 0) {
        newText = newText.slice(0, -1); // Remove a última letra da variável newText
        setTexto(newText); // Atualiza o estado com o texto atual

        setTimeout(() => {
          deleter(index - 1); // Chama a função novamente para apagar a próxima letra
        }, 50); // Define um atraso de 50 milissegundos
      } else {
        setTimeout(() => {
          const nextIndex = (textIndex + 1) % frases.length;
          setTextIndex(nextIndex);
        }, 1000); // Atraso após o texto ser totalmente apagado
      }
    };

    writer(0); // Começa a função de escrita a partir da primeira letra
  }, [textIndex]); // Usamos um array vazio para garantir que o efeito ocorra apenas uma vez

  return (
    <TypeWriterContainer theme={theme}>
      <div className="typewriter">
        <h2>{textInitial}</h2> <h2 className="writer">{texto}</h2>
      </div>
    </TypeWriterContainer>
  );
};

export default TypeWriter;
