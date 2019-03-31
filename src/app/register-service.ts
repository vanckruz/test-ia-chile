import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireDatabase } from "@angular/fire/database";
import { Observable } from "rxjs";

interface Subscription{
  name: string;
  email: string;
  phone: string;
  rut: string;
}
@Injectable({
  providedIn: "root"
})
export class RegisterService {
  url = `https://test-ia-chile.firebaseio.com/landing/subscriptions.json`;
  constructor(private http: HttpClient, private db: AngularFireDatabase) {}

  save(body): Observable<any> {
    const headers = new HttpHeaders().set(
      "Content-Type",
      "application/json;charset=utf-8"
    );
    return this.http.post(this.url, JSON.stringify(body), {
      headers
    });
  }

  get() {
    return this.db.list('landing/subscriptions');
  }
}
