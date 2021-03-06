import { NextApiRequest, NextApiResponse } from "next";
import conectarDB from "../../../../db/conexionDB";
import Donador from "../../../../models/Donador";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await conectarDB();
    const donador = await Donador.findByIdAndUpdate(
      req.query._id,
      req.body.data,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!donador) {
      return res.status(400);
    }
    res.status(200).json(donador);
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false });
  }
};
export default handler;
