import { html } from "lit-html";
import "./cco-big-component.js";
import { CcoBigComponent } from "./cco-big-component.js";
import "./cco-big-component.template.js";
import "./cco-big-component.styles.js";
import "../common.css";

export default {
    title: "CcoBigComponent",
    tags: ["autodocs"],
};

const Template = () => {
    return html`
       <cco-big-component></cco-big-component>
     `;
};

export const Default = Template.bind({});