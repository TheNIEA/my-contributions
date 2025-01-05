import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

export const ImpactMetrics = ({ data }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Card className="bg-neutral-800 border-neutral-700 p-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-neutral-400">Total Impact</p>
            <p className="text-2xl font-bold text-white">{data.totalImpact || "2,458"}</p>
          </div>
          <div className="p-2 rounded-full bg-green-500 bg-opacity-20">
            <TrendingUp className="h-5 w-5 text-green-500" />
          </div>
        </div>
      </Card>
      <Card className="bg-neutral-800 border-neutral-700 p-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-neutral-400">UBI Balance</p>
            <p className="text-2xl font-bold text-white">
              ${data.ubiBalance?.usd || "1,240"} / {data.ubiBalance?.uit || "603,499"} UIT
            </p>
          </div>
          <div className="p-2 rounded-full bg-blue-500 bg-opacity-20">
            <TrendingUp className="h-5 w-5 text-blue-500" />
          </div>
        </div>
      </Card>
    </div>
  );
};