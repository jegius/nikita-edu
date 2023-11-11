import template from "./review-author-img-component.template.js";

export class ReviewAuthorImgComponent extends HTMLElement {
    static get name() {
        return "review-author-img-component";
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
