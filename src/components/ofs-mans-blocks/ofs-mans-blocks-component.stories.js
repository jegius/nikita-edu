import { html } from "lit-html";
import "./ofs-mans-blocks-component.js";
import { OfsMansBlocksComponent } from "./ofs-mans-blocks-component.js";
import "./ofs-mans-blocks-component.template.js";
import "./ofs-mans-blocks-component.styles.js";
import "../common.css";

export default {
    title: "OfsMansBlocksComponent",
    tags: ["autodocs"],
};

const Template = () => {
    return html`
       <ofs-mans-blocks-component></ofs-mans-blocks-component>
     `;
};

export const Default = Template.bind({});