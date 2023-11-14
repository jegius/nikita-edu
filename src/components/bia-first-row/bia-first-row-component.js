import template from "./bia-first-row-component.template.js";

export class BiaFirstRowComponent extends HTMLElement {
    static get name() {
        return "bia-first-row-component";
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
