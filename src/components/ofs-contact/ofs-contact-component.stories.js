import { html } from "lit-html";
import "./ofs-contact-component.js";
import { OfsContactComponent } from "./ofs-contact-component.js";
import "./ofs-contact-component.template.js";
import "./ofs-contact-component.styles.js";
import "../common.css";

export default {
    title: "OfsContactComponent",
    tags: ["autodocs"],
};

const Template = () => {
    return html`
       <ofs-contact-component></ofs-contact-component>
     `;
};

export const Default = Template.bind({});