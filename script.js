import {LitElement, html, css} from 'https://cdn.skypack.dev/lit';
class LearnLit extends LitElement {
    static properties = {
        count: {type: Number},
        data: {type: Object}
    }

    constructor() {
        super();
        this.count = 0;
        this.data = window.ftd.component_data(this);
    }

    render() {
        return html`
            <div class="card">
            <div>The count is: ${this.count}</div>
            <div class="title">${this.data.name.get()}</div>
            <button @click=${this._onClick}>Click me</button>
            </div>
        `;
    }

    _onClick() {
        this.count++;
        this.data.name.set(this.data.name.get() + ":" +this.count)
    }

    static styles = css`
    .card {
      padding: 20px;
      background-color: yellow;
      margin: 20px;
      gap: 10px;
      display: flex;
      flex-direction: column;
      border-color: orange;
      border-width: 13px;
      border-style: dotted;
    }
    
    .title {
      font-size: 18px;
      color: #0000FF;
      font-weight: bold;
      font-style: italic;
    }
    `;
}
customElements.define('learn-lit', LearnLit);
