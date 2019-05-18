import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import SliderSection from "./slider/SliderSection";
import ReviewSection from "./ReviewSection";
export default function MyWorksPage() {
  return (
    <Fragment>
      <Helmet>Мои работы</Helmet>
      <SliderSection />
      <ReviewSection />
    </Fragment>
  );
}
