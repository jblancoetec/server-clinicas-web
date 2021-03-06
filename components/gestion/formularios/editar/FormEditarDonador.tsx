import React from "react";
import { useForm } from "react-hook-form";
import { IDonador } from "../../../../models/Donador";
import { useDocsContext } from "../contextos/DocsContextProvider";
import { FormDataDonador } from "../common/interfaces";
import { Form } from "react-bootstrap";
import styles from "../common/Form.module.css";
import BotonSubmit from "../common/BotonSubmit";

interface IDatoAEditar {
  label: string;
  placeholder: string;
  type: string;
  id: "nombre" | "apellido" | "email" | "telefono" | "tipo";
}

const FormEditarDonador = (donador: IDonador) => {
  const datosAEditar: IDatoAEditar[] = [
    {
      label: "Nombre",
      placeholder: donador.nombre,
      id: "nombre",
      type: "text",
    },
    {
      label: "Apellido",
      placeholder: donador.apellido,
      id: "apellido",
      type: "text",
    },
    {
      label: "Correo electrónico",
      placeholder: donador.email,
      id: "email",
      type: "text",
    },
    {
      label: "Telefono",
      placeholder: donador.telefono,
      id: "telefono",
      type: "tel",
    },
  ];
  const { register, handleSubmit } = useForm<FormDataDonador>();
  const { editarDoc } = useDocsContext();
  const editar = (data: FormDataDonador) => {
    editarDoc(donador._id, {
      nombre: data.nombre || undefined,
      apellido: data.apellido || undefined,
      email: data.email || undefined,
      telefono: data.telefono || undefined,
      tipo: data.tipo || undefined,
    });
  };
  return (
    <div className={styles.Contenedor}>
      <h4 className={styles.Titulo}>Editar donador</h4>
      <Form className={styles.Formulario} onSubmit={handleSubmit(editar)}>
        {datosAEditar.map((dato, index) => (
          <Form.Group className={styles.FormGroup} key={index}>
            <Form.Label>{dato.label}</Form.Label>
            <Form.Control
              placeholder={dato.placeholder}
              id={dato.id}
              type={dato.type}
              {...register(dato.id)}
            />
          </Form.Group>
        ))}
        <Form.Group className={styles.FormGroup}>
          <Form.Label>Tipo de donador</Form.Label>
          <Form.Select id="tipo" {...register("tipo")}>
            {[
              "Donador de sangre",
              "Donador de plasma",
              "Donador de plaquetas",
            ].map((tipo, index) => (
              <option value={tipo} key={index}>
                {tipo}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <BotonSubmit />
      </Form>
    </div>
  );
};

export default FormEditarDonador;
