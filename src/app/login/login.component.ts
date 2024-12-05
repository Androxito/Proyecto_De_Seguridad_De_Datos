import { Component } from '@angular/core';
import { ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
isActive=false;
password:string='';
@ViewChild('emailInput') emailInput!: ElementRef<HTMLInputElement>; // Referencia al input de correo
@ViewChild('passwordInput') passwordInput!: ElementRef<HTMLInputElement>; // Referencia al input de contraseña
@ViewChild('nameInput') nameInput!: ElementRef<HTMLInputElement>; // Referencia al input de contraseña
@ViewChild('emailInputs') emailInputs!: ElementRef<HTMLInputElement>; // Referencia al input de correo
@ViewChild('passwordInputs') passwordInputs!: ElementRef<HTMLInputElement>; // Referencia al input de contraseña
 

activateRegister():void{
  this.isActive = true;
  this.LimpiarInputs();
}

activateLogin():void{
  this.isActive=false;
  this.clearInputs();
}
clearInputs(): void{
if(this.emailInput && this.passwordInput){
  this.emailInput.nativeElement.value= '';
  this.passwordInput.nativeElement.value='';
  
}
}
LimpiarInputs():void{
  if(this.emailInputs && this.passwordInputs && this.nameInput){
    this.nameInput.nativeElement.value='';
    this.emailInputs.nativeElement.value='';
    this.passwordInputs.nativeElement.value='';
  }
}
onPasswordInput(event: Event):void{
  const input = event.target as HTMLInputElement;
  if (input.value.length > 8){
    input.value=input.value.slice(0,8);
  }
  this.password=input.value;
}
}
