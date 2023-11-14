import { html } from "lit-html";
import "./review-component.js";
import { ReviewComponent } from "./review-component.js";
import "./review-component.template.js";
import "./review-component.styles.js";
import "../common.css";

export default {
    title: "ReviewComponent",
    tags: ["autodocs"],
};

const Template = () => {
    return html`
       <review-component></review-component>
     `;
};

export const Default = Template.bind({});