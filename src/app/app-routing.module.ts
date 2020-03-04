import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './component/index/index.component';
import { ChantiersPerturbantsComponent } from './component/chantiers-perturbants/chantiers-perturbants.component';
import { EclairagePublicComponent } from './component/eclairage-public/eclairage-public.component';


const routes: Routes = [

  { path: '', component : IndexComponent},
  { path: 'chantiers', component : ChantiersPerturbantsComponent},
  { path: 'eclairages', component : EclairagePublicComponent},
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
