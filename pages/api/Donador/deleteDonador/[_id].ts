import { NextApiRequest, NextApiResponse } from "next";
import conectarDB from "../../../../db/conexionDB";
import Donador from "../../../../models/Donador";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await conectarDB();
    const deletedDonador = await Donador.deleteOne(req.query);
    if (!deletedDonador) {
      return res.status(400).json({ success: false });
    }
    res.status(201).json({ succsess: true, data: {} });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false });
  }
};
export default handler;
