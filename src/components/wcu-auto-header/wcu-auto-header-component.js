import template from "./wcu-auto-header-component.template.js";

export class WcuAutoHeaderComponent extends HTMLElement {
    static get name() {
        return "wcu-auto-header-component";
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
