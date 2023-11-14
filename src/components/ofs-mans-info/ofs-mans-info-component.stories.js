import { html } from "lit-html";
import "./ofs-mans-info-component.js";
import { OfsMansInfoComponent } from "./ofs-mans-info-component.js";
import "./ofs-mans-info-component.template.js";
import "./ofs-mans-info-component.styles.js";
import "../common.css";

export default {
    title: "OfsMansInfoComponent",
    tags: ["autodocs"],
};

const Template = () => {
    return html`
       <ofs-mans-info-component></ofs-mans-info-component>
     `;
};

export const Default = Template.bind({});