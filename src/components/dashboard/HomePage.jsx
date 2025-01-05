import React, { useEffect, useState } from 'react';
import { Bell } from "lucide-react";
import { ImpactMetrics } from './ImpactMetrics';
import { RecentActivity } from './RecentActivity';
import { ImpactOverview } from './ImpactOverview';
import { fetchUserDashboard } from '../../api/config';

export const HomePage = () => {
  const [dashboardData, setDashboardData] = useState({
    metrics: {
      totalImpact: 2458,
      ubiBalance: { usd: 1240, uit: 603499 },
      positiveInteractions: 847,
      communityContributions: 234,
      trustScore: 92
    },
    activities: [
      { title: 'Task Completed', description: 'Community Support', points: '+25 pts' },
      { title: 'Task Completed', description: 'Community Support', points: '+25 pts' },
      { title: 'Task Completed', description: 'Community Support', points: '+25 pts' }
    ]
  });

  useEffect(() => {
    const loadDashboardData = async () => {
      try {
        const data = await fetchUserDashboard();
        setDashboardData(data);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

    loadDashboardData();
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto p-4 min-h-screen bg-neutral-900">
      <div className="space-y-6 mb-20">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-white">Welcome to BHHI</h1>
            <p className="text-neutral-400">Your social impact dashboard</p>
          </div>
          <Bell className="h-6 w-6 text-neutral-400" />
        </div>

        <ImpactMetrics data={dashboardData.metrics} />
        <RecentActivity activities={dashboardData.activities} />
        <ImpactOverview metrics={dashboardData.metrics} />
      </div>
    </div>
  );
};

export default HomePage;