import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paciente } from '../model/paciente';

@Injectable({
  providedIn: 'root',
})


export class PacienteService {

  constructor(private http: HttpClient) { }

  public salvar(obj: Paciente): Observable<Paciente> {
    return this.http.post<Paciente>('http://localhost:8090/pacientes', obj);
  }

  public listar(): Observable<Object> {
    return this.http.get('http://localhost:8090/pacientes');
  }

}
