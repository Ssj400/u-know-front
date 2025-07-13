import Navbar from "@/components/navbar";
import React from "react";

const DashboardPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          
          <div className="bg-white p-4 rounded-lg shadow text-black">
            <h2 className="text-xl font-semibold mb-2 ">Widget 1</h2>
            <p>Widget content goes here.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow text-black">
            <h2 className="text-xl font-semibold mb-2">Widget 2</h2>
            <p>Widget content goes here.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow text-black">
            <h2 className="text-xl font-semibold mb-2">Widget 3</h2>
            <p>Widget content goes here.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
