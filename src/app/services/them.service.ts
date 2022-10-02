import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemService {

  formcontro = "form-contro-white";
  button = "button-white";
  inpcolor1 = "inpcolor1-blue";
  inpcolor2 = "inpcolor2-blue";
  buttoncolor = "buttoncolor-blue";
  them = "#242526";
  div_them = "#ffffff";
  shadow = "rgba(0, 0, 0, 0.15) 0px 5px 10.6px";

  profil = "profil-white";
  showprofil = "showprofil-white";
  showclasse1 = "showclasse1-white";
  showclasse2 = "showclasse2-white";
  showbio = "showbio-white";
  showcouverture = "showcouverture-white";

  logincolor = "col-md-8-white";
  menusettings = "menu-settings-white";
  menusettingscolor = "id-menu-settings-blue";
  icon = "fa fa-sun-o";
  color = "#4169e1";
  eye = "fa-solid fa-eye-slash";
  typepassword = "password";





  email_check = "hh";


  design = {
    formcontro: "form-contro-white",
    button: "button-white",
    inpcolor1: "inpcolor1-blue",
    inpcolor2: "inpcolor2-blue",
    buttoncolor: "buttoncolor-blue",
    them: "#242526",
    div_them: "#ffffff",
    shadow: "rgba(0, 0, 0, 0.15) 0px 5px 10.6px",

    profil: "profil-white",
    showprofil: "showprofil-white",
    showclasse1: "showclasse1-white",
    showclasse2: "showclasse2-white",
    showbio: "showbio-white",
    showcouverture: "showcouverture-white",

    logincolor: "col-md-8-white",
    menusettings: "menu-settings-white",
    menusettingscolor: "id-menu-settings-blue",
    icon: "fa fa-sun-o",
    color: "#4169e1",
    eye: "fa-solid fa-eye-slash",
    typepassword: "password",





    email_check: "hh"
  }
  constructor() { }
}
