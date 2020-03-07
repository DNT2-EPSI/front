import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chantier',
  templateUrl: './chantier.component.html',
  styleUrls: ['./chantier.component.css']
})
export class ChantierComponent implements OnInit {

  private routeSub: Subscription;
  private ID : number| string;
  chantier = [];

  constructor(private httpClient: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.ID = params['id'];//log the value of id
    });
    this.GetOneById(this.ID);
    console.log(this.chantier);
    
  }

  GetOneById(ID : number| string) {
    this.httpClient
      .get<any[]>(environment.server + "chantiers-perturbants/id/" + ID)
      .subscribe(
        (response) => {
          this.chantier = response[0];
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
