import { IApiServices } from '../interfaces/ApiServices';
import axiosClient from './axiosClient';

export class ApiServices<T> implements IApiServices<T> {
  private baseUrl: string;

  constructor(endpoint: string) {
    this.baseUrl = endpoint;
  }

  async getAll(): Promise<T[]> {
    const response = await axiosClient.get<T[]>(this.baseUrl);
    return response.data;
  }

  async getById(id: string): Promise<T> {
    const response = await axiosClient.get<T>(`${this.baseUrl}/${id}`);
    return response.data;
  }

  async create(data: Partial<T>): Promise<T> {
    const response = await axiosClient.post<T>(this.baseUrl, data);
    return response.data;
  }

  async update(id: string, data: Partial<T>): Promise<T> {
    const response = await axiosClient.put<T>(`${this.baseUrl}/${id}`, data);
    return response.data;
  }

  async delete(id: string): Promise<void> {
    await axiosClient.delete(`${this.baseUrl}/${id}`);
  }
}
