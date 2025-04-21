'use client';

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductBattery from "../components/utils/ProductBattery";
import ProductFeatures from "../components/utils/ProductFeatures";
import ProductInterior from "../components/utils/ProductInterior";
import ProductPage from "../components/utils/ProductPage";

export default function ReserveNowPage() {
    return (
      <div>
        <div><Navbar></Navbar></div>
        <div><ProductPage></ProductPage></div>
        <div id='features'><ProductFeatures></ProductFeatures></div>
        <div><ProductBattery></ProductBattery></div>
        <div><ProductInterior></ProductInterior></div>
        <div><Footer></Footer></div>
      </div>
    );
  }