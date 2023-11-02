import React from "react";
import ContactUsMain from "@/components/ContactUs/Main";


const ProductTrial = ({ children }) => {
  return (
    <ContactUsMain
      title="Start Your Free Trial"
      desc="Try out our product flow to build your own credit portal. "
      type="TRY_DEMO"
      btnText="Apply"
    />
  );
};
export default ProductTrial;
