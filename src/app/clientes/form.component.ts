import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {
  public cliente: Cliente = new Cliente()
  public titulo:string = "crear Cliente";
  constructor(private clienteService: ClienteService,
    private router:Router) { }

  ngOnInit() {
    
  }
  public create():void {
    this.clienteService.create(this.cliente)
    .subscribe(cliente =>{
      this.router.navigate(["/clientes"])
      swal.fire('Nuevo cliente', `Cliente ${cliente.nombre} creado con éxito`,'success');
    }
    )

  }

}
