import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { FormDataDoc } from "../formularios/common/interfaces";

const editarDocumentos = async <T,>(
  url: string,
  data: FormDataDoc
): Promise<T> => {
  const config: AxiosRequestConfig = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    data,
  };
  try {
    const res: AxiosResponse<T> = await axios.put<T>(url, config);
    return res?.data && res.status === 200 ? res.data : ({} as T);
  } catch (error) {
    console.log(error);
    return {} as T;
  }
};

export default editarDocumentos;
