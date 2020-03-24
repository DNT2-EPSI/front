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
    a.download = 'Eclairages.csv';
    a.click();
    console.log("Import finis");

}

ConvertToCSV(): string {
    var array = JSON.parse(JSON.stringify(this.eclairages));
    var str = '';
    var row = "";

    for (var index in this.eclairages[0]) {
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
