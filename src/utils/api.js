import { mockRevenueData, mockSalesData, mockUserActivityData } from "./mockData";

export const fetchSalesData = () => {
    return new Promise((resolve, reject) => {
      resolve(mockSalesData);
    })
  };

  export const fetchrevenueData = () => {
    return new Promise((resolve, reject) => {
        resolve(mockRevenueData);
    });
  };

  export const fetchuserData = () => {
    return new Promise((resolve, reject) => {
        resolve(mockUserActivityData);
    });
  };



  