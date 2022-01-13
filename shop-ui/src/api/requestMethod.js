import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZGIzYTcxMWQ1MWVmYjI4Yjg4MDAzMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MjA2ODMzOCwiZXhwIjoxNjQyMzI3NTM4fQ.EU0khWVzv8e-aJ-vg8fDqSBIgw6lkttuDFIhdPRQRFY";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});