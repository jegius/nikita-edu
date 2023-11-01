/** @type { import('@storybook/web-components').Preview } */
import { ButtonComponent } from '../src/components/button/button-component.js'
import { LogoComponent } from '../src/components/logo/logo-component.js'
import { NavigationButtonsComponent } from '../src/components/navigation-buttons/navigation-buttons-component.js';
import { NotificationComponent } from '../src/components/notification/notification-component.js';
import { NavigationItemComponent } from '../src/components/navigation-item/navigation-item-component.js';
import { NavigationListComponent } from '../src/components/navigation-list/navigation-list-component.js';
import { HeaderComponent } from '../src/components/header/header-component.js';
import { SiteComponent } from '../src/components/site/site-component.js';
import { TextComponent } from '../src/components/text/text-component.js';
import { TextHeaderComponent } from '../src/components/text-header/text-header-component.js';
import { PictureComponent } from '../src/components/picture/picture-component.js';
import { TranswhiteComponent } from '../src/components/transwhite/transwhite-component.js';
import { BiaTitleComponent } from '../src/components/bia-title/bia-title-component.js';
import { BiaFirstRowComponent } from '../src/components/bia-first-row/bia-first-row-component.js';
import { BiaTextBlockComponent } from '../src/components/bia-text-block/bia-text-block-component.js';
import { BiaSecondRowComponent } from '../src/components/bia-second-row/bia-second-row-component.js';
import { BestInAutoComponent } from '../src/components/best-in-auto/best-in-auto-component.js';

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

[
  ButtonComponent,
  LogoComponent,
  NotificationComponent,
  NavigationButtonsComponent,
  NavigationItemComponent,
  NavigationListComponent,
  HeaderComponent,
  SiteComponent,
  TextComponent,
  TextHeaderComponent,
  PictureComponent,
  TranswhiteComponent,
  BiaTitleComponent,
  BiaFirstRowComponent,
  BiaTextBlockComponent,
  BiaSecondRowComponent,
  BestInAutoComponent,
].map((component) => customElements.define(component.name, component));

export default preview;
