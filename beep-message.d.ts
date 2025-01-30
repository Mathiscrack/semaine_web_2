/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import { LitElement } from 'lit';
export declare class MyElement extends LitElement {
    colLike: string;
    content: string;
    author: string;
    likes: number;
    date: string;
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
    private _onClick;
}
declare global {
    interface HTMLElementTagNameMap {
        'beep-message': MyElement;
    }
}
//# sourceMappingURL=beep-message.d.ts.map