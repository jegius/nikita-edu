import { html } from "lit-html";
import "./ofs-info-contact-component.js";
import { OfsInfoContactComponent } from "./ofs-info-contact-component.js";
import "./ofs-info-contact-component.template.js";
import "./ofs-info-contact-component.styles.js";
import "../common.css";

export default {
    title: "OfsInfoContactComponent",
    tags: ["autodocs"],
};

const Template = () => {
    return html`
       <ofs-info-contact-component></ofs-info-contact-component>
     `;
};

export const Default = Template.bind({});