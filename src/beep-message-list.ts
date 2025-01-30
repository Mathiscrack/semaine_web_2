/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';
import { Task } from '@lit/task';
import './beep-message';

type Message = {
    content: string;
    date: string;
    author: string;
    likes: number;
    liked: boolean
}

const messages: Message[] = [
    {
        content : "Hello world",
        author : "Bob",
        date : "2023",
        likes : 1,
        liked : false
    },{
        content : "Hello hello",
        author : "Alice",
        date : "2025",
        likes : 15,
        liked : true
    },{
        content : "Hello world",
        author : "Bob",
        date : "2023",
        likes : 1,
        liked : false
    },{
        content : "Hello world",
        author : "Bob",
        date : "2023",
        likes : 1,
        liked : false
    },{
        content : "Hello world",
        author : "Bob",
        date : "2023",
        likes : 1,
        liked : false
    },{
        content : "Hello world",
        author : "Bob",
        date : "2023",
        likes : 1,
        liked : false
    },{
        content : "Hello world",
        author : "Bob",
        date : "2023",
        likes : 1,
        liked : false
    },
]

@customElement('beep-message-list')
export class BeepMessageList extends LitElement {
  static override styles = css`
  `;

  _messagesTask = new Task(this, {
    args: () => ["test"],
    task: () => {
        return new Promise<Message[]>((resolve) => {
            setTimeout( () => {
                resolve(messages);
            }, 2000);
        })
    }
    });


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

  override render(){
    return html`${this._messagesTask.render({
        initial : () => html`<p>Waiting to start task</p>`,
        pending : () => html`<p>Running task...</p>`,
        complete : (messages) => html`${messages.map(message => html`
            <beep-message
                content=${message.content}
                date=${message.date}
                author=${message.author}
                ?liked=${message.liked}
                likes=${message.likes}
                ></beep-message>
            `)}
        })}`
        })}`
    }
}

declare global {
  interface HTMLElementTagNameMap {
    'beep-message-list': BeepMessageList;
  }
}
