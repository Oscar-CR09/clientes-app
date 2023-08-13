import { Injectable } from '@angular/core';
import { CLIENTES } from './clientes.json'; 
import { Cliente } from './cliente';
import { of, Observable, throwError } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map,catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';

import { Router } from '@angular/router';

@Injectable()
export class ClienteService {

  public urlEndPoint: string= 'http://localhost:8080/api/clientes';

  private httpHeaders= new HttpHeaders({'Content-Type': 'application/json'}); 
  constructor(public http:HttpClient,public router: Router) { }

  getClientes(): Observable<Cliente[]> { 
    //return  of(CLIENTES);
    return this.http.get<Cliente[]>(this.urlEndPoint);
    /*return this.http.get(this.urlEndPoint).pipe(
    map( (response) => response as Cliente[])
    );*/

   }
   
   create(cliente: Cliente) : Observable<Cliente> {
    return this.http.post<Cliente>(this.urlEndPoint, cliente,{headers: this.httpHeaders});
   }

   getCliente(id:number) : Observable<Cliente> {
    return this.http.get<Cliente>(`${this.urlEndPoint}/$ {id}`).pipe(
      catchError(e=>{
        this.router.navigate(['/clientes']);
        console.error(e.error.mensaje);
        Swal.fire('Error al editar',e.error.mensaje,'error');
        return throwError(e) ;
      }),
    );
  }

  update(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`${this.urlEndPoint}/$ {cliente.id}`,cliente,{headers: this.httpHeaders}) 
  }

  delete(id:number) : Observable<Cliente>{
    
    return this.http.delete<Cliente>(`${this.urlEndPoint}/$ {id}`,{headers: this.httpHeaders})
  }
}
