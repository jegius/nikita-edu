import { html } from "lit-html";
import "./logo-component.js";
import { LogoComponent } from "./logo-component.js";
import "./logo-component.template.js";
import "./logo-component.styles.js";
import "../common.css";

export default {
    title: "LogoComponent",
    tags: ["autodocs"],
};

const Template = () => {
    return html`
       <logo-component></logo-component>
     `;
};

export const Default = Template.bind({});