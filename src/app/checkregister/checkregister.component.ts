import { Component, OnInit } from '@angular/core';
import { ThemService } from '../services/them.service';
import { Observable } from 'rxjs';
import { interval } from 'rxjs';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-checkregister',
  templateUrl: './checkregister.component.html',
  styleUrls: ['./checkregister.component.css']
})
export class CheckregisterComponent implements OnInit {
  formcontro="";
  button="";
  inpcolor1="";
  inpcolor2="";
  buttoncolor="";
  color="";
  them="";

  verif_code : string=''
  email : string=''
  constructor( private ThemService : ThemService,private api: ApiService, private route: Router) { }
 

  ngOnInit(): void {

    this.formcontro= this.ThemService.formcontro;
    this.button= this.ThemService.button;
    this.inpcolor1= this.ThemService.inpcolor1;
    this.inpcolor2= this.ThemService.inpcolor2;
    this.buttoncolor= this.ThemService.buttoncolor;
    this.them=this.ThemService.them;
    this.color=this.ThemService.color;

    interval(0).subscribe( formcontro => this.formcontro = this.ThemService.formcontro );
    interval(0).subscribe( button => this.button = this.ThemService.button );
    interval(0).subscribe( inpcolor1 => this.inpcolor1 = this.ThemService.inpcolor1 );
    interval(0).subscribe( inpcolor2 => this.inpcolor2 = this.ThemService.inpcolor2 );
    interval(0).subscribe( buttoncolor => this.buttoncolor = this.ThemService.buttoncolor );
    interval(0).subscribe( them => this.them = this.ThemService.them );
    interval(0).subscribe( color => this.color = this.ThemService.color );
    
    
    

  }

    
    getColor() {

      return this.color;
      }

      getd_w() {
        return this.them;
        }
    
        Testcheck(verif_code: string) {
          

          
       
              this.api.validate(this.ThemService.email_check,verif_code)
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

