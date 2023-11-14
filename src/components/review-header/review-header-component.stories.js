import { html } from "lit-html";
import "./review-header-component.js";
import { ReviewHeaderComponent } from "./review-header-component.js";
import "./review-header-component.template.js";
import "./review-header-component.styles.js";
import "../common.css";

export default {
    title: "ReviewHeaderComponent",
    tags: ["autodocs"],
};

const Template = () => {
    return html`
       <review-header-component></review-header-component>
     `;
};

export const Default = Template.bind({});