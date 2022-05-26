import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubCommitComponent } from './components/github-commit/github-commit.component';
const routes: Routes = [
  {path: '', component: GithubCommitComponent},
  {path: '**', component: GithubCommitComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
