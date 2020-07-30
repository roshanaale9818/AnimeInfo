import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { AngularFireModule } from 'angularfire';
import { environment } from '../../../environments/environment.prod';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  exports:[
    AngularFireModule,
    AngularFireAuthModule
  ]
})
export class AppFirebaseModule { }
