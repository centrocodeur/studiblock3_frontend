import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  @Output() onSubmitLoginEvent = new EventEmitter();
  @Output() onSubmitRegisterEvent = new EventEmitter();

  active: string= "login";
  firstName: string = "";
  lastName : String = "";
  login: string ="";
  password: string = "";

  onLoginTab(): void{
    this.active = "login";
  }


  onSubmitLogin(): void{
    this.onSubmitLoginEvent.emit({"login": this.login, "password": this.password});
  }

  onSubmitRegister():void{
    this.onSubmitRegisterEvent.emit({
      "firstName": this.firstName, "lastName": this.lastName,
      "login": this.login, "password": this.password});
  }

  onRegisterTab() {

  }
}
