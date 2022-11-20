export const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://altaria-api.herokuapp.com"
    : "http://localhost:5002";
