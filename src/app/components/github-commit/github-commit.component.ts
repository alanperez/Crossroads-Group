import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/service/github.service';

@Component({
  selector: 'app-github-commit',
  templateUrl: './github-commit.component.html',
  styleUrls: ['./github-commit.component.css']
})
export class GithubCommitComponent implements OnInit {

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    // 
    this.githubService.getCommits().subscribe(
      (results: any) => {
        console.log(results)
      }
    )

  }

}
