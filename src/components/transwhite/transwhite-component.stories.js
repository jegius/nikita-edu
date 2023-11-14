import { html } from "lit-html";
import "./transwhite-component.js";
import { TranswhiteComponent } from "./transwhite-component.js";
import "./transwhite-component.template.js";
import "./transwhite-component.styles.js";
import "../common.css";

export default {
    title: "TranswhiteComponent",
    tags: ["autodocs"],
};

const Template = () => {
    return html`
       <transwhite-component></transwhite-component>
     `;
};

export const Default = Template.bind({});