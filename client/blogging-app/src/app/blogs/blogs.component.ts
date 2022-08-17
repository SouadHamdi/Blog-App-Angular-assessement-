import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../blogs.service';
@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  styleColor:string="background-color:grey;"
blogs:Array<any>=[]
  constructor(private blogsService: BlogsService) {
    
   }

  ngOnInit(): void {
    this.blogsService.getAllBlogs().subscribe(blogs => {
      this.blogs = blogs
    })
    
  }
  upvote(id:string,vote:number){
    
    
    this.blogsService.upVote(id,vote).subscribe(res => {
      window.location.reload();

      
    })
  }
  downvote(id:string,vote:number){
    
    
    this.blogsService.downVote(id,vote).subscribe(res => {
      window.location.reload();

      
    })
  }

}
