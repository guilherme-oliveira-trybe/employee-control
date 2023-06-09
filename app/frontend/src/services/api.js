import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:3001' });

export const getAllDepartments = async () => {
  const data = await api.get('/departments').then((response) => response.data);

  return data;
};

export const getAllEmployees = async () => {
  const data = await api.get('/employees').then((response) => response.data);

  return data;
};

export const deleteEmployee = async (id) => {
  const data = await api.delete(`/employees/${id}`).then((response) => response.data);

  return data;
};

export const createEmployee = async (body) => {
  const data = await api.post('/employees', body).then((response) => response.data);

  return data;
};

export const updateEmployee = async (id, body) => {
  const data = await api.put(`/employees/${id}`, body).then((response) => response.data);

  return data;
};
