import { html } from "lit-html";
import "./comfortable-car-white-component.js";
import { ComfortableCarWhiteComponent } from "./comfortable-car-white-component.js";
import "./comfortable-car-white-component.template.js";
import "./comfortable-car-white-component.styles.js";
import "../common.css";

export default {
    title: "ComfortableCarWhiteComponent",
    tags: ["autodocs"],
};

const Template = () => {
    return html`
       <comfortable-car-white-component></comfortable-car-white-component>
     `;
};

export const Default = Template.bind({});