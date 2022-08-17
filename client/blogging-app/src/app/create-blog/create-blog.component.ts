
import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../blogs.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})

export class CreateBlogComponent {
  constructor(
    private blogsService: BlogsService,
    private router: Router
  ) {}

 
  createBlog(blog: {
    title: string;
    content: string;
    author: string;
  }) {
    console.log(blog);
    

    this.blogsService.addBlog(blog).subscribe((res) => {
      console.log(res);
    });
    this.router.navigate(['']);
  }
}