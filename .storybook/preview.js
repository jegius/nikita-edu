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
import { SpanHeaderComponent } from '../src/components/span-header/span-header-component.js'
import { StickComponent } from '../src/components/stick/stick-component.js';
import { WcuAutoHeaderComponent } from '../src/components/wcu-auto-header/wcu-auto-header-component.js'
import { WcuAutoBlockComponent } from '../src/components/wcu-auto-block/wcu-auto-block-component.js'
import { WcuAutoComponent } from '../src/components/wcu-auto/wcu-auto-component.js';
import { WhyChooseUsComponent } from '../src/components/why-choose-us/why-choose-us-component.js';
import { InputTextComponent } from '../src/components/input-text/input-text-component.js';
import { CarSelectComponent } from '../src/components/car-select/car-select-component.js';
import { CarFormComponent } from '../src/components/car-form/car-form-component.js';
import { RacInfoComponent } from '../src/components/rac-info/rac-info-component.js';
import { RentACarComponent } from '../src/components/rent-a-car/rent-a-car-component.js';
import { CcwCarsTextComponent } from '../src/components/ccw-cars-text/ccw-cars-text-component.js';
import { CcwCarTopRightComponent } from '../src/components/ccw-car-top-right/ccw-car-top-right-component.js';
import { CcwCarsRightComponent } from '../src/components/ccw-cars-right/ccw-cars-right-component.js';
import { CcwCarsInfoComponent } from '../src/components/ccw-cars-info/ccw-cars-info-component.js';
import { ComfortableCarWhiteComponent } from '../src/components/comfortable-car-white/comfortable-car-white-component.js';
import { CcoBigComponent } from '../src/components/cco-big/cco-big-component.js';
import { CcoInfoBackAndTextComponent } from '../src/components/cco-info-back-and-text/cco-info-back-and-text-component.js';
import { CcoCarsInfoComponent } from '../src/components/cco-cars-info/cco-cars-info-component.js';
import { ComfortableCarOrangeComponent } from '../src/components/comfortable-car-orange/comfortable-car-orange-component.js';
import { OfsSpanWithPhoneComponent } from '../src/components/ofs-span-with-phone/ofs-span-with-phone-component.js';
import { OfsInfoContactComponent } from '../src/components/ofs-info-contact/ofs-info-contact-component.js';
import { OfsContactComponent } from '../src/components/ofs-contact/ofs-contact-component.js';
import { OfsMansBlocksComponent } from '../src/components/ofs-mans-blocks/ofs-mans-blocks-component.js';
import { OfsMansInfoComponent } from '../src/components/ofs-mans-info/ofs-mans-info-component.js';
import { OurFaithfulStaffComponent } from '../src/components/our-faithful-staff/our-faithful-staff-component.js';
import { ReviewStarComponent } from '../src/components/review-star/review-star-component.js';
import { ReviewStarListComponent } from '../src/components/review-star-list/review-star-list-component.js';
import { ReviewAuthorImgComponent } from '../src/components/review-author-img/review-author-img-component.js';
import { ReviewAuthorNameComponent } from '../src/components/review-author-name/review-author-name-component.js';
import { ReviewAuthorComponent } from '../src/components/review-author/review-author-component.js';
import { ReviewBlockComponent } from '../src/components/review-block/review-block-component.js';
import { ReviewBlockListComponent } from '../src/components/review-block-list/review-block-list-component.js';
import { ReviewHeaderBotTextComponent } from '../src/components/review-header-bot-text/review-header-bot-text-component.js';
import { ReviewHeaderComponent } from '../src/components/review-header/review-header-component.js';
import { ReviewComponent } from '../src/components/review/review-component.js';
import { FooterHeaderComponent } from '../src/components/footer-header/footer-header-component.js';
import { FooterLogoBlockComponent } from '../src/components/footer-logo-block/footer-logo-block-component.js';
import { FooterItemComponent } from '../src/components/footer-item/footer-item-component.js';
import { FooterNavigationListComponent } from '../src/components/footer-navigation-list/footer-navigation-list-component.js';
import { FooterNavigationBlockComponent } from '../src/components/footer-navigation-block/footer-navigation-block-component.js';
import { FooterInfoButtonsComponent } from '../src/components/footer-info-buttons/footer-info-buttons-component.js';
import { FooterInfoNavigationComponent } from '../src/components/footer-info-navigation/footer-info-navigation-component.js';
import { FooterInfoComponent } from '../src/components/footer-info/footer-info-component.js';
import { FooterComponent } from '../src/components/footer/footer-component.js';

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    backgrounds: {
      default: "site",
      values: [
        {
          name: "site",
          value: "#fff"
        },
        {
          name: "brown",
          value: "#150A05"
        },
        {
          name: "orange",
          value: "#fc621c"
        }
      ]
    },
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
  SpanHeaderComponent,
  StickComponent,
  WcuAutoHeaderComponent,
  WcuAutoBlockComponent,
  WcuAutoComponent,
  WhyChooseUsComponent,
  InputTextComponent,
  CarSelectComponent,
  CarFormComponent,
  RacInfoComponent,
  RentACarComponent,
  CcwCarsTextComponent,
  CcwCarTopRightComponent,
  CcwCarsRightComponent,
  CcwCarsInfoComponent,
  ComfortableCarWhiteComponent,
  CcoBigComponent,
  CcoInfoBackAndTextComponent,
  CcoCarsInfoComponent,
  ComfortableCarOrangeComponent,
  OfsSpanWithPhoneComponent,
  OfsInfoContactComponent,
  OfsContactComponent,
  OfsMansBlocksComponent,
  OfsMansInfoComponent,
  OurFaithfulStaffComponent,
  ReviewStarComponent,
  ReviewStarListComponent,
  ReviewAuthorImgComponent,
  ReviewAuthorNameComponent,
  ReviewAuthorComponent,
  ReviewBlockComponent,
  ReviewBlockListComponent,
  ReviewHeaderBotTextComponent,
  ReviewHeaderComponent,
  ReviewComponent,
  FooterHeaderComponent,
  FooterLogoBlockComponent,
  FooterItemComponent,
  FooterNavigationListComponent,
  FooterNavigationBlockComponent,
  FooterInfoButtonsComponent,
  FooterInfoNavigationComponent,
  FooterInfoComponent,
  FooterComponent,
].map((component) => customElements.define(component.name, component));

export default preview;
