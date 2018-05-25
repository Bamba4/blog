import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {
  @Input() post: {
    title: string,
    content: string,
    loveIts: number,
    created_at: Date
  };
  constructor() { }

  ngOnInit() {
  }

  loveIt() {

  }
  getLoveIt() {
    this.post.loveIts ++;
  }
  getDontLoveIts() {
    this.post.loveIts --;
  }

}
