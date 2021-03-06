import { model, Schema, models, ObjectId } from "mongoose";

export interface IDonador {
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  tipo: string;
  _id: string;
}

const DonadorSchema = new Schema<IDonador>({
  nombre: {
    type: String,
    required: [true, "Ingrese su nombre."],
  },
  apellido: {
    type: String,
    required: [true, "Ingrese su apellido."],
  },
  email: {
    type: String,
    required: [true, "Ingrese su correo electronico."],
  },
  telefono: {
    type: String,
    required: [true, "Ingrese su numero telefonico."],
  },
  tipo: {
    type: String,
    require: [true, "Ingrese el tipo de donación"],
  },
});

//const Donador : model <Donador> = model (donador, donadorescheme)

export default models.Donador || model("Donador", DonadorSchema);
