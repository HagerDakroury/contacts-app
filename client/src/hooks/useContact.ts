import axios from "axios";

type Contact = {
  _id: string;
  first: string;
  last: string;
  email: string;
};

export const getContacts = async (): Promise<Array<Contact>> => {
  const { data } = await axios.get(`/list`, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("user"),
    },
  });
  return data;
};

export const editContact = async (
  contact: Contact
): Promise<Array<Contact>> => {
  const { data } = await axios.post(
    `/edit`,
    { ...contact },
    {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("user"),
      },
    }
  );
  return data;
};

export const newContact = async (contact: Contact): Promise<Array<Contact>> => {
  const { data } = await axios.post(
    `/new`,
    { first: contact.first, last: contact.last, email: contact.email },
    {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("user"),
      },
    }
  );
  return data;
};

export const deleteContact = async (
  contact: Contact
): Promise<Array<Contact>> => {
  const { data } = await axios.post(
    `/delete`,
    { ...contact },
    {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("user"),
      },
    }
  );
  return data;
};
