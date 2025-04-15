# V0 Implementation Request: Real-time Market Data Integration

## Current Implementation
The project currently uses static sample data for market visualization in `src/pages/MarketOverview.js`. We need to replace this with real-time market data.

## Requirements

### API Integration
1. Real-time market data for:
   - Nifty 50 index
   - Sensex index
   - Top gainers and losers
   - Market ticker data (USD/INR, Gold, Crude Oil)

### Technical Requirements
1. WebSocket implementation for live data updates
2. Candlestick chart data with OHLC values
3. Data refresh rate: Every 1 minute for indices, 5 minutes for market movers
4. Historical data support for charts (1D, 5D, 1M, 6M, 1Y views)

### Data Structure
```typescript
interface MarketData {
  timestamp: number;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

interface MarketMover {
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
  volume: number;
}
```

### Security & Performance
1. API key management using environment variables
2. Rate limiting handling
3. Error handling and fallback mechanisms
4. Data caching for better performance

### Suggested APIs
1. NSE India API (primary)
2. Alpha Vantage (backup)
3. Yahoo Finance API (alternative)

## Files to Modify
1. `src/pages/MarketOverview.js`
2. Create new files:
   - `src/services/marketDataService.js`
   - `src/hooks/useMarketData.js`
   - `src/utils/marketDataTransformers.js`

## Additional Context
- The project uses React.js with ApexCharts for visualization
- Current implementation is in `src/pages/MarketOverview.js`
- Need to maintain the existing UI while replacing data source 