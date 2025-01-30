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
import { customElement } from 'lit/decorators.js';
let BeepFooter = class BeepFooter extends LitElement {
    render() {
        return html `
        <footer>
            <form>
                <label for="post_message">Message :</label>
                <input type="text" id="post_message">
            </form>
        </footer>
    `;
    }
};
BeepFooter.styles = css `
        footer {
            display : flex;
            flex-direction: row;
            font-weight: bold;
            background-color: silver;
            padding : 20px;
        }
  `;
BeepFooter = __decorate([
    customElement('beep-footer')
], BeepFooter);
export { BeepFooter };
//# sourceMappingURL=beep-footer.js.map