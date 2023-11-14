import { html } from "lit-html";
import "./rent-a-car-component.js";
import { RentACarComponent } from "./rent-a-car-component.js";
import "./rent-a-car-component.template.js";
import "./rent-a-car-component.styles.js";
import "../common.css";

export default {
    title: "RentACarComponent",
    tags: ["autodocs"],
};

const Template = () => {
    return html`
       <rent-a-car-component></rent-a-car-component>
     `;
};

export const Default = Template.bind({});