import axios from "axios";

const url = `${process.env.REACT_APP_API_URL}`;

export const fetchContacts = async (id) => {
  id = id || "";
  return await axios.get(`${url}/${id}`);
};

export const addNewContact = async (contact) => {
  return await axios.post(url, contact);
};

export const editContact = async (id, contact) => {
  return await axios.put(`${url}/${id}`, contact);
};

export const deleteContact = async (id) => {
  return await axios.delete(`${url}/${id}`);
};
