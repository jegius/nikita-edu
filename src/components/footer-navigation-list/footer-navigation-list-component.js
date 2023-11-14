import template from "./footer-navigation-list-component.template.js";

export class FooterNavigationListComponent extends HTMLElement {
    static get name() {
        return "footer-navigation-list-component";
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
