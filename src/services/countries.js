import axios from "axios";
const baseUrl = "http://localhost:3003/api/countries";

const getAll = async () => {
  const request = axios.get(baseUrl);
  const response = await request;
  return response.data;
};

const create = async (name) => {
  const newObject = {
    name: name,
  };
  const response = await axios.post(baseUrl, newObject);
  return response.data;
};

export default { getAll, create };
