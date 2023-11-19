import { Hobbie } from '../model/hobbies';

export class ApiRepo {
  apiUrl = 'http://localhost:2700/hobbies';

  async getHobbies(): Promise<Hobbie[]> {
    const response = await fetch(this.apiUrl);
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }

  async setHobbies(
    id: Hobbie['id'],
    setHobbie: Partial<Hobbie>
  ): Promise<Hobbie> {
    const finalUrl = `${this.apiUrl}/${id}`;
    const response = await fetch(finalUrl, {
      method: 'PATCH',
      body: JSON.stringify(this.setHobbies),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }
}
