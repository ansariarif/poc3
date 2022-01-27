import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { AdduserComponent } from './adduser/adduser.component';
import { FormsModule } from '@angular/forms';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { SortbydojComponent } from './sortbydoj/sortbydoj.component';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AdduserComponent,
    UpdateuserComponent,
    HomeComponent,
    SortbydojComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
    
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
