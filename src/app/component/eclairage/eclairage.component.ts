import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-eclairage',
  templateUrl: './eclairage.component.html',
  styleUrls: ['./eclairage.component.css']
})
export class EclairageComponent implements OnInit {

  private routeSub: Subscription;
  private ID : number| string;
  eclairage = [];

  constructor(private httpClient: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.ID = params['id'];//log the value of id
    });
    this.GetOneById(this.ID);
    console.log(this.eclairage);
    
  }

  GetOneById(ID : number| string) {
    this.httpClient
      .get<any[]>(environment.server + "eclairage-public/id/" + ID)
      .subscribe(
        (response) => {
          this.eclairage = response[0]; 
          console.log("data éclairage", response[0]);
                   
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
  
}
