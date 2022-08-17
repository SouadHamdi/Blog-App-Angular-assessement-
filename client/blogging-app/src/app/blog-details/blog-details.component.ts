import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../blogs.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {
  blog:{ title: string,
    author: string,
    content: string,
    upvote: number,
    downvote:number
  }= { title: "",
    author: "",
    content: "",
    upvote: 0,
    downvote:0
  }
  constructor(private blogsService: BlogsService, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || "";
    console.log('id', id)
    this.blogsService.getBlogById(id).subscribe(blog => {
      console.log(blog)
      this.blog = blog
    })
  }

}
