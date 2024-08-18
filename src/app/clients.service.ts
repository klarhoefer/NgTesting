import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Client {
  id: number;
  name: string;
  dob: string;
}

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private http: HttpClient) { }

  loadClients() {
    return this.http.get<Client[]>("http://localhost:3000/customers");
  }
}
