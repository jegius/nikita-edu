import { html } from "lit-html";
import "./review-star-component.js";
import { ReviewStarComponent } from "./review-star-component.js";
import "./review-star-component.template.js";
import "./review-star-component.styles.js";
import "../common.css";

export default {
    title: "ReviewStarComponent",
    tags: ["autodocs"],
};

const Template = () => {
    return html`
       <review-star-component></review-star-component>
     `;
};

export const Default = Template.bind({});