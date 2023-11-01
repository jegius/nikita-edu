import { html } from "lit-html";
import "./picture-component.js";
import { PictureComponent } from "./picture-component.js";
import "./picture-component.template.js";
import "./picture-component.styles.js";
import "../common.css";

export default {
    title: "PictureComponent",
    tags: ["autodocs"],
};

const Template = () => {
    return html`
       <picture-component></picture-component>
     `;
};

export const Default = Template.bind({});