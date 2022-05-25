import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  // Assign our API URL
  // private githubApi = 'https://github.com/alanperez/Crossroads-Group/commits'
    private githubApi = 'https://api.github.com/repos/alanperez/Crossroads-Group/commits'
  constructor(private http: HttpClient) { }

  getCommits() {
    return this.http.get(this.githubApi);
  }
}
