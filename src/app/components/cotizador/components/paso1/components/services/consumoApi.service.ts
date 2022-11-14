import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ConsumoApiService {
    oferta: any;
    private prefix: string = "https://day4fsd.herokuapp.com/cars";

    constructor(
        private http: HttpClient
    ) { }
    // obtenemos informacion del api
    getInfo():Promise<any>{
      return new Promise((resolve,reject)=>{
        this.http.get(this.prefix).subscribe({
          next:(data:any)=>{resolve(data)},
          error:(error:any)=>{reject(error)}
        });
      })
    }
}
