import axios from "@/utils/request";

export const contractUs = (data) => {
  return axios({
    method: "POST",
    // url: `http://18.179.8.186:8080/public/contactus`,
    url: `/padoapi/public/contactus`,
    data,
  });
};
