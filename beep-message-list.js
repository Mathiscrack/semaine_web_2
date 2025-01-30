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
import { Task } from '@lit/task';
import './beep-message';
const messages = [
    {
        content: "Hello world",
        author: "Bob",
        date: "2023",
        likes: 1,
        liked: false
    }, {
        content: "Hello hello",
        author: "Alice",
        date: "2025",
        likes: 15,
        liked: true
    }, {
        content: "Hello world",
        author: "Bob",
        date: "2023",
        likes: 1,
        liked: false
    }, {
        content: "Hello world",
        author: "Bob",
        date: "2023",
        likes: 1,
        liked: false
    }, {
        content: "Hello world",
        author: "Bob",
        date: "2023",
        likes: 1,
        liked: false
    }, {
        content: "Hello world",
        author: "Bob",
        date: "2023",
        likes: 1,
        liked: false
    }, {
        content: "Hello world",
        author: "Bob",
        date: "2023",
        likes: 1,
        liked: false
    },
];
let BeepMessageList = class BeepMessageList extends LitElement {
    constructor() {
        super(...arguments);
        this._messagesTask = new Task(this, {
            args: () => ["test"],
            task: () => {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(messages);
                    }, 2000);
                });
            }
        });
    }
    /*override render() {
      return html`${messages.map(message => html`
          <beep-message
              content=${message.content}
              date=${message.date}
              author=${message.author}
              liked=${message.liked}
              likes=${message.likes}
              ></beep-message>
          `)}
      `;
    }*/
    render() {
        return html `${this._messagesTask.render({
            initial: () => html `<p>Waiting to start task</p>`,
            pending: () => html `<p>Running task...</p>`,
            complete: (messages) => html `${messages.map(message => html `
            <beep-message
                content=${message.content}
                date=${message.date}
                author=${message.author}
                ?liked=${message.liked}
                likes=${message.likes}
                ></beep-message>
            `)}
        })}`
        })}`;
    }
};
BeepMessageList.styles = css `
  `;
BeepMessageList = __decorate([
    customElement('beep-message-list')
], BeepMessageList);
export { BeepMessageList };
//# sourceMappingURL=beep-message-list.js.map