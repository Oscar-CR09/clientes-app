import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']

})
export class ClientesComponent implements OnInit{

  clientes: Cliente[] = [
    {id: 1,  nombre: 'Oscar',apellido: 'Cervantes',email:'ocervantes@gmail.com',createAt:'2023-07-29'},
    {id: 2,  nombre: 'Jesus',apellido: 'Cervantes',email:'jcervantes@gmail.com',createAt:'2023-07-30'},
    {id: 3,  nombre: 'Alexa',apellido: 'Cervantes',email:'acervantes@gmail.com',createAt:'2023-07-28'},
    {id: 4,  nombre: 'Jhon',apellido: 'Hernandez',email:'jh@gmail.com',createAt:'2023-07-30'},
    {id: 5,  nombre: 'Carlos',apellido: 'lee',email:'cl@gmail.com',createAt:'2023-07-29'},
    {id: 6,  nombre: 'Diana',apellido: 'Llanos',email:'dl@gmail.com',createAt:'2023-07-28'},
    {id: 7,  nombre: 'Adriana',apellido: 'Marquez',email:'am@gmail.com',createAt:'2023-07-27'},
    {id: 8,  nombre: 'Carolina',apellido: 'Barona',email:'cb@gmail.com',createAt:'2023-07-27'},
    {id: 9,  nombre: 'Liz',apellido: 'Garcia',email:'lg@gmail.com',createAt:'2023-07-29'},
    {id: 10,  nombre: 'Areli',apellido: 'Guzman',email:'ag@gmail.com',createAt:'2023-07-27'},
    {id: 11,  nombre: 'Araceli',apellido: 'Gamer',email:'ag@gmail.com',createAt:'2023-07-26'}


  ];
  constructor() {
    
  }
  ngOnInit() {}

}
