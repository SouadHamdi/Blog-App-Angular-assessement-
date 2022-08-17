import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  blogUrl = 'http://localhost:3000/blogs';
  constructor(private httpClient:HttpClient) {}

getAllBlogs() {
  return this.httpClient.get<{ title: string,
    author: string,
    content: string,
    upvote: number,
    downvote:number
  }[]>(this.blogUrl);
}

getBlogById(id:string){
  return this.httpClient.get<{ title: string,
    author: string,
    content: string,
    upvote: number,
    downvote:number
  }>(`${this.blogUrl}/${id}`);
}


addBlog(blog:any) {
  
  return this.httpClient.post<{message:string}>(`${this.blogUrl}/create`, blog);
}

upVote(id:string,  upVote:number) {
  return this.httpClient.put(`${this.blogUrl}/upvote/${id}`,{upVote:upVote});

   }
   downVote(id:string, downVote:number) {
    return this.httpClient.put<{message:string}>(`${this.blogUrl}/downvote/${id}`,{downvote:downVote});
  
     }
}
