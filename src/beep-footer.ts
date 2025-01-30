/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';
import '@kor-ui/kor/components/button';;


@customElement('beep-footer')
export class BeepFooter extends LitElement {

  static override styles = css`
        footer {
            display : flex;
            flex-direction: row;
            justify-content : space-between;
            font-weight: bold;
            background-color: silver;
            padding : 20px;
        }
  `;  

  override render() {
    return html`
        <footer>
            <form>
                <label for="post_message">Message :</label>
                <input type="text" id="post_message">
            </form>
            <kor-button label="Send"></kor-button>
        </footer>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'beep-footer': BeepFooter;
  }
}
