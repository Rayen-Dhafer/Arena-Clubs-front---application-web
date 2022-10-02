import { Component, Input, OnInit } from '@angular/core';
import { ThemService } from '../services/them.service';
import { Observable } from 'rxjs';
import { interval } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  
})
export class LoginComponent implements OnInit {
 

  logincolor=this.ThemService.logincolor;
  constructor( private ThemService : ThemService ) { }
 
  ngOnInit(): void {
 
  
    
    this.logincolor= this.ThemService.logincolor;
    interval(0).subscribe( logincolor => this.logincolor = this.ThemService.logincolor );



      
    
  }



}

