import React from 'react';
import Layout from "@com/Layout/Layout";
import Home from '@/pages/Home';
import ProductTrial from "@/pages/ProductTrial";
import ContactUs from "@/pages/ContactUs";
import MobileMenu from "@/pages/MobileMenu";
import About from "@/pages/About";
import Unsubscribe from "@/pages/Unsubscribe";
import ConnectWallet from "@/pages/ConnectWallet";

const router = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "contactUs",
        element: <ContactUs />,
      },
      {
        path: "product-trial",
        element: <ProductTrial />,
      },
      {
        path: "mobileMenu",
        element: <MobileMenu />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "unsubscribe",
        element: <Unsubscribe />,
      },
    ],
  },
  {
    path: "/other",
    children: [{ path: "connectWallet", element: <ConnectWallet /> }],
  },
];

export default router;