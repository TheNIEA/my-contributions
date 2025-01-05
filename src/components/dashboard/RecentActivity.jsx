import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Clock } from "lucide-react";

export const RecentActivity = ({ activities }) => {
  return (
    <Card className="bg-neutral-800 border-neutral-700">
      <CardContent className="pt-6">
        <h2 className="text-lg font-semibold mb-4 text-white">Recent Activity</h2>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-center justify-between py-3 border-b border-neutral-700">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-full bg-neutral-700">
                  <Clock className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-white">{activity.title}</p>
                  <p className="text-sm text-neutral-400">{activity.description}</p>
                </div>
              </div>
              <p className="text-green-500">{activity.points}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};