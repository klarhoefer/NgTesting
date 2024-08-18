import { TestBed } from '@angular/core/testing';

import { ClientsService } from './clients.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ClientsService', () => {
  let service: ClientsService;
  let httpCtrl: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });

    service = TestBed.inject(ClientsService);
    httpCtrl = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should receive custoers', () => {
    service.loadClients().subscribe(clients => {
      expect(clients.length).toBe(2);
      expect(clients[0].id).toBe(11);
    });

    const req = httpCtrl.expectOne('http://localhost:3000/customers');

    req.flush([
      { id: 11, name: 'Horst' },
      { id: 12, name: 'Wolfgang' }
    ]);
  });
});
