import { html } from "lit-html";
import "./cco-info-back-and-text-component.js";
import { CcoInfoBackAndTextComponent } from "./cco-info-back-and-text-component.js";
import "./cco-info-back-and-text-component.template.js";
import "./cco-info-back-and-text-component.styles.js";
import "../common.css";

export default {
    title: "CcoInfoBackAndTextComponent",
    tags: ["autodocs"],
};

const Template = () => {
    return html`
       <cco-info-back-and-text-component></cco-info-back-and-text-component>
     `;
};

export const Default = Template.bind({});