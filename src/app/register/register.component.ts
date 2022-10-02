import { Component, OnInit } from '@angular/core';
import { ThemService } from '../services/them.service';
import { Observable, reduce } from 'rxjs';
import { interval } from 'rxjs';
import { getLocaleEraNames } from '@angular/common';
import Swal from 'sweetalert2'
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  formcontro = "";
  button = "";
  inpcolor1 = "";
  inpcolor2 = "";
  buttoncolor = "";
  color = "";
  them = "";
  menusettings = "";
  menusettingscolor = "";
  router = "*";
  eye = "";
  erreur = "erreur";
  erreurtext = "";
  typepassword = "password";

  tag : string=''
  name : string=''
  email : string=''
  password : string=''
  constructor(private ThemService: ThemService, private api: ApiService, private route: Router) { }

  ngOnInit(): void {
    this.eye = this.ThemService.eye;
    this.formcontro = this.ThemService.formcontro;
    this.button = this.ThemService.button;
    this.inpcolor1 = this.ThemService.inpcolor1;
    this.inpcolor2 = this.ThemService.inpcolor2;
    this.buttoncolor = this.ThemService.buttoncolor;
    this.them = this.ThemService.them;
    this.color = this.ThemService.color;
    this.menusettings = this.ThemService.menusettings;
    this.menusettingscolor = this.ThemService.menusettingscolor;

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
  get_them() {
    return this.them;
  }
  getColor() {
    return this.color;
  }



  test_name(name: string) {
    var n: number;

    name = name.trim();
    n = 0;
    if (name[0] == " ") { n++; }
    if (name[name.length - 1] == " ") { n++; }
    for (let index = 0; index < name.length; index++) {
      if (name[index] == " " && name[index - 1] == " ") { n++; }
      if (!(name[index] == " ")) {
        if (
          !((name.charCodeAt(index) >= 65 && name.charCodeAt(index) <= 90) ||
            (name.charCodeAt(index) >= 97 && name.charCodeAt(index) <= 122) ||
            (name.charCodeAt(index) >= 48 && name.charCodeAt(index) <= 57)
          )
        ) { n++; }
      }
    }
    if (name.length < 1) { n++; }
    return n;
  }


  test_email(email: string) {
    var n: number, t1: number, t2: number, t3: number;
    n = 0; t1 = 0; t2 = 0; t3 = 0;
    for (let index = 0; index < email.length; index++) {

      if (
        ((email.charCodeAt(index) >= 65 && email.charCodeAt(index) <= 90) ||
          (email.charCodeAt(index) >= 97 && email.charCodeAt(index) <= 122) ||
          (email.charCodeAt(index) >= 48 && email.charCodeAt(index) <= 57) || (email[index] == "@") || (email[index] == ".")
        )
      ) { t1++; }
      if (email[index] == "@") { t2++; }
      if (email[index] == ".") { t3++; }

    }
    if (t1 != email.length) { n++ }
    if (t1 < 11) { n++ }
    if (t2 != 1) { n++ }


    return n;
  }

  test_tag(tag: string) {
    var n: number;
    n = 0;
    if ((tag == "")) { n++; }
    if ((tag.length != 5)) { n++; }
    if ((tag[0] != "#")) { n++; }
    if (!((tag.charCodeAt(1) >= 48 && tag.charCodeAt(1) <= 57))) { n++; }
    if (!((tag.charCodeAt(2) >= 48 && tag.charCodeAt(2) <= 57))) { n++; }
    if (!((tag.charCodeAt(3) >= 48 && tag.charCodeAt(3) <= 57))) { n++; }
    if (!((tag.charCodeAt(4) >= 48 && tag.charCodeAt(4) <= 57))) { n++; }

    return n;
  }

  test_erreur(tag: string, name: string, email: string) {
    if (this.test_name(name) != 0 && this.test_email(email) == 0 && this.test_tag(tag) == 0) { this.erreurtext = "Check your name"; }
    if (this.test_name(name) == 0 && this.test_email(email) != 0 && this.test_tag(tag) == 0) { this.erreurtext = "Check your email"; }
    if (this.test_name(name) == 0 && this.test_email(email) == 0 && this.test_tag(tag) != 0) { this.erreurtext = "Check your tag"; }

    if (this.test_name(name) != 0 && this.test_email(email) != 0 && this.test_tag(tag) == 0) { this.erreurtext = "Check your name and email"; }
    if (this.test_name(name) != 0 && this.test_email(email) == 0 && this.test_tag(tag) != 0) { this.erreurtext = "Check your name and tag"; }
    if (this.test_name(name) == 0 && this.test_email(email) != 0 && this.test_tag(tag) != 0) { this.erreurtext = "Check your tag and email"; }

    if (this.test_name(name) != 0 && this.test_email(email) != 0 && this.test_tag(tag) != 0) { this.erreurtext = "Check your name, tag and email"; }
    if (this.test_name(name) == 0 && this.test_email(email) == 0 && this.test_tag(tag) == 0) { this.erreurtext = ""; }
    
    
    
    return this.erreurtext;
  }



  erroralert(tag: string, name: string, email: string, password: string) {
    if (this.test_erreur(tag, name, email) != "") {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: this.erreurtext,
        background: this.them == '#ffffff' ? '#242526' : '#ffffff',
        color: this.them == '#ffffff' ? '#ffffff' : '#242526',
        confirmButtonColor: this.getColor(),
      })
    }else if(!this.formData.has('files')){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Import profile picture',
        background: this.them == '#ffffff' ? '#242526' : '#ffffff',
        color: this.them == '#ffffff' ? '#ffffff' : '#242526',
        confirmButtonColor: this.getColor(),
      })
    } else {
  
      this.api.upload(this.formData)
      .subscribe((img : any)=>{
         let body = {
          name: name,tag: tag, email: email, password: password , image : img.files.path
        }
        console.log(img.files.path )
        console.log(this.formData )
        this.api.signup(body)
          .subscribe((reponse: any) => {
            
            if (reponse.type != 'info') {
            Swal.fire({
              text: reponse.msg, 
              icon: reponse.type,
              confirmButtonColor: this.getColor(),
              background: this.them == '#ffffff' ? '#242526' : '#ffffff',
              color: this.them == '#ffffff' ? '#ffffff' : '#242526',
            } )
          }
            
            if (reponse.type == 'info') {
              this.ThemService.email_check=email;
              Swal.fire({
                position: 'top-end',
                icon: reponse.type,
                title: reponse.msg, 
                showConfirmButton: false,
                timer: 2300,
                background: this.them == '#ffffff' ? '#242526' : '#ffffff',
                color: this.them == '#ffffff' ? '#ffffff' : '#242526',
              })
                this.route.navigate(['/checkregister'])

            }
          }) 
      })
      
    }
  }


  formData : FormData = new FormData()

  upload(event: any) {
    let files = event.target.files //array

    if (files && files.length > 0) {
      let file = files[0]
      this.formData.append('files' , file)

    }
  }
}

