import { Component, OnInit } from '@angular/core';
import { Client, ClientsService } from './clients.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  clients: Client[] = []

  constructor(private clientSvc: ClientsService) {
  }

  ngOnInit(): void {
    this.clientSvc.loadClients().subscribe(clients => this.clients = clients);
  }
}
