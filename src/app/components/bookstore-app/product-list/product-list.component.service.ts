import { Injectable } from "@angular/core"
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Book } from "./model/book";
import { Observable } from "rxjs/internal/Observable";

@Injectable({
  providedIn: 'root'
})

export class BookService
{

  apiUrl = 'https://sheet.best/api/sheets/d7070f40-4b80-4dfc-9187-7a6de46f226a';
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
