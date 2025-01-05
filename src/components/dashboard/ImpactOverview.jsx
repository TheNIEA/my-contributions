import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

export const ImpactOverview = ({ metrics }) => {
  return (
    <Card className="bg-neutral-800 border-neutral-700">
      <CardContent className="pt-6">
        <h2 className="text-lg font-semibold mb-4 text-white">Impact Overview</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <p className="text-neutral-400">Positive Interactions</p>
            <p className="text-white">{metrics.positiveInteractions}</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-neutral-400">Community Contributions</p>
            <p className="text-white">{metrics.communityContributions}</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-neutral-400">Trust Score</p>
            <p className="text-white">{metrics.trustScore}%</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};