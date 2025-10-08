import apiClient from "./client";

export interface User {
  id: number;
  name: string;
  email: string;
}

export const getUsers = async (): Promise<User[]> => {
  const response = await apiClient.get('https://jsonplaceholder.typicode.com/users');
  return response.data;
};
