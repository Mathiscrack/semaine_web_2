/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import { LitElement } from 'lit';
import '@kor-ui/kor/components/button';
export declare class BeepMessage extends LitElement {
    content: string;
    author: string;
    date: string;
    likes: number;
    liked: boolean;
    static styles: import("lit").CSSResult;
    colLike: String;
    render(): import("lit-html").TemplateResult<1>;
    private _onClick;
}
declare global {
    interface HTMLElementTagNameMap {
        'beep-message': BeepMessage;
    }
}
//# sourceMappingURL=beep-message.d.ts.map