
import { Injectable } from '@angular/core';
import {
    HttpClient,
} from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Post } from './post.model';


@Injectable({ providedIn: 'root' }) // CAn also be added in providers in app module
export class PostsService {

    constructor(private http: HttpClient) { }

    createAndStorePost(title: string, content: string) {
        const postData: Post = { title, content };
        this.http
            .post<{ name: string }>(
                'https://ng-complete-guide-c56d3.firebaseio.com/posts.json',
                postData
            )
            .subscribe(responseData => {
                console.log(responseData);
            });
    }

    fetchPosts() {
        return this.http
            .get<{ [key: string]: Post }>(
                'https://ng-complete-guide-c56d3.firebaseio.com/posts.json'
            )
            .pipe(
                map(responseData => {
                    const postsArray: Post[] = [];
                    for (const key in responseData) {
                        if (responseData.hasOwnProperty(key)) {
                            postsArray.push({ ...responseData[key], id: key });
                        }
                    }
                    return postsArray;
                })
            );
    }

    deletePosts() {
       return this.http
      .delete('https://ng-complete-guide-c56d3.firebaseio.com/posts.json');
    }
}