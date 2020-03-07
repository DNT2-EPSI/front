import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './component/index/index.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { ChantiersPerturbantsComponent } from './component/chantiers/chantiers-perturbants.component';
import { EclairagePublicComponent } from './component/eclairages/eclairage-public.component';
import { CentreComponent } from './component/centre/centre.component';
import { CentresComponent } from './component/centres/centres.component';
import { EclairageComponent } from './component/eclairage/eclairage.component';
import { ChantierComponent } from './component/chantier/chantier.component';



@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    FooterComponent,
    ChantiersPerturbantsComponent,ChantierComponent,
    EclairagePublicComponent,EclairageComponent,
    CentreComponent,CentresComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
