import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent, RegisterComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyBootstrapModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
