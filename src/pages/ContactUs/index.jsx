import React from "react";
import ContactUsMain from "@/components/ContactUs/Main";


const ProductTrial = ({ children }) => {
  return (
    <ContactUsMain
      title="Contact our Experts"
      desc="Contact us for more information and the option that is best for your project."
      type="CONTACT_US"
      btnText="Submit"
    />
  );
};
export default ProductTrial;
