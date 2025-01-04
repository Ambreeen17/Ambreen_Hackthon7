/* eslint-disable react/jsx-no-undef */
"use client"
import HomePage from "./HomePage/page";
import Detail from "./Detail/page";
import Category from "./Category/page";
import PaymentPage from "./PaymentPage/page";
import DetailedDashBoardPage from "./DetailedDashboardPage/page";

export default function Home() {
  return (
<div>
<HomePage/>
<Category/>
<Detail/>
<PaymentPage/>
<DetailedDashBoardPage/>

</div>
  );
}
