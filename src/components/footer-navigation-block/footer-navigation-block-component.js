import template from "./footer-navigation-block-component.template.js";

export class FooterNavigationBlockComponent extends HTMLElement {
    static get name() {
        return "footer-navigation-block-component";
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
