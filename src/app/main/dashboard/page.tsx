import Navbar from "@/components/navbar";
import React from "react";
import UserWidget from "@/components/widgets/user-widget";

const DashboardPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <UserWidget />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
