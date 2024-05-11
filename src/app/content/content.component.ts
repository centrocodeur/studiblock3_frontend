import { Component } from '@angular/core';
import {AxiosService} from "../axios.service";
import {response} from "express";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

  componentToShow: string='welcome';
  constructor(private axiosService: AxiosService) {
  }

  showComponent(componentToShow: string): void {
    this.componentToShow= componentToShow;
  }
  onLogin(input: any) {

    this.axiosService.request(
      "POST",
      "/login",
      {
        login: input.login,
        password: input.password
      }
    ).then(response =>{
      this.axiosService.setAuthToken(response.data.token);
      this.componentToShow ="messages";

  });

  }

  onRegister(input: any) {
    this.axiosService.request(
      "POST",
      "/register",
      {
        firstName: input.firstName,
        lastName: input.lastName,
        login: input.login,
        password: input.password
      }
    ).then(response =>{
      this.axiosService.setAuthToken(response.data.token);
      this.componentToShow ="messages";

    });


  }
}
