import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../model/item';

const BASE_URL = 'https://fakestoreapi.com/products';

@Injectable({
  providedIn: 'root',
})
export class HttpServiceService {
  private http = inject(HttpClient);
  constructor() {}

  getAllProducts(): Observable<Item[]> {
    return this.http.get<Item[]>(BASE_URL);
  }
}
