/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';


@customElement('beep-header')
export class BeepHeader extends LitElement {

  static override styles = css`
        header {
            display : flex;
            flex-direction: row;
            font-weight: bold;
            background-color: silver;
            padding : 20px;
        }
  `;  

  override render() {
    return html`
        <header>
            <form>
                <label for="post_message">User :</label>
                <input type="text" id="post_message">
            </form>
        </header>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'beep-header': BeepHeader;
  }
}
