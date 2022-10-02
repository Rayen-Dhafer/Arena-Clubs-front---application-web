import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

url ="http://localhost:3000"
login(email:string,password:string){

  return this.http.post(`${this.url}/login` , {email : email , password: password})

}
signup(body : any){

  return this.http.post(`${this.url}/inscription` ,body)
}

upload(body : any){
  return this.http.post(`${this.url}/upload` ,body)
}
emailexist(email:string){

  return this.http.post(`${this.url}/emailexist` , {email : email })
}
validate(email:string,verif_code:string){

  return this.http.post(`${this.url}/validate` , {email : email, verif_code: verif_code})
}

savepassword(email:string,password1:string,password2:string,verif_code:string){

  return this.http.post(`${this.url}/savepassword` , {email : email , verif_code: verif_code,password1:password1,password2:password2})
}

sendCode(email:string,msgg:string){

  return this.http.post(`${this.url}/sendCode` , {email:email,msgg:msgg})

}

Upcouverture(email:string,path:string){

  return this.http.post(`${this.url}/Upcouverture` , {email:email,path:path})

}

getuser(body:any){

  return this.http.post(`${this.url}/getuser` , body)

}


getAll(){
  return this.http.get(`${this.url}/getall`)
}
}
