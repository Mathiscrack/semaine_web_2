/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';


@customElement('beep-message')
export class MyElement extends LitElement {

  @property({type : String})
  colLike = "silver";

  @property({type : String})
  content = "Test content";

  @property({type : String})
  author = "Test author";

  @property({type : Number})
  likes = 0;

  @property({type : String})
  date = new Date().toISOString();

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
    .like_box {
      display : flex;
      flex-orientation : row;
      gap : 10px;
    }
  `;  

  override render() {
    return html`
      <div class="message">
        <div>
          <span class="author">${this.author}</span><span class="date">  -- posted on ${this.date}</span>
        </div>
        <p>${this.content}</p>
        <div class="like_box">
          <button class="like" @click=${this._onClick} part="button" style="background-color:${this.colLike};"></button>
          <div>Likes : ${this.likes}</div>
        </div>
      </div>
    `;
  }
  private _onClick() {
    if (this.colLike === "silver") {
      this.colLike = "red";
      this.likes++;
    }else {
      this.colLike = "silver";
      this.likes--;
    }
    this.dispatchEvent(new CustomEvent('color-changed'));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'beep-message': MyElement;
  }
}
