import { html } from "lit-html";
import "./best-in-auto-component.js";
import { BestInAutoComponent } from "./best-in-auto-component.js";
import "./best-in-auto-component.template.js";
import "./best-in-auto-component.styles.js";
import "../common.css";

export default {
    title: "BestInAutoComponent",
    tags: ["autodocs"],
};

const Template = () => {
    return html`
       <best-in-auto-component></best-in-auto-component>
     `;
};

export const Default = Template.bind({});