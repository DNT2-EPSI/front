import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';

@Component({
  selector: 'app-chantiers-perturbants',
  templateUrl: './chantiers-perturbants.component.html',
  styleUrls: ['./chantiers-perturbants.component.css']
})
export class ChantiersPerturbantsComponent implements OnInit {

  chantiers = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.GetAll();
  }

  GetAll() {
    this.httpClient
      .get<any[]>(environment.server + "chantiers-perturbants")
      .subscribe(
        (response) => {
          this.chantiers = response;
          console.log(response);
          
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

}
