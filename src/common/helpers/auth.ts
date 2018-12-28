import { fetchAsJson } from "./fetch";

// export const signIn = async (email: string, password: string) => {
//   const jwt = await fetchAsJson("/auth", { body: { email, password } });
//   if (jwt) localStorage.setItem("jwt", jwt);
// };

export default class Auth {
  user: any;
  jwt: string;

  constructor() {
    this.user = undefined;
    this.jwt = "";
  }

  async signIn(email: string, password: string) {
    const jwt = await fetchAsJson("/auth", { body: { email, password } });
    if (jwt) {
      localStorage.setItem("jwt", jwt);
      this.jwt = jwt;
      const user = await fetchAsJson("/user");
      this.user = user;
    }
  }

  async checkSession() {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      this.jwt = jwt;
      const user = await fetchAsJson("/user");
      this.user = user;
    }
  }

  async signOut() {
    localStorage.removeItem("jwt");
    this.user = undefined;
  }
}
