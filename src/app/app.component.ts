import { Component } from '@angular/core';
import { ThemService } from './services/them.service';

import { Observable } from 'rxjs';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mygcord';

  them="";
  div_them="";
  icon="";
  formcontro="";
  button="";
  inpcolor1="";
  inpcolor2="";
  buttoncolor="";
  menusettings="";
  menusettingscolor="";
 color = "";



  constructor( private ThemService : ThemService ) { }
  ngOnInit(): void {



    this.them=this.ThemService.them;
    this.icon=this.ThemService.icon;
    this.formcontro= this.ThemService.formcontro;
    this.button= this.ThemService.button;
    this.inpcolor1= this.ThemService.inpcolor1;
    this.inpcolor2= this.ThemService.inpcolor2;
    this.buttoncolor= this.ThemService.buttoncolor;
    this.menusettings=this.ThemService.menusettings;
    this.menusettingscolor=this.ThemService.menusettingscolor;
    this.color = this.ThemService.color;
   
    interval(0).subscribe( them => this.them = this.ThemService.them );
    interval(0).subscribe( icon => this.icon = this.ThemService.icon );
    interval(0).subscribe( menusettings => this.menusettings = this.ThemService.menusettings );
    interval(0).subscribe( menusettingscolor => this.menusettingscolor = this.ThemService.menusettingscolor );
   interval(0).subscribe(color => this.color = this.ThemService.color);


if(localStorage.getItem("them") == "dark"){
  this.them='#242526'
  this.myFunction()
}

let color=localStorage.getItem("color")

switch (color) {
  case "green":
    this.green()
   
    break;
    case "blue":
      this.blue()
      break;
  default:

    break;
}
    
  }
  myFunction() {
      
    if(this.them == "#ffffff") {
      this.ThemService.formcontro="form-contro-white";
      this.ThemService.button="button-white";
      this.ThemService.them="#242526";
      this.ThemService.div_them="#ffffff";
      this.ThemService.showprofil="showprofil-white";
      this.ThemService.shadow="rgba(0, 0, 0, 0.15) 0px 5px 10.6px";

      this.formcontro=this.ThemService.formcontro;
      this.button=this.ThemService.button;
      this.ThemService.logincolor=" col-md-8-white";
      this.ThemService.icon="fa fa-sun-o"; 
      this.ThemService.menusettings="menu-settings-white";

      this.ThemService.profil="profil-white";
      this.ThemService.showprofil="showprofil-white";
      this.ThemService.showclasse1="showclasse1-white";
      this.ThemService.showclasse2="showclasse2-white";
      this.ThemService.showbio="showbio-white";
      this.ThemService.showcouverture="showcouverture-white";

      localStorage.setItem("them","white")

      
      

      } else {
        this.ThemService.formcontro="form-contro-dark";
        this.ThemService.button="button-dark";
        this.ThemService.them="#ffffff";
        this.ThemService.div_them="#242526";
        this.ThemService.showprofil="showprofil-dark";
        this.ThemService.shadow="#131313 1.95px 10.95px 20.6px";
        
        this.formcontro=this.ThemService.formcontro;
        this.button=this.ThemService.button;
        this.ThemService.logincolor=" col-md-8-dark";
        this.ThemService.icon="fa fa-moon-o"; 
        this.ThemService.menusettings="menu-settings-dark";
        

        this.ThemService.profil="profil-dark";
        this.ThemService.showprofil="showprofil-dark";
        this.ThemService.showclasse1="showclasse1-dark";
        this.ThemService.showclasse2="showclasse2-dark";
        this.ThemService.showbio="showbio-dark";
        this.ThemService.showcouverture="showcouverture-dark";
        localStorage.setItem("them","dark")

      }

  
    

  }
  get_them() {
    return this.them;
    }
    get_color() {
      return this.color;;
      }

    green(){this.ThemService.color="#72b626"; this.ThemService.inpcolor1="inpcolor1-green";
            this.ThemService.inpcolor2="inpcolor2-green";this.ThemService.buttoncolor="buttoncolor-green";
            this.ThemService.menusettingscolor="id-menu-settings-green";
          localStorage.setItem("color","green")
        console.log('test')        }

    blue(){this.ThemService.color="#4169e1"; this.ThemService.inpcolor1="inpcolor1-blue";
           this.ThemService.inpcolor2="inpcolor2-blue";this.ThemService.buttoncolor="buttoncolor-blue";
           this.ThemService.menusettingscolor="id-menu-settings-blue";
           localStorage.setItem("color","blue")}

    red(){this.ThemService.color="#da3939"; this.ThemService.inpcolor1="inpcolor1-red";
         this.ThemService.inpcolor2="inpcolor2-red";this.ThemService.buttoncolor="buttoncolor-red";
         this.ThemService.menusettingscolor="id-menu-settings-red";}

    pink(){this.ThemService.color="#fc22fc"; this.ThemService.inpcolor1="inpcolor1-pink";
           this.ThemService.inpcolor2="inpcolor2-pink";this.ThemService.buttoncolor="buttoncolor-pink";
           this.ThemService.menusettingscolor="id-menu-settings-pink";}

    purple1(){this.ThemService.color="#7111df"; this.ThemService.inpcolor1="inpcolor1-purple1";
             this.ThemService.inpcolor2="inpcolor2-purple1";this.ThemService.buttoncolor="buttoncolor-purple1";
             this.ThemService.menusettingscolor="id-menu-settings-purple1";}

    purple2(){this.ThemService.color="#c579e3"; this.ThemService.inpcolor1="inpcolor1-purple2";
              this.ThemService.inpcolor2="inpcolor2-purple2";this.ThemService.buttoncolor="buttoncolor-purple2";
              this.ThemService.menusettingscolor="id-menu-settings-purple2";}

    yellow(){this.ThemService.color="#ffb400"; this.ThemService.inpcolor1="inpcolor1-yellow";
             this.ThemService.inpcolor2="inpcolor2-yellow";this.ThemService.buttoncolor="buttoncolor-yellow";
             this.ThemService.menusettingscolor="id-menu-settings-yellow";}

    orange(){this.ThemService.color="#fa5b0f"; this.ThemService.inpcolor1="inpcolor1-orange";
             this.ThemService.inpcolor2="inpcolor2-orange";this.ThemService.buttoncolor="buttoncolor-orange";
             this.ThemService.menusettingscolor="id-menu-settings-orange";}



  
}
