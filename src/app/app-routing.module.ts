import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { HomeComponent } from './home/home.component';
import { SortbydojComponent } from './sortbydoj/sortbydoj.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [

  {
    path:"add/user",component:AdduserComponent
  },

  {
    path:"edit/:name",component:UpdateuserComponent
  },
  {
    path:"",component:UserComponent

  },
  {
    path:"home",component:HomeComponent
  },
  {
    path:"showstudent",component:UserComponent
  },
  {
    path:"sortbydoj",component:SortbydojComponent
  }


  // {
  //   path:"delete/:name",component:UpdateuserComponent
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]


})
export class AppRoutingModule { }
