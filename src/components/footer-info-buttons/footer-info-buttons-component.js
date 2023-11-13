import template from "./footer-info-buttons-component.template.js";

export class FooterInfoButtonsComponent extends HTMLElement {
    static get name() {
        return "footer-info-buttons-component";
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
