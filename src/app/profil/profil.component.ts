import { Component, OnInit } from '@angular/core';
import { ThemService } from '../services/them.service';
import { Observable } from 'rxjs';
import { interval } from 'rxjs';
import Swal from 'sweetalert2'
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { NgModule }      from '@angular/core';


@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  profil=""
  formcontro = "";
  button = "";
  inpcolor1 = "";
  inpcolor2 = "";
  buttoncolor = "";
  color = "";
  them = "";
  shadow="";
  eye = "";
  div_them="";

  showprofil="";
  showcouverture="";
  showclasse1="";
  showclasse2="";
  showbio="";

  testcouverture="v"
  typepassword = "password";

  formData : FormData = new FormData()
  email = localStorage.getItem("email")
  password : string=''
  background: any;

  constructor(private ThemService: ThemService, private api: ApiService , private router : Router) { }


  folowers : any = []

  uploadUrl = this.api.url+'/'
  //@Input() public nameFromParent: string;
  ngOnInit(): void {

    if(! this.email) {this.router.navigate(["/"])}

    this.profil = this.ThemService.profil;
    this.eye = this.ThemService.eye;
    this.formcontro = this.ThemService.formcontro;
    this.button = this.ThemService.button;
    this.inpcolor1 = this.ThemService.inpcolor1;
    this.inpcolor2 = this.ThemService.inpcolor2;
    this.buttoncolor = this.ThemService.buttoncolor;
    this.them = this.ThemService.them;
    this.them = this.ThemService.them;
    this.shadow = this.ThemService.shadow;
    this.showprofil = this.ThemService.showprofil;
    this.color = this.ThemService.color;
    this.showclasse1 = this.ThemService.showclasse1;
    this.showclasse2 = this.ThemService.showclasse2;
    this.showbio = this.ThemService.showbio;
    this.showcouverture = this.ThemService.showcouverture;

    


    interval(0).subscribe(formcontro => this.formcontro = this.ThemService.formcontro);
    interval(0).subscribe(button => this.button = this.ThemService.button);
    interval(0).subscribe(profil => this.profil = this.ThemService.profil);
    interval(0).subscribe(inpcolor1 => this.inpcolor1 = this.ThemService.inpcolor1);
    interval(0).subscribe(inpcolor2 => this.inpcolor2 = this.ThemService.inpcolor2);
    interval(0).subscribe(buttoncolor => this.buttoncolor = this.ThemService.buttoncolor);
    interval(0).subscribe(them => this.them = this.ThemService.them);
    interval(0).subscribe(them => this.them = this.ThemService.them);
    interval(0).subscribe(them => this.shadow = this.ThemService.shadow);
    interval(0).subscribe(them => this.showprofil = this.ThemService.showprofil);
    interval(0).subscribe(them => this.showclasse1 = this.ThemService.showclasse1);
    interval(0).subscribe(them => this.showclasse2 = this.ThemService.showclasse2);
    interval(0).subscribe(them => this.showbio = this.ThemService.showbio);
    interval(0).subscribe(them => this.showcouverture = this.ThemService.showcouverture);
    interval(0).subscribe(eye => this.eye = this.ThemService.eye);
    interval(0).subscribe(color => this.color = this.ThemService.color);



    this.api.getAll()
    .subscribe((result : any)=>{
      this.folowers = result
      console.log(this.folowers)
    })

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
  divthem(){
    return this.div_them;
  }
  getshadow(){
    return this.shadow;
  }
  getColor_couverture(){
    if(this.ThemService.them!="#242526"){    return "#18191a "  }
    else{
    {    return "#f0f2f5"  }
  }}

  test_c() {


    if(this.ThemService.them!="#242526"){    return "#18191a "  }
    return 0;
  }


   async Uploadc () {
    const { value: file } = await Swal.fire({
      title: 'Select image',
      input: 'file',
      confirmButtonColor: this.getColor(),
      background: this.them == '#ffffff' ? '#242526' : '#ffffff',
      color: this.them == '#ffffff' ? '#ffffff' : '#242526',
      inputAttributes: {
        'accept': 'image/*',
        'aria-label': 'Upload your profile picture'
      }
    })
    this.formData = new FormData();
    this.formData.append('files' , file)
    this.api.upload(this.formData)
    .subscribe((img : any)=>{
      this.api.Upcouverture("rayendh7@gmail.com", img.files.path)
      .subscribe((reponse: any) => {})
    })


    
 
  }


  async functioncouverture(){
    let body = {
      email:"rayendh7@gmail.com"
     }
     console.log("hii") 
     alert("hii") 
     await this.api.getuser(body).subscribe((reponse: any) => {
      this.testcouverture =reponse.name 
      console.log(reponse) 
      alert(reponse.name) 
    })
  }

}

