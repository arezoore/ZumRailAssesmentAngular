import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostsService } from './services/posts.service';
import { getPostsParamsType } from './types/httpParamsType';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PostsType } from './types/postType';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
  title = 'AngularAssesment';

  posts: Array<PostsType> = [];

  constructor(private postsService: PostsService) { }

  searchPostsForm = new FormGroup({
    tags: new FormControl<string>('', [Validators.required]),
    sortBy: new FormControl<'id' | 'reads' | 'likes' | 'popularity'>('id', { nonNullable: true }),
    direction: new FormControl<'asc' | 'desc'>('asc', { nonNullable: true }),
  });

  ngOnInit() {
  }

  search() {
    if (this.searchPostsForm.valid) {
      this.getPosts();
    }
    else {
      this.searchPostsForm.markAllAsTouched();
    }
  }

  getPosts() {
    let params: getPostsParamsType = {
      tags: this.searchPostsForm.getRawValue().tags!,
      direction: this.searchPostsForm.value.direction,
      sortBy: this.searchPostsForm.value.sortBy
    }

    this.postsService.getPosts(params).subscribe(res => {
      this.posts = res.posts;
    })
  }
}
