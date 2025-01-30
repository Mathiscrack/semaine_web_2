/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';


@customElement('beep-footer')
export class BeepFooter extends LitElement {

  static override styles = css`
        footer {
            display : flex;
            flex-direction: row;
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
        </footer>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'beep-footer': BeepFooter;
  }
}
