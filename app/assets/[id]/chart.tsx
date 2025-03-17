"use client";

import { useEffect, useState } from "react";
import { getAssetHistory } from "@/services/coinCapService";
import { AssetHistory, TIME_INTERVALS } from "@/types/crypto";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Button } from "@/components/ui/button";

export default function Chart({ assetId }: { assetId: string }) {
  const [history, setHistory] = useState<AssetHistory[]>([]);
  const [interval, setInterval] = useState("d1");

  useEffect(() => {
    async function fetchHistory() {
      try {
        const data = await getAssetHistory(assetId, interval);
        setHistory(data);
      } catch (error) {
        console.error("Error fetching history:", error);
      }
    }
    fetchHistory();
  }, [assetId, interval]);

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-2">Price History</h2>
      <div className="flex gap-2 mb-4">
        {TIME_INTERVALS.map((t) => (
          <Button key={t.value} onClick={() => setInterval(t.value)}>
            {t.label}
          </Button>
        ))}
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={history}>
          <XAxis dataKey="date" hide />
          <YAxis domain={["auto", "auto"]} />
          <Tooltip />
          <Line type="monotone" dataKey="priceUsd" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}