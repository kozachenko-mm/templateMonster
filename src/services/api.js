import axios from "axios";

export const getListImages = (page, limit) => {
  return axios.get(
    `
      https://picsum.photos/v2/list?page=${page}&limit=${limit}`
  );
};
