import { Asset, AssetHistory, AssetsResponse, AssetHistoryResponse } from "@/types/crypto";

const COINCAP_API_BASE = "https://api.coincap.io/v2";

export async function getAssets(): Promise<Asset[]> {
  const response = await fetch(`${COINCAP_API_BASE}/assets?limit=50`);
  if (!response.ok) {
    throw new Error("Failed to fetch assets");
  }
  
  const data: AssetsResponse = await response.json();
  return data.data;
}

export async function getAsset(id: string): Promise<Asset> {
  const response = await fetch(`${COINCAP_API_BASE}/assets/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch asset with id: ${id}`);
  }
  
  const data = await response.json();
  return data.data;
}

export async function getAssetHistory(
  id: string,
  interval: string = "d1"
): Promise<AssetHistory[]> {
  const now = Date.now();
  const start = now - 30 * 24 * 60 * 60 * 1000; // Last 30 days
  
  const response = await fetch(
    `${COINCAP_API_BASE}/assets/${id}/history?interval=${interval}&start=${start}&end=${now}`
  );
  
  if (!response.ok) {
    throw new Error(`Failed to fetch history for asset with id: ${id}`);
  }
  
  const data: AssetHistoryResponse = await response.json();
  return data.data;
}