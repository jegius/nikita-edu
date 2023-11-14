import { html } from "lit-html";
import "./rac-info-component.js";
import { RacInfoComponent } from "./rac-info-component.js";
import "./rac-info-component.template.js";
import "./rac-info-component.styles.js";
import "../common.css";

export default {
    title: "RacInfoComponent",
    tags: ["autodocs"],
};

const Template = () => {
    return html`
       <rac-info-component></rac-info-component>
     `;
};

export const Default = Template.bind({});