import { html } from "lit-html";
import "./review-block-component.js";
import { ReviewBlockComponent } from "./review-block-component.js";
import "./review-block-component.template.js";
import "./review-block-component.styles.js";
import "../common.css";

export default {
    title: "ReviewBlockComponent",
    tags: ["autodocs"],
};

const Template = () => {
    return html`
       <review-block-component></review-block-component>
     `;
};

export const Default = Template.bind({});