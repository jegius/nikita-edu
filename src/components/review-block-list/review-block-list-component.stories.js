import { html } from "lit-html";
import "./review-block-list-component.js";
import { ReviewBlockListComponent } from "./review-block-list-component.js";
import "./review-block-list-component.template.js";
import "./review-block-list-component.styles.js";
import "../common.css";

export default {
    title: "ReviewBlockListComponent",
    tags: ["autodocs"],
};

const Template = () => {
    return html`
       <review-block-list-component></review-block-list-component>
     `;
};

export const Default = Template.bind({});