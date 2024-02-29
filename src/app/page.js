import SalesDataFetcher from "@/components/SalesDataFetcher";
import Header from "@/components/Header";
import Image from "next/image";
import RevenueDataFetcher from "@/components/RevenueDataFetcher";
import UserActivityData from "@/components/UserActivityData";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
    <Header />
    <SalesDataFetcher />
    <RevenueDataFetcher />
    <UserActivityData />
    <Footer />
    </>
  );
}
