import { Injectable } from "@angular/core"
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Book } from "./model/book";
import { Observable } from "rxjs/internal/Observable";

@Injectable({
  providedIn: 'root'
})

export class BookService
{

  apiUrl = 'https://sheet.best/api/sheets/532f547c-cce7-4a36-bf9a-d27004498596';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getBooks():Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.apiUrl);
  }
}
