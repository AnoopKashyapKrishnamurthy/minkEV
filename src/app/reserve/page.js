'use client';

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ReserveMink from "../components/utils/ReserverMink";

export default function ReserveNowPage() {
    return (
      <div>
        <div><Navbar></Navbar></div>
        <div><ReserveMink></ReserveMink></div>
        <div><Footer></Footer></div>
      </div>
    );
  }