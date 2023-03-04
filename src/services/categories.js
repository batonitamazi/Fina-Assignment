import axios from "axios";
const baseUrl = "http://localhost:3003/api/categories";

const getAll = async () => {
  const request = axios.get(baseUrl);
  const response = await request;
  return response.data;
};
const create = async (newObject) => {
  const response = await axios.post(baseUrl, newObject);
  return response.data;
};
const update = async (newObject) => {
  const response = await axios.put(`${baseUrl}/${newObject.code}`, newObject);
  return response.data;
};

export default { getAll, create, update };
