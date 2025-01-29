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
  `;  

  override render() {
    return html`
      <div class="message">
        <div>Author</div>
        <div>Message</div>
        <button class="like" @click=${this._onClick} part="button" style="background-color:${this.colLike};"></button>
      </div>
    `;
  }
  private _onClick() {
    if (this.colLike === "silver") {
      this.colLike = "red";
    }else {this.colLike = "silver"}
    this.dispatchEvent(new CustomEvent('color-changed'));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'beep-message': MyElement;
  }
}
