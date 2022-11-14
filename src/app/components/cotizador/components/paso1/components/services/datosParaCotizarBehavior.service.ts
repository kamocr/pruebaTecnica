import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class DatosCotizarBehaviorService {
    onDatosCotizarChanged: BehaviorSubject<any[]> = new BehaviorSubject<any>(null);
    onFinalize: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor() { }

    setDatosCotizar(dataSource:any) {
        this.onDatosCotizarChanged.next(dataSource);
    }

    getDatosCotizar(): Observable<any[]> {
        return this.onDatosCotizarChanged.asObservable();
    }

    setOnFinalize(value: boolean) {
        this.onFinalize.next(value);
    }

    getOnFinalize(): Observable<boolean> {
        return this.onFinalize.asObservable();
    }
}
