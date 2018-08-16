import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LikeService } from '../services/like.service';

@Component({
  selector: 'app-angular-like',
  templateUrl: './angular-like.component.html',
  styleUrls: ['./angular-like.component.css']
})
export class AngularLikeComponent implements OnInit {

  @Input() nbLikes = 10;
  @Output() updateEvent = new EventEmitter<any>();

  isLiked = false;
  private likeId: number;
  constructor(private likeService: LikeService) { }

  ngOnInit() {
  }

  buttonClick() {
    if (!this.isLiked) {
      this.likeService.addAngularLikeCount({timeStamp: new Date().getTime()})
        .then(res => {
          this.isLiked = true;
          this.likeId = res.id;
          this.updateEvent.emit();
        });
    } else {
      this.likeService.deleteAngularLikeCount(this.likeId)
        .then(() => {
          this.isLiked = false;
          this.updateEvent.emit();
        });
    }
  }
}
