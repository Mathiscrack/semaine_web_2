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
import { formatDistanceToNow } from 'date-fns';
import { fr } from 'date-fns/locale';
import '@kor-ui/kor/components/button';
let BeepMessage = class BeepMessage extends LitElement {
    constructor() {
        super(...arguments);
        this.content = "Test content";
        this.author = "Test author";
        this.date = new Date().toISOString();
        this.likes = 0;
        this.liked = false;
        this.colLike = this.liked ? "red" : "silver";
    }
    render() {
        return html `
      <div class="message">
        <div>
          <span class="author">${this.author}</span><span class="date">  --  ${formatDistanceToNow(this.date, { addSuffix: true, locale: fr })}</span>
        </div>
        <p>${this.content}</p>
        <div>
          <button class="like" @click=${this._onClick} part="button" style="background-color:${this.colLike};"></button> 
          <span>Likes : ${this.likes}</span>
        </div>
      </div>
    `;
    }
    _onClick() {
        /*if (this.colLike === "silver") {
          this.colLike = "red";
          this.likes++;
        }else {
          this.colLike = "silver";
          this.likes--;
        }*/
        this.liked = !this.liked;
        this.colLike = this.liked ? "red" : "silver";
    }
};
BeepMessage.styles = css `
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
__decorate([
    property({ type: String })
], BeepMessage.prototype, "content", void 0);
__decorate([
    property({ type: String })
], BeepMessage.prototype, "author", void 0);
__decorate([
    property({ type: String })
], BeepMessage.prototype, "date", void 0);
__decorate([
    property({ type: Number })
], BeepMessage.prototype, "likes", void 0);
__decorate([
    property({ type: Boolean })
], BeepMessage.prototype, "liked", void 0);
BeepMessage = __decorate([
    customElement('beep-message')
], BeepMessage);
export { BeepMessage };
//# sourceMappingURL=beep-message.js.map