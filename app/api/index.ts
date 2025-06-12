import axios, { AxiosResponse } from 'axios';
import { Result } from '@/types/Result';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:3001';

const instance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 添加响应拦截器处理错误和状态码
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    const res = response.data as Result;
    
    // 根据状态码判断请求是否成功
    if (res.code === 0) {
      // 成功时修改response.data为res.data
      response.data = res.data;
      return response;
    } else {
      // 失败时打印错误信息并拒绝promise
      console.error('API请求失败:', res.message);
      return Promise.reject(new Error(res.message || '请求失败'));
    }
  },
  (error) => {
    console.error('API请求错误:', error);
    return Promise.reject(error);
  }
);

export default instance;
