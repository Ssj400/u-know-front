import Navbar from "@/components/navbar";
import React from "react";
import WelcomeWidget from "@/components/widgets/welcome-widget";
import QuickActionsWidget from "@/components/widgets/quick-actions-widget";
import RecentActivityWidget from "@/components/widgets/recent-activity-widget";
import UserWidget from "@/components/widgets/user-widget";

const DashboardPage = () => {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <WelcomeWidget />
            <RecentActivityWidget />
          </div>
          <div className="space-y-8">
            <UserWidget />
            <QuickActionsWidget />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
