import axios from "axios";

export const useSignup = async (username: string, password: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.post("http://localhost:5005/signup", {
        username: username,
        password: password,
      });
      localStorage.setItem("user", data.token);
      resolve("success");
    } catch (error) {
      reject(error.response.data);
    }
  });
};

export const useSignin = async (username: string, password: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.post("http://localhost:5005/login", {
        username: username,
        password: password,
      });
      localStorage.setItem("user", data.token);
      resolve("success");
    } catch (error) {
      reject(error.response.data);
    }
  });
};

export function logout() {
  localStorage.removeItem("user");
}
