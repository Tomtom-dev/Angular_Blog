import { Component, Input, OnInit } from '@angular/core';
import { PostCardComponent } from '../post-list/post-card/post-card.component';
import { Comment } from '../shared/models/comment';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  comments : Comment[]=[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // this.userService.getComments(PostCardComponent.getComments())
  }

}
