import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommitObject } from '../interface/commit.interface';
@Injectable({
  providedIn: 'root'
})
export class GithubService {
  // Assign our API URL
  // private githubApi = 'https://github.com/alanperez/Crossroads-Group/commits'
    private githubApi = 'https://api.github.com/repos/alanperez/Crossroads-Group/commits'
  constructor(private http: HttpClient) { }

  getCommits(): Observable<CommitObject[]> {
    return this.http.get<CommitObject[]>(this.githubApi);
  }
}
