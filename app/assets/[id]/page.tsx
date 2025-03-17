import { getAsset } from "@/services/coinCapService";
import { Asset } from "@/types/crypto";
import Chart from "./chart";

export default async function AssetDetail({ params }: { params: { id: string } }) {
  const asset: Asset = await getAsset(params.id);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{asset.name} ({asset.symbol})</h1>
      <p>Market Cap: ${parseFloat(asset.marketCapUsd).toLocaleString()}</p>
      <p>Supply: {parseFloat(asset.supply).toLocaleString()}</p>
      <p>Price: ${parseFloat(asset.priceUsd).toFixed(2)}</p>
      <p className={parseFloat(asset.changePercent24Hr) >= 0 ? "text-green-500" : "text-red-500"}>
        24H Change: {parseFloat(asset.changePercent24Hr).toFixed(2)}%
      </p>
      <Chart assetId={params.id} />
    </div>
  );
}