import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-centre',
  templateUrl: './centre.component.html',
  styleUrls: ['./centre.component.css']
})

export class CentreComponent implements OnInit {

  private routeSub: Subscription;
  private ID : number| string;
  centre = [];

  constructor(private httpClient : HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.ID = params['id'];//log the value of id
    });
    this.GetOneById(this.ID);
    console.log(this.centre);

  }

  GetOneById(ID : number| string) {
    this.httpClient
      .get<any[]>(environment.server + "centre-sante/id/" + ID)
      .subscribe(
        (response) => {
          this.centre = response[0];          
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
