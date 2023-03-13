import {LitElement, html} from 'https://cdn.skypack.dev/lit';
class LearnLit extends LitElement {
    static properties = {
        count: {type: Number}
    }

    constructor() {
        super();
        this.count = 0;
    }

    render() {
        return html`
            <div>The count is: ${this.count}</div>
            <button @click=${() => (this.count++)}>Click me</button>
        `;
    }
}
customElements.define('learn-lit', LearnLit);
