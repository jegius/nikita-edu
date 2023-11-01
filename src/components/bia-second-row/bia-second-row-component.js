import template from "./bia-second-row-component.template.js";

export class BiaSecondRowComponent extends HTMLElement {
    static get name() {
        return "bia-second-row-component";
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
