/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import { LitElement } from 'lit';
import { Task } from '@lit/task';
import './beep-message';
type Message = {
    content: string;
    date: string;
    author: string;
    likes: number;
    liked: boolean;
};
export declare class BeepMessageList extends LitElement {
    _messagesTask: Task<readonly ["test"], Message[]>;
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'beep-message-list': BeepMessageList;
    }
}
export {};
//# sourceMappingURL=beep-message-list.d.ts.map