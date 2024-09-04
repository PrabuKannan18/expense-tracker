import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Commonmodels } from '../_models/commonmodels';

const baseurl = "https://crud-ecda3-default-rtdb.firebaseio.com/"

@Injectable({
  providedIn: 'root'
})
export class ExpenseserviceService {

  constructor() { }

  http = inject(HttpClient)

  add(details: Commonmodels) {
    const detail = {
      price: details.price,
      title: details.title,
      description: details.description
    }
    return this.http.post(baseurl + '/expense.json', detail)
  }

  get() {
    return this.http.get(baseurl + '/expense.json').pipe(map((res: any) => {
      const details = []
      for (let key in res) {
        if (res.hasOwnProperty(key)) {
          const detail = { ...res[key], id: key }
          details.push(detail)
        }
      }
      return details
    }))
  }

  getDetails(id: string) {
    return this.http.get(baseurl + `/expense/${id}.json`).pipe(map((res: any) => {
      return { ...res, id }
    }))
  }

  update(details: Commonmodels) {
    const detail = {
      price: details.price,
      title: details.title,
      description: details.description
    }
    return this.http.put(baseurl + `/expense/${details.id}.json`, detail)
  }

  delete(id: string) {
    return this.http.delete(baseurl + `/expense/${id}.json`)
  }

}


