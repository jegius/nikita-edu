import { html } from "lit-html";
import "./review-author-img-component.js";
import { ReviewAuthorImgComponent } from "./review-author-img-component.js";
import "./review-author-img-component.template.js";
import "./review-author-img-component.styles.js";
import "../common.css";

export default {
    title: "ReviewAuthorImgComponent",
    tags: ["autodocs"],
};

const Template = () => {
    return html`
       <review-author-img-component></review-author-img-component>
     `;
};

export const Default = Template.bind({});