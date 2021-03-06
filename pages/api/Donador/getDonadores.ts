import { NextApiRequest, NextApiResponse } from "next";
import conectarDB from "../../../db/conexionDB";
import Donador from "../../../models/Donador";
import { IDonador } from "../../../models/Donador";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await conectarDB();
    const donadores: IDonador[] = await Donador.find({});
    res.status(200).json(donadores);
  } catch (error) {
    console.log(error);
    res.status(400);
  }
};
export default handler;
