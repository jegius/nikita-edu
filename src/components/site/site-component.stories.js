import { html } from "lit-html";
import "./site-component.js";
import { SiteComponent } from "./site-component.js";
import "./site-component.template.js";
import "./site-component.styles.js";
import "../common.css";

export default {
    title: "SiteComponent",
    tags: ["autodocs"],
};

const Template = () => {
    return html`
       <site-component></site-component>
     `;
};

export const Default = Template.bind({});