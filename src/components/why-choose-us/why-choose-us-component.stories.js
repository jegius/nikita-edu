import { html } from "lit-html";
import "./why-choose-us-component.js";
import { WhyChooseUsComponent } from "./why-choose-us-component.js";
import "./why-choose-us-component.template.js";
import "./why-choose-us-component.styles.js";
import "../common.css";

export default {
    title: "WhyChooseUsComponent",
    tags: ["autodocs"],
};

const Template = () => {
    return html`
       <why-choose-us-component></why-choose-us-component>
     `;
};

export const Default = Template.bind({});