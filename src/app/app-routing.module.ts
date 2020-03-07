import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './component/index/index.component';
import { ChantiersPerturbantsComponent } from './component/chantiers/chantiers-perturbants.component';
import { EclairagePublicComponent } from './component/eclairages/eclairage-public.component';
import { ChantierComponent } from './component/chantier/chantier.component';
import { EclairageComponent } from './component/eclairage/eclairage.component';
import { CentresComponent } from './component/centres/centres.component';
import { CentreComponent } from './component/centre/centre.component';


const routes: Routes = [

  { path: '', component : IndexComponent},
  { path: 'chantiers', component : ChantiersPerturbantsComponent},
  { path: 'chantier/:id', component : ChantierComponent},
  { path: 'eclairages', component : EclairagePublicComponent},
  { path: 'eclairage/:id', component : EclairageComponent},
  { path: 'centres', component : CentresComponent},
  { path: 'centre/:id', component : CentreComponent},
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
