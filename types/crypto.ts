export interface Asset {        // Designed to match CoinCap asset endpoint
    id: string;                 // Unique identifier for the cryptocurrency (e.g., "bitcoin")
    rank: string;               // Market rank by market cap (e.g., "1" for Bitcoin)
    symbol: string;             // Trading symbol (e.g., "BTC")
    name: string;               // Full name of the cryptocurrency (e.g., "Bitcoin")
    supply: string;             // Current circulating supply
    maxSupply: string | null;   // Maximum supply possible (null if unlimited)
    marketCapUsd: string;       // Market capitalization in USD
    volumeUsd24Hr: string;      // 24-hour trading volume in USD
    priceUsd: string;           // Current price in USD
    changePercent24Hr: string;  // 24-hour price change percentage
    vwap24Hr: string;           // Volume Weighted Average Price over 24 hours
  }
  
  export interface AssetHistory {
    priceUsd: string;
    time: number;
    date: string;
  }
  
  export interface AssetsResponse {  // This is the response structure from CoinCap
    data: Asset[];
    timestamp: number;
  }
  
  export interface AssetHistoryResponse {
    data: AssetHistory[];
    timestamp: number;
  }
  
  export interface TimeInterval {
    label: string;
    value: string;              // Specific interval code for CoinCap
  }