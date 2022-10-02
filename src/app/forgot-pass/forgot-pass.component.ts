import { Component, OnInit } from '@angular/core';
import { ThemService } from '../services/them.service';
import { Observable, reduce } from 'rxjs';
import { interval } from 'rxjs';
import { getLocaleEraNames } from '@angular/common';
import Swal from 'sweetalert2';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { NgModule }      from '@angular/core';
@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.css']
})
export class ForgotPassComponent implements OnInit {

  formcontro="";
  button="";
  inpcolor1="";
  inpcolor2="";
  buttoncolor="";
  color="";
  them="";
  menusettings="";
  menusettingscolor="";
  router="*";
  eye="";
  erreur="erreur";
  erreurtext="";
  typepassword="password";
 
  verif_code : string=''
  password1 : string=''
  password2 : string=''
  constructor( private ThemService : ThemService,private api: ApiService,private route: Router ) { }

  ngOnInit(): void {
    this.eye= this.ThemService.eye;
    this.formcontro= this.ThemService.formcontro;
    this.button= this.ThemService.button;
    this.inpcolor1= this.ThemService.inpcolor1;
    this.inpcolor2= this.ThemService.inpcolor2;
    this.buttoncolor= this.ThemService.buttoncolor;
    this.them=this.ThemService.them;
    this.color=this.ThemService.color;
    this.menusettings=this.ThemService.menusettings;
    this.menusettingscolor=this.ThemService.menusettingscolor;
 
    interval(0).subscribe( formcontro => this.formcontro = this.ThemService.formcontro );
    interval(0).subscribe( button => this.button = this.ThemService.button );
    interval(0).subscribe( inpcolor1 => this.inpcolor1 = this.ThemService.inpcolor1 );
    interval(0).subscribe( inpcolor2 => this.inpcolor2 = this.ThemService.inpcolor2 );
    interval(0).subscribe( buttoncolor => this.buttoncolor = this.ThemService.buttoncolor );
    interval(0).subscribe( them => this.them = this.ThemService.them );
    interval(0).subscribe( eye => this.eye = this.ThemService.eye );
    interval(0).subscribe( color => this.color = this.ThemService.color );
   


  }
  eyeFunction(){
    if(this.eye == "fa-solid fa-eye-slash")
     { 
      this.ThemService.eye="fa-solid fa-eye"; 
      this.typepassword="text";
     }
    else{
        this.ThemService.eye="fa-solid fa-eye-slash";
        this.typepassword="password";
        }
  }
get_them() {
    return this.them;
    }
 getColor() {
 return this.color;
 }




       





 save(verif_code: string,password1: string,password2: string){
          
  this.api.savepassword(this.ThemService.email_check,password1,password2,verif_code)
  .subscribe((reponse :any) => {
    Swal.fire({
      position: 'top-end',
      title: reponse.msg,
      showConfirmButton: false,
      timer: 2300,
      icon: reponse.type,
      background: this.them == '#ffffff' ? '#242526' : '#ffffff',
      color: this.them == '#ffffff' ? '#ffffff' : '#242526',
    } )
    if(reponse.type=='success'){this.route.navigate(['/mylogin'])}
  })

}


}
