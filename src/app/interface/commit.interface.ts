
interface Author {
    avatar_url: string;
}


interface Commit {

    author: {
        date: string;
        name: string;
        email: string;
    }
    message: string;
    
}


export interface CommitObject {

    author: Author;
    commit: Commit;
    html_url: string;
}