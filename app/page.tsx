import { getAssets } from "@/services/coinCapService";
import Link from "next/link";
import { Asset } from "@/types/crypto";

export default async function Home() {
  const assets: Asset[] = await getAssets();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Cryptocurrency Prices</h1>
      <div className="grid gap-2">
        {assets.map((asset) => (
          <Link key={asset.id} href={`/assets/${asset.id}`} className="p-2 border-b flex justify-between hover:bg-gray-100">
            <span>{asset.name} ({asset.symbol})</span>
            <span className={parseFloat(asset.changePercent24Hr) >= 0 ? "text-green-500" : "text-red-500"}>
              {parseFloat(asset.priceUsd).toFixed(2)} USD
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}