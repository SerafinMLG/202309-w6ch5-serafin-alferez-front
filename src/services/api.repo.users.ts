import { serverUrl } from "../config";
import { User } from "../entities/user";
import { LoginResponse } from "../types/login.response";

export class UsersRepo {
  apiUrl = serverUrl + '/users';

  async getUsers(): Promise<User[]> {
    const response = await fetch(this.apiUrl);
    if(!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json()
  }

  async createUser(newUser: FormData): Promise<User> {
    const url = this.apiUrl + '/register';
    const response = await fetch(url, {
      method: 'POST',
      body: newUser,
    });
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }

  async login(loginUser: LoginUser): Promise<LoginResponse> {
    const url = this.apiUrl + '/login';
    const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
    });
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }

  async loginWithToken(token: string): Promise<LoginResponse> {
    const url = this.apiUrl + '/login';
    const response = await fetch(url, {
      method: 'PATCH',
      headers: {
        Authorization:`Bearer ${token}`,
      },
    });
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }
}