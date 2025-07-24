"use client";

import Navbar from "@/components/navbar";
import React from "react";
import WelcomeWidget from "@/components/widgets/welcome-widget";
import QuickActionsWidget from "@/components/widgets/quick-actions-widget";
import RecentActivityWidget from "@/components/widgets/recent-activity-widget";
import UserWidget from "@/components/widgets/user-widget";
import { useAuthRedirect } from "@/hooks/useAuthRedirect";
import { LastPostWidget } from "@/components/widgets/last-post-widget";

const DashboardPage = () => {
  useAuthRedirect()

  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <div
              className="animate-fade-in-slide-up"
              style={{ animationDelay: "100ms" }}
            >
              <WelcomeWidget />
            </div>
            <div
              className="animate-fade-in-slide-up"
              style={{ animationDelay: "200ms" }}
            >
              <RecentActivityWidget />
            </div>
          </div>
          <div className="space-y-8">
            <div
              className="animate-fade-in-slide-up"
              style={{ animationDelay: "300ms" }}
            >
              <UserWidget />
            </div>
            <div
              className="animate-fade-in-slide-up"
              style={{ animationDelay: "400ms" }}
            >
              <QuickActionsWidget />
            </div>
            <div
              className="animate-fade-in-slide-up"
              style={{ animationDelay: "500ms" }}
            >
              <LastPostWidget />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
