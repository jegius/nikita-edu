import { html } from "lit-html";
import "./review-author-name-component.js";
import { ReviewAuthorNameComponent } from "./review-author-name-component.js";
import "./review-author-name-component.template.js";
import "./review-author-name-component.styles.js";
import "../common.css";

export default {
    title: "ReviewAuthorNameComponent",
    tags: ["autodocs"],
};

const Template = () => {
    return html`
       <review-author-name-component></review-author-name-component>
     `;
};

export const Default = Template.bind({});