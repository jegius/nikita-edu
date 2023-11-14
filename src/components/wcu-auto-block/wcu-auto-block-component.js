import template from "./wcu-auto-block-component.template.js";

export class WcuAutoBlockComponent extends HTMLElement {
    static get name() {
        return "wcu-auto-block-component";
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.#render();
    }

    #render() {
        const templateElem = document.createElement("template");
        templateElem.innerHTML = template;
        this.shadowRoot.appendChild(templateElem.content.cloneNode(true));
    }
}
