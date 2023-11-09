import { html } from "lit-html";
import "./cco-cars-info-component.js";
import { CcoCarsInfoComponent } from "./cco-cars-info-component.js";
import "./cco-cars-info-component.template.js";
import "./cco-cars-info-component.styles.js";
import "../common.css";

export default {
    title: "CcoCarsInfoComponent",
    tags: ["autodocs"],
};

const Template = () => {
    return html`
       <cco-cars-info-component></cco-cars-info-component>
     `;
};

export const Default = Template.bind({});