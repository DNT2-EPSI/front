import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './component/index/index.component';
import { LaDemarcheComponent } from './component/laDemarche/laDemarche.component';
import { AProposComponent } from './component/APropos/APropos.component';
import { QuestionComponent } from './component/question/question.component';


const routes: Routes = [
  { path: '', component : IndexComponent},
  { path: 'demarche', component : LaDemarcheComponent},
  { path: 'aPropos', component : AProposComponent},
  { path: 'question', component : QuestionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
