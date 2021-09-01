import { Component, OnInit } from '@angular/core';
import { Post } from '../shared/models/post';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Post[]=[];


  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getPosts().subscribe((posts:Post[])=>{
      this.posts = posts;
    })
  }

}
