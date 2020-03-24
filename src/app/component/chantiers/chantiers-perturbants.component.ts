import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-chantiers-perturbants',
  templateUrl: './chantiers-perturbants.component.html',
  styleUrls: ['./chantiers-perturbants.component.css']
})
export class ChantiersPerturbantsComponent implements OnInit {

  chantiers = [];
  objets : Array<string>;

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

  downloadButtonPush() {
    console.log("Lancement de l'import");
    var csvData = this.ConvertToCSV();
    var a = document.createElement("a");
    a.setAttribute('style', 'display:none;');
    document.body.appendChild(a);
    var blob = new Blob([csvData], { type: 'text/csv' });
    var url = window.URL.createObjectURL(blob);
    console.log("Import en cours");
    a.href = url;
    a.download = 'Chantiers.csv';
    a.click();
    console.log("Import finis");

}

ConvertToCSV(): string {
    var array = JSON.parse(JSON.stringify(this.chantiers));
    var str = '';
    var row = "";

    for (var index in this.chantiers[0]) {
        //Now convert each value to string and comma-separated
        row += index + ',';
    }
    row = row.slice(0, -1);
    //append Label row with line break
    str += row + '\r\n';

    for (var i = 0; i < array.length; i++) {
        var line = '';
        for (var index in array[i]) {
            if (line != '') line += ','

            line += array[i][index];
        }
        str += line + '\r\n';
    }
    return str;
}

}
