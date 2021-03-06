import axiosClient from "./axiosClient";

const partnerApi = {
  checkAuth: () => {
    const url = `/partners/auth`;
    return axiosClient.post(url);
  },
  getAll: () => {
    const url = "/partners";
    return axiosClient.get(url);
  },
  getAllInMonth: (time) => {
    const url = `/orders/partnerinmonth?time=${time}`;
    return axiosClient.get(url);
  },

  get: (id) => {
    const url = `/partners/${id}`;
    return axiosClient.get(url);
  },
  login: (params) => {
    const url = `/partners/login`;
    return axiosClient.post(url, params);
  },
  getProfile: () => {
    const url = `/partners/profile`;
    return axiosClient.get(url);
  },
  updateSetting: (params) => {
    const url = `/partners/updatesetting`;
    return axiosClient.post(url, params);
  },
  changePass: (params) => {
    const url = `/partners/changepass`;
    return axiosClient.post(url, params);
  },
  changeInfo: (params) => {
    const url = `/partners/changeinfo`;
    return axiosClient.post(url, params);
  },
};

export default partnerApi;
