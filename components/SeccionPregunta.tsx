import React, { useState } from "react";
import { Container, ButtonGroup, Button, Modal, Alert } from "react-bootstrap";
import stylesSeccion from "../styles/Seccion.module.css";
import PreguntaSimple, { PropsPreguntaSimple } from "./PreguntaSimple";
import Cuestionario from "./Cuestionario";

const propsPreguntas: PropsPreguntaSimple[] = Cuestionario.map((pregunta) => {
  const props: PropsPreguntaSimple = {
    pregunta,
  };
  return props;
});

const cantidadPreguntas: number = Cuestionario.length;

const SeccionPregunta = (): JSX.Element => {
  const [idPregunta, setIdPregunta] = useState(0);
  const [finalizado, setFinalizado] = useState(false);

  const pasarPregunta = () => {
    const nextIdPregunta = Math.min(cantidadPreguntas - 1, idPregunta + 1);
    setIdPregunta(nextIdPregunta);
    setFinalizado(idPregunta + 1 >= cantidadPreguntas);
  };

  const preguntas: JSX.Element[] = propsPreguntas.map((pregunta, index) => {
    pregunta.pasarPregunta = pasarPregunta;
    return <PreguntaSimple {...pregunta} key={index} />;
  });

  return (
    <>
      <section className={stylesSeccion.Seccion}>
        <Container className={stylesSeccion.Contenedor}>
          {preguntas[idPregunta]}
        </Container>
      </section>

      <Modal
        show={finalizado}
        onHide={() => setFinalizado(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Alert
          variant="success"
          style={{ margin: "1rem", textAlign: "center" }}
        >
          Agradecemos el tiempo dedicado en completar la entrevista. Si te
          interesa ser donante, te esperamos de lunes a sabado, 8hs a 12hs, en
          Hemoterapia, Av. Cordoba 2351, 3er piso. Si queres que te contactemos,
          podes completar el{" "}
          <Alert.Link href="/contacto">siguiente formulario</Alert.Link>.
        </Alert>
      </Modal>
    </>
  );
};

export default SeccionPregunta;
