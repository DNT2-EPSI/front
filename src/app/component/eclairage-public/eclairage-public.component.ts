import { Component, OnInit } from '@angular/core';
import { EclairagePublicService } from 'src/app/service/eclairagePublique/eclairage-public.service';

@Component({
  selector: 'app-eclairage-public',
  templateUrl: './eclairage-public.component.html',
  styleUrls: ['./eclairage-public.component.css']
})
export class EclairagePublicComponent implements OnInit {

  eclairages = [];
  eclairage = [];

  constructor() { }

  ngOnInit() {/*
    this.eclairageService.GetAll();
    this.eclairage = this.eclairageService.eclairages;
    */
  }


}
