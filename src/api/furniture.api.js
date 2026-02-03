import { axios } from "@/api/axios";

export const getHero = async () => {
  const res = await axios.get("/header");
  return res.data;
};

export const getData = async () => {
  const res = await axios.get("/data");
  return res.data;
};

export const getCategory = async () => {
  const res = await axios.get("/category");
  return res.data;
};

export const getProducts = async ({ page, limit }) => {
  const res = await axios.get("/products", {
    params: {
      page,
      limit,
    },
  });

  return res.data;
};
