import axios from "axios";

export const getSubs = async () =>
  axios.get(`${process.env.REACT_APP_API}/subs`);

export const getSub = async (slug) =>
  axios.get(`${process.env.REACT_APP_API}/sub/${slug}`);

export const removeSub = async (slug, authtoken) =>
  axios.delete(`${process.env.REACT_APP_API}/sub/${slug}`, {
    headers: {
      authtoken,
    },
  });

export const updateSub = async (slug, sub, authtoken) =>
  axios.put(`${process.env.REACT_APP_API}/sub/${slug}`, sub, {
    headers: {
      authtoken,
    },
  });

export const createSub = async (sub, authtoken) =>
  axios.post(`${process.env.REACT_APP_API}/sub`, sub, {
    headers: {
      authtoken,
    },
  });
