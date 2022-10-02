import { Component, Input, OnInit } from '@angular/core';
import { ThemService } from '../services/them.service';
import { Observable } from 'rxjs';
import { interval } from 'rxjs';
import Swal from 'sweetalert2'
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { NgModule }      from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';




@Component({

  selector: 'app-mylogin2',
  templateUrl: './mylogin2.component.html',
  styleUrls: ['./mylogin2.component.css'],



})
export class Mylogin2Component implements OnInit {

  formcontro = "";
  button = "";
  inpcolor1 = "";
  inpcolor2 = "";
  buttoncolor = "";
  color = "";
  them = "";
  eye = "";
  typepassword = "password";

design = this.ThemService.design
  constructor(private ThemService: ThemService, private api: ApiService , private router : Router) { 

   
    
  }

  //@Input() public nameFromParent: string;
  ngOnInit(): void {

    this.eye = this.ThemService.eye;
    this.formcontro = this.ThemService.formcontro;
    this.button = this.ThemService.button;
    this.inpcolor1 = this.ThemService.inpcolor1;
    this.inpcolor2 = this.ThemService.inpcolor2;
    this.buttoncolor = this.ThemService.buttoncolor;
    this.them = this.ThemService.them;
    this.color = this.ThemService.color;


    // this.design = this.ThemService.design
    interval(0).subscribe(formcontro => this.formcontro = this.ThemService.formcontro);
    interval(0).subscribe(button => this.button = this.ThemService.button);
    interval(0).subscribe(inpcolor1 => this.inpcolor1 = this.ThemService.inpcolor1);
    interval(0).subscribe(inpcolor2 => this.inpcolor2 = this.ThemService.inpcolor2);
    interval(0).subscribe(buttoncolor => this.buttoncolor = this.ThemService.buttoncolor);
    interval(0).subscribe(them => this.them = this.ThemService.them);
    interval(0).subscribe(eye => this.eye = this.ThemService.eye);
    interval(0).subscribe(color => this.color = this.ThemService.color);





  }

  eyeFunction() {
    if (this.eye == "fa-solid fa-eye-slash") {
      this.ThemService.eye = "fa-solid fa-eye";
      this.typepassword = "text";
    }
    else {
      this.ThemService.eye = "fa-solid fa-eye-slash";
      this.typepassword = "password";
    }
  }
  getColor() {

    return this.color;
  }

  get_them() {
    return this.them;
  }




  loginForm = new FormGroup({
    email : new FormControl('' , [Validators.email , Validators.required]),
    password : new FormControl('' , [Validators.minLength(6) , Validators.required])
  })


  TestReset(email: string) {

    this.api.emailexist(email) 
    .subscribe((reponse :any) => {
      if(reponse.msg == 'exist'){
        this.ThemService.email_check=email;
        this.api.sendCode(email,"Reset password" ).subscribe()
        this.router.navigate(['/forgot password'])
      }else {
        Swal.fire({
          text: reponse.msg, 
          icon: reponse.type,
          confirmButtonColor: this.getColor(),
          background: this.them == '#ffffff' ? '#242526' : '#ffffff',
          color: this.them == '#ffffff' ? '#ffffff' : '#242526',
        } )
        this.router.navigate(['/'])
      }
    })
  }


  TestSignIn() {

    console.log(this.loginForm.valid)
    if(this.loginForm.valid){

      let body = this.loginForm.value
      this.api.login(body.email, body.password)
      .subscribe((reponse :any) => {
        if(reponse.type != 'info' && reponse.type != 'success'){
        Swal.fire({
          text: reponse.msg, 
          icon: reponse.type,
          confirmButtonColor: this.getColor(),
          background: this.them == '#ffffff' ? '#242526' : '#ffffff',
          color: this.them == '#ffffff' ? '#ffffff' : '#242526',
        } )
      }
        else{
          Swal.fire({
            position: 'top-end',
            icon: reponse.type,
            title: reponse.msg, 
            showConfirmButton: false,
            timer: 2300,
            background: this.them == '#ffffff' ? '#242526' : '#ffffff',
            color: this.them == '#ffffff' ? '#ffffff' : '#242526',
          })
          
          this.ThemService.email_check= body.email;
          this.router.navigate(['/checkregister'])

        } if(reponse.type == 'success'){
          localStorage.setItem("email",body.email);
          this.router.navigate(['/profil'])
        }
      }) 
    }
   

  }
}

