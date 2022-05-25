import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/service/github.service';
import {CommitObject} from 'src/app/interface/commit.interface';
@Component({
  selector: 'app-github-commit',
  templateUrl: './github-commit.component.html',
  styleUrls: ['./github-commit.component.css']
})
export class GithubCommitComponent implements OnInit {

  // Assign our interface
  commits: CommitObject[] = [];
  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    // 
    this.githubService.getCommits().subscribe(
      (results) => {
        this.commits = results
        console.log('clg', results)
      }
    )

  }

}
