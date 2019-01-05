import { fetchAsJson } from "./fetch";

class Auth {
  jwt: string;

  constructor() {
    this.jwt = "";
  }

  async signIn(email: string, password: string) {
    const response = await fetchAsJson("/auth", { method: "POST", body: { email, password } });
    if (response.error) return response;
    if (response.jwt) {
      localStorage.setItem("jwt", response.jwt);
      this.jwt = response.jwt;
      return await fetchAsJson(`/users/${response.id}`);
    }
  }

  async checkSession() {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      this.jwt = jwt;
      const token = this.decodeToken(jwt);
      return await fetchAsJson(`/users/${token.id}`);
    }
  }

  private decodeToken(token: string) {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace("-", "+").replace("_", "/");
    return JSON.parse(window.atob(base64));
  }

  async signOut() {
    localStorage.removeItem("jwt");
  }
}
const auth = new Auth();

export default auth;
