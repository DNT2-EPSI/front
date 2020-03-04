import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';


@Component({
  selector: 'app-eclairage-public',
  templateUrl: './eclairage-public.component.html',
  styleUrls: ['./eclairage-public.component.css']
})
export class EclairagePublicComponent implements OnInit {

  eclairages = [];
  eclairage = [];

  constructor(
    private httpClient: HttpClient) { }

  ngOnInit() {
    this.GetAll();
  }


  GetAll() {
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

  GetOneById(ID : string) {
    this.httpClient
      .get<any[]>(environment.server + "eclairage-public/" + ID)
      .subscribe(
        (response) => {
          this.eclairage = response;
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

}
