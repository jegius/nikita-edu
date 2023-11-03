import { html } from "lit-html";
import "./span-header-component.js";
import { SpanHeaderComponent } from "./span-header-component.js";
import "./span-header-component.template.js";
import "./span-header-component.styles.js";
import "../common.css";

export default {
    title: "SpanHeaderComponent",
    tags: ["autodocs"],
};

const Template = () => {
    return html`
       <span-header-component></span-header-component>
     `;
};

export const Default = Template.bind({});