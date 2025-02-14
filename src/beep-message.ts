/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {formatDistanceToNow} from 'date-fns';
import {fr} from 'date-fns/locale';
import '@kor-ui/kor/components/button'


@customElement('beep-message')
export class BeepMessage extends LitElement {

  @property({type : String})
  content = "Test content";

  @property({type : String})
  author = "Test author";

  @property({type : String})
  date = new Date().toISOString();

  @property({type : Number})
  likes = 0;

  @property({type : Boolean})
  liked = false;

  static override styles = css`
    .message {
      display : flex;
      flex-direction: column;
      justify-content: flex-start;
      border-bottom : 2px solid black;
      padding : 10px;
    }
    .like {
      width : 1vw;
      aspect-ratio : 1 / 1;
    }
    .date {
      font-size : 70%;
    }
    .author {
      font-size : 120%;
    }
  `;  


  override render() {
    console.log(this.liked);
    const colLike : String = this.liked ? "red" : "silver";
    return html`
      <div class="message">
        <div>
          <span class="author">${this.author}</span><span class="date">  --  ${formatDistanceToNow(this.date, {addSuffix :  true, locale : fr})}</span>
        </div>
        <p>${this.content}</p>
        <div>
          <button class="like" @click=${this._onClick} part="button" style="background-color:${colLike};"></button> 
          <span>Likes : ${this.likes}</span>
        </div>
      </div>
    `;
  }
  private _onClick() {
    /*if (this.colLike === "silver") {
      this.colLike = "red";
      this.likes++;
    }else {
      this.colLike = "silver";
      this.likes--;
    }*/
    
    this.liked = !this.liked;
    this.likes += this.liked ? 1 : -1;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'beep-message': BeepMessage;
  }
}
