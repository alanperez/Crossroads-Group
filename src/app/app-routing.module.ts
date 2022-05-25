import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubCommitComponent } from './components/github-commit/github-commit.component';
const routes: Routes = [
  {path: 'commits', component: GithubCommitComponent},
  {path: '**', redirectTo: 'commits'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
