import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';
const routes: Routes = [
  { path: '', redirectTo: '/blogs', pathMatch: 'full' },
 { path: 'blogs', component: BlogsComponent},
 { path: 'detail/:id', component: BlogDetailsComponent },
 {path: 'createBlog', component: CreateBlogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
