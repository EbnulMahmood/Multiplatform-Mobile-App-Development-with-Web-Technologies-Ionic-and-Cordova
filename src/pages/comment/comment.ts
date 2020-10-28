import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Comment } from "../../shared/comment";


@IonicPage()
@Component({
  selector: 'page-comment',
  templateUrl: 'comment.html',
})
export class CommentPage {
  commentForm: FormGroup;
  showComment: Comment;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private viewCtrl: ViewController,
              private formBuilder: FormBuilder) {
    this.commentForm = this.formBuilder.group({
      author: ['', Validators.required],
      rating: 4,
      comment: ['', Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Comment');
  }

  onSubmit() {
    this.showComment = this.commentForm.value;
    this.showComment.date = new Date().toISOString();
    this.viewCtrl.dismiss(this.showComment);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
