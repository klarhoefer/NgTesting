import { Component, Input } from '@angular/core';
import { Client } from '../clients.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrl: './client.component.scss'
})
export class ClientComponent {
  @Input() client?: Client = undefined;
}
