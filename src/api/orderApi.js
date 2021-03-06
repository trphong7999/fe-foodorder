import axiosClient from "./axiosClient";

const merchantApi = {
  getOrderFindingPartner: () => {
    const url = `/orders/getfindingpartner`;
    return axiosClient.get(url);
  },
  getOrderByStatus: (status) => {
    const url = `/orders/getbystatus?status=${status}`;
    return axiosClient.get(url);
  },
  getOrderById: (id) => {
    const url = `/orders/getbyid?id=${id}`;
    return axiosClient.get(url);
  },
  getOrderByPartner: (id) => {
    const url = `/orders/getbypartner?id=${id}`;
    return axiosClient.get(url);
  },
  getOrderByUser: (id) => {
    const url = `/orders/getbyuser?id=${id}`;
    return axiosClient.get(url);
  },
  getAllMyOrder: () => {
    const url = `/orders/getallmyorder`;
    return axiosClient.get(url);
  },
  getChatData: (id) => {
    const url = `/orders/getchatdata?id=${id}`;
    return axiosClient.get(url);
  },
  getOrderInWeekByTime: (time) => {
    const url = `/orders/ordersinweek?time=${time}`;
    return axiosClient.get(url);
  },
  getOrderMonthByTime: (time) => {
    const url = `/orders/ordersinmonth?time=${time}`;
    return axiosClient.get(url);
  },
  getOrderYearByTime: (time) => {
    const url = `/orders/ordersinyear?time=${time}`;
    return axiosClient.get(url);
  },
};

export default merchantApi;
