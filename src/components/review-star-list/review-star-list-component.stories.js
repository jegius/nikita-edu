import { html } from "lit-html";
import "./review-star-list-component.js";
import { ReviewStarListComponent } from "./review-star-list-component.js";
import "./review-star-list-component.template.js";
import "./review-star-list-component.styles.js";
import "../common.css";

export default {
    title: "ReviewStarListComponent",
    tags: ["autodocs"],
};

const Template = () => {
    return html`
       <review-star-list-component></review-star-list-component>
     `;
};

export const Default = Template.bind({});