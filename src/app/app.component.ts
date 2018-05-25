import {Component, Input} from '@angular/core';
import {post} from 'selenium-webdriver/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  post = [
    {title: 'Mon premier post' , content: 'Voila mon premiére post il est nice avec ' , loveIts: 23 , created_at: new Date()},
    {title: 'Mon deuxieme post' , content: 'Voila mon deuxiéme post il est nice avec' , loveIts: 10 , created_at: new Date()},
    {title: 'Encore un post' , content: 'Voila encore un post il est beautiful avec ' , loveIts: 0 , created_at: new Date()}
  ];



}
