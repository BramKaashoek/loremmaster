import { fetchAsJson } from "./fetch";

export const signIn = async (email: string, password: string) => {
  const jwt = await fetchAsJson("/auth", { body: { email, password } });
  if (jwt) localStorage.setItem("jwt", jwt);
};
