import type { AxiosRequestConfig } from "axios";
import axiosInstance from "./instance";

export async function get<T = any>(url: string, config?: AxiosRequestConfig) {
  const res = await axiosInstance.get<T>(url, config);
  return res.data;
}

export async function post<T = any>(url: string, data?: any, config?: AxiosRequestConfig) {
  const res = await axiosInstance.post<T>(url, data, config);
  return res.data;
}

export async function put<T = any>(url: string, data?: any, config?: AxiosRequestConfig) {
  const res = await axiosInstance.put<T>(url, data, config);
  return res.data;
}

export async function patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig) {
  const res = await axiosInstance.patch<T>(url, data, config);
  return res.data;
}

export async function del<T = any>(url: string, config?: AxiosRequestConfig) {
  const res = await axiosInstance.delete<T>(url, config);
  return res.data;
}
