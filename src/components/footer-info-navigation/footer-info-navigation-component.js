import template from "./footer-info-navigation-component.template.js";

export class FooterInfoNavigationComponent extends HTMLElement {
    static get name() {
        return "footer-info-navigation-component";
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
