import axios from "axios";

import { useMutation, UseMutationOptions } from "react-query";
import { User } from "../types";

type SignupParams = {
  username: string;
  password: string;
};

export const useSignup = function (
  options?: UseMutationOptions<User, Error, SignupParams>
) {
  const { mutate: signup, ...rest } = useMutation<User, Error, SignupParams>(
    (params) => {
      return axios
        .post("http://localhost:5005/signup", params)
        .then((res) => res.data);
    },
    {
      ...options,
      onSuccess: (response, ...rest) => {
        localStorage.setItem("user", response.token);
        options?.onSuccess?.(response, ...rest);
      },
    }
  );
  return { signup, ...rest };
};

export const useSignin = function (
  options?: UseMutationOptions<User, Error, SignupParams>
) {
  const { mutate: signin, ...rest } = useMutation<User, Error, SignupParams>(
    (params) => {
      return axios
        .post("http://localhost:5005/login", params)
        .then((res) => res.data);
    },
    {
      ...options,
      onSuccess: (response, ...rest) => {
        localStorage.setItem("user", response.token);
        options?.onSuccess?.(response, ...rest);
      },
    }
  );
  return { signin, ...rest };
};

export function useLogout() {
  localStorage.removeItem("user");
}

export function isLoggedIn() {
  return localStorage.getItem("user");
}
