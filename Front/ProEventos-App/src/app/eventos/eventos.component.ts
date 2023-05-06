import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss'],
})
export class EventosComponent {
  public eventos: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getEventos();
  }

  public getEventos(): void {
    this.http.get('http://localhost:5000/api/eventos').subscribe(
      (reponse) => (this.eventos = reponse),
      (error) => console.log(error)
    );
  }
}
