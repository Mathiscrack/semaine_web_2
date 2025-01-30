/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let MyElement = class MyElement extends LitElement {
    constructor() {
        super(...arguments);
        this.colLike = "silver";
        this.content = "Test content";
        this.author = "Test author";
        this.likes = 0;
        this.date = new Date().toISOString();
    }
    render() {
        return html `
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
    _onClick() {
        if (this.colLike === "silver") {
            this.colLike = "red";
            this.likes++;
        }
        else {
            this.colLike = "silver";
            this.likes--;
        }
        this.dispatchEvent(new CustomEvent('color-changed'));
    }
};
MyElement.styles = css `
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
__decorate([
    property({ type: String })
], MyElement.prototype, "colLike", void 0);
__decorate([
    property({ type: String })
], MyElement.prototype, "content", void 0);
__decorate([
    property({ type: String })
], MyElement.prototype, "author", void 0);
__decorate([
    property({ type: Number })
], MyElement.prototype, "likes", void 0);
__decorate([
    property({ type: String })
], MyElement.prototype, "date", void 0);
MyElement = __decorate([
    customElement('beep-message')
], MyElement);
export { MyElement };
//# sourceMappingURL=beep-message.js.map