import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-eclairage-public',
  templateUrl: './eclairage-public.component.html',
  styleUrls: ['./eclairage-public.component.css']
})
export class EclairagePublicComponent implements OnInit {

  eclairages = [];

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
          console.log(response);
          
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  downloadFile() {
    var data = this.eclairages ;
    const replacer = (key, value) => value === null ? '' : value; // specify how you want to handle null values here
    const header = Object.keys(data[0]);
    let csv = data.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','));
    csv.unshift(header.join(','));
    let csvArray = csv.join('\r\n');

    var a = document.createElement('a');
    var blob = new Blob([csvArray], {type: 'text/csv' }),
    url = window.URL.createObjectURL(blob);

    a.href = url;
    a.download = "myFile.csv";
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove();
}

}
