import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Observable } from 'rxjs';
import { CheckregisterComponent } from './checkregister/checkregister.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { LoginComponent } from './login/login.component';
import { MyloginComponent } from './mylogin/mylogin.component';
import { Mylogin2Component } from './mylogin2/mylogin2.component';
import { ProfilComponent } from './profil/profil.component';

import { RegisterComponent } from './register/register.component';

const routes: Routes = [

  {
    path: "profil",
    component: ProfilComponent
  },

  {
    path: "",
    component: LoginComponent,
      children: [

    {
      path: "",
      component: MyloginComponent
    },
    {
      path: "mylogin",
      component: MyloginComponent
    },
    {
      path: "mylogin2",
      component: Mylogin2Component
    },

    {
    path: "register",
    component: RegisterComponent
    },

    {
      path: "checkregister",
      component: CheckregisterComponent
    },

    {
      path: "forgot password",
      component: ForgotPassComponent
    },



     ],
     
  },
  {
    path: "abc",
    component: RegisterComponent
    },
/*   {
    path: "**",
    component: LoginComponent,
    children: [

      {
        path: "",
        component: MyloginComponent
      },
      {
        path: "mylogin",
        component: MyloginComponent
      },
        
  
      {
      path: "register",
      component: RegisterComponent
      },
  
      {
        path: "checkregister",
        component: CheckregisterComponent
      },

      {
        path: "forgot password",
        component: ForgotPassComponent
      },

  
       ],
  }, */

/* 
  {
    path: "Mylogin",
    component: MyloginComponent,
  },

  {
    path: "register",
    component: RegisterComponent,
  },

  {
    path: "checkregister",
    component: CheckregisterComponent,
  },
  
  {
    path: "forgot password",
    component: ForgotPassComponent
  }, */


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
