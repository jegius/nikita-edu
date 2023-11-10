import { html } from "lit-html";
import "./ofs-span-with-phone-component.js";
import { OfsSpanWithPhoneComponent } from "./ofs-span-with-phone-component.js";
import "./ofs-span-with-phone-component.template.js";
import "./ofs-span-with-phone-component.styles.js";
import "../common.css";

export default {
    title: "OfsSpanWithPhoneComponent",
    tags: ["autodocs"],
};

const Template = () => {
    return html`
       <ofs-span-with-phone-component></ofs-span-with-phone-component>
     `;
};

export const Default = Template.bind({});