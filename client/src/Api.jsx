import axios from "axios";

axios.interceptors.request.use(
  function (config) {
    const { origin } = new URL(config.url);
    const allowedOrigins = [process.env.REACT_APP_BASE_ENDPOINT];
    const token = localStorage.getItem("access-token");
    if (allowedOrigins.includes(origin)) {
      config.headers.authorization = token;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export const fetchProductList = async ({ pageParam = 0 }) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_ENDPOINT}/products?category_name=KIYAFET`
  );
  return data;
};

export const fetchProduct = async (id) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_ENDPOINT}/products/${id}`
  );
  return data;
};

export const fetchRegister = async (input) => {
  const { data } = await axios.post(
    process.env.REACT_APP_BASE_ENDPOINT + "/register",
    input
  );

  return data;
};

export const fetchMe = async () => {
  const { data } = await axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}/me`);

  return data;
};
