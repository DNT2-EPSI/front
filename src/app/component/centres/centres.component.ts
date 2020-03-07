import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-centres',
  templateUrl: './centres.component.html',
  styleUrls: ['./centres.component.css']
})
export class CentresComponent implements OnInit {

  centres = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.GetAll();
  }

  GetAll() {
    this.httpClient
      .get<any[]>(environment.server + "centre-sante")
      .subscribe(
        (response) => {
          this.centres = response;
          console.log(response);
          
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }
}
