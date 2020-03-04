import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EclairagePublicService {

  eclairages = [];
  eclairage = [];

constructor(
  private httpClient: HttpClient,
  private route: ActivatedRoute) { }

public GetAll(){
  this.httpClient
  .get<any[]>(environment.server + "eclairage-public")
  .subscribe(
    (response) => {
      this.eclairages = response;           
    },
    (error) => {
      console.log('Erreur ! : ' + error);
    }
  );
}

public GetOnByID(ID: string){
  this.httpClient
  .get<any[]>(environment.server + "eclairage-public/" + ID)
  .subscribe(
    (response) => {
      this.eclairages = response;           
    },
    (error) => {
      console.log('Erreur ! : ' + error);
    }
  );
}

}
