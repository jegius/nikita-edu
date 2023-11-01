import { html } from "lit-html";
import "./bia-text-block-component.js";
import { BiaTextBlockComponent } from "./bia-text-block-component.js";
import "./bia-text-block-component.template.js";
import "./bia-text-block-component.styles.js";
import "../common.css";

export default {
    title: "BiaTextBlockComponent",
    tags: ["autodocs"],
};

const Template = () => {
    return html`
       <bia-text-block-component></bia-text-block-component>
     `;
};

export const Default = Template.bind({});