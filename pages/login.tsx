import React from "react";
import { Button, Card, Container, Form, FormGroup } from "react-bootstrap";
import stylesSeccion from "../styles/Seccion.module.css";

const login = () => {
  return (
    <section className={stylesSeccion.Seccion}>
      <Container className={stylesSeccion.Contenedor}>
        <div
          style={{
            width: "20rem",
            margin: "auto",
          }}
        >
          <h2 className={stylesSeccion.Titulo}>Iniciar Sesion</h2>
          <Form
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <FormGroup style={{ marginBottom: "1rem" }}>
              <Form.Label>Usuario</Form.Label>
              <Form.Control type="text" placeholder="Ingrese su usuario" />
            </FormGroup>
            <FormGroup style={{ marginBottom: "1rem" }}>
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingrese su contraseña"
              />
            </FormGroup>
            <Button
              type="submit"
              style={{
                backgroundColor: "var(--violeta)",
              }}
            >
              Iniciar
            </Button>
          </Form>
        </div>
      </Container>
    </section>
  );
};
export default login;