import { html } from "lit-html";
import "./review-author-component.js";
import { ReviewAuthorComponent } from "./review-author-component.js";
import "./review-author-component.template.js";
import "./review-author-component.styles.js";
import "../common.css";

export default {
    title: "ReviewAuthorComponent",
    tags: ["autodocs"],
};

const Template = () => {
    return html`
       <review-author-component></review-author-component>
     `;
};

export const Default = Template.bind({});