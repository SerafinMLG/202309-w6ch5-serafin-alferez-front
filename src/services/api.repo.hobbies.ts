import { serverUrl } from '../config';
import { Hobbies } from '../entities/hobbies';


export class HobbiesRepo {

  apiUrl = serverUrl + '/hobbies';

  async getHobbies(): Promise<Hobbies[]> {
    const response = await fetch(this.apiUrl);
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }

  async updateHobbie(id: Hobbies['id'], updatedHobbie: Partial<Hobbies>): Promise<Hobbies> {
    const finalUrl = `${this.apiUrl}/${id}`;
    const response = await fetch(finalUrl, {
      method: 'PATCH',
      body: JSON.stringify(updatedHobbie),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }
}
