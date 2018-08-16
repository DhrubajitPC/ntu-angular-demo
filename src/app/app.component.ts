import { Component, OnInit } from '@angular/core';
import { LikeService } from './services/like.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ntu-demo';
  angularNbLikes = 0;
  reactNbLikes = 0;
  vueNbLikes = 0;

  constructor(private likeService: LikeService) {}

  ngOnInit() {
    this.updateLikeCount();
  }

  updateLikeCount() {
    this.likeService.getAngularLikes()
      .then(res => {
        this.angularNbLikes = res.length;
      });
  }
}
