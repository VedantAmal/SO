import React from 'react';
import ReactApexChart from 'react-apexcharts';
import '../styles/MarketOverview.css';

const MarketOverview = () => {
  // Sample data for candlestick charts
  const niftySeries = [{
    data: [
      { x: new Date(2024, 0, 1), y: [19800, 20100, 19750, 20050] },
      { x: new Date(2024, 0, 2), y: [20050, 20350, 19900, 20300] },
      { x: new Date(2024, 0, 3), y: [20300, 20500, 20100, 20400] },
      { x: new Date(2024, 0, 4), y: [20400, 20600, 20200, 20550] },
      { x: new Date(2024, 0, 5), y: [20550, 20750, 20400, 20700] },
      { x: new Date(2024, 0, 8), y: [20700, 20900, 20600, 20850] },
      { x: new Date(2024, 0, 9), y: [20850, 21000, 20700, 20950] },
      { x: new Date(2024, 0, 10), y: [20950, 21100, 20800, 21050] },
      { x: new Date(2024, 0, 11), y: [21050, 21200, 20900, 21150] },
      { x: new Date(2024, 0, 12), y: [21150, 21300, 21000, 21250] },
      { x: new Date(2024, 0, 15), y: [21250, 21400, 21100, 21350] },
      { x: new Date(2024, 0, 16), y: [21350, 21500, 21200, 21450] },
      { x: new Date(2024, 0, 17), y: [21450, 21600, 21300, 21550] },
      { x: new Date(2024, 0, 18), y: [21550, 21700, 21400, 21650] },
      { x: new Date(2024, 0, 19), y: [21650, 21800, 21500, 21750] }
    ]
  }];

  const sensexSeries = [{
    data: [
      { x: new Date(2024, 0, 1), y: [65800, 66100, 65750, 66050] },
      { x: new Date(2024, 0, 2), y: [66050, 66350, 65900, 66300] },
      { x: new Date(2024, 0, 3), y: [66300, 66500, 66100, 66400] },
      { x: new Date(2024, 0, 4), y: [66400, 66700, 66200, 66600] },
      { x: new Date(2024, 0, 5), y: [66600, 66900, 66400, 66800] },
      { x: new Date(2024, 0, 8), y: [66800, 67100, 66600, 67000] },
      { x: new Date(2024, 0, 9), y: [67000, 67300, 66800, 67200] },
      { x: new Date(2024, 0, 10), y: [67200, 67500, 67000, 67400] },
      { x: new Date(2024, 0, 11), y: [67400, 67700, 67200, 67600] },
      { x: new Date(2024, 0, 12), y: [67600, 67900, 67400, 67800] },
      { x: new Date(2024, 0, 15), y: [67800, 68100, 67600, 68000] },
      { x: new Date(2024, 0, 16), y: [68000, 68300, 67800, 68200] },
      { x: new Date(2024, 0, 17), y: [68200, 68500, 68000, 68400] },
      { x: new Date(2024, 0, 18), y: [68400, 68700, 68200, 68600] },
      { x: new Date(2024, 0, 19), y: [68600, 68900, 68400, 68800] }
    ]
  }];

  const chartOptions = {
    chart: {
      type: 'candlestick',
      height: 350,
      background: 'transparent',
      theme: {
        mode: 'dark'
      },
      toolbar: {
        show: true,
        tools: {
          download: false,
          selection: true,
          zoom: true,
          zoomin: true,
          zoomout: true,
          pan: true,
          reset: true
        }
      }
    },
    title: {
      align: 'left',
      style: {
        color: '#e0e0e0'
      }
    },
    xaxis: {
      type: 'datetime',
      labels: {
        style: {
          colors: '#e0e0e0'
        }
      }
    },
    yaxis: {
      labels: {
        style: {
          colors: '#e0e0e0'
        },
        formatter: (value) => value.toFixed(2)
      },
      tooltip: {
        enabled: true
      }
    },
    grid: {
      borderColor: '#333',
      strokeDashArray: 5
    },
    plotOptions: {
      candlestick: {
        colors: {
          upward: '#00f962',
          downward: '#ff5a55'
        },
        wick: {
          useFillColor: true
        }
      }
    }
  };

  const topGainers = [
    { symbol: 'TATASTEEL', change: '+5.2%', price: '145.30', volume: '12.5M' },
    { symbol: 'HDFCBANK', change: '+3.8%', price: '1,678.45', volume: '8.2M' },
    { symbol: 'RELIANCE', change: '+2.9%', price: '2,456.70', volume: '15.7M' },
    { symbol: 'TCS', change: '+2.5%', price: '3,789.25', volume: '5.4M' },
    { symbol: 'INFY', change: '+2.1%', price: '1,567.90', volume: '7.8M' }
  ];

  const topLosers = [
    { symbol: 'BHARTIARTL', change: '-3.7%', price: '867.30', volume: '9.3M' },
    { symbol: 'SUNPHARMA', change: '-2.9%', price: '978.45', volume: '6.1M' },
    { symbol: 'WIPRO', change: '-2.6%', price: '456.70', volume: '11.2M' },
    { symbol: 'HCLTECH', change: '-2.3%', price: '1,234.25', volume: '4.8M' },
    { symbol: 'ITC', change: '-1.8%', price: '389.90', volume: '13.5M' }
  ];

  return (
    <div className="market-overview">
      <div className="market-ticker-strip">
        <div className="ticker-item">
          <span className="ticker-symbol">USD/INR</span>
          <span className="ticker-price">82.95</span>
          <span className="change negative">-0.15%</span>
        </div>
        <div className="ticker-item">
          <span className="ticker-symbol">GOLD</span>
          <span className="ticker-price">₹62,450</span>
          <span className="change positive">+0.32%</span>
        </div>
        <div className="ticker-item">
          <span className="ticker-symbol">CRUDE OIL</span>
          <span className="ticker-price">$75.25</span>
          <span className="change positive">+1.25%</span>
        </div>
      </div>

      <div className="main-indices">
        <div className="index-card nifty">
          <div className="index-header">
            <h2>NIFTY 50</h2>
            <span className="index-time">15:30 IST</span>
          </div>
          <div className="index-details">
            <div className="price-container">
              <div className="price">19,789.45</div>
              <div className="change-container">
                <div className="change positive">+145.30</div>
                <div className="change-percent positive">(+0.74%)</div>
              </div>
            </div>
            <div className="chart-preview">
              <ReactApexChart
                options={{
                  ...chartOptions,
                  title: { ...chartOptions.title, text: 'NIFTY 50' }
                }}
                series={niftySeries}
                type="candlestick"
                height={350}
              />
            </div>
          </div>
        </div>

        <div className="index-card sensex">
          <div className="index-header">
            <h2>SENSEX</h2>
            <span className="index-time">15:30 IST</span>
          </div>
          <div className="index-details">
            <div className="price-container">
              <div className="price">66,234.90</div>
              <div className="change-container">
                <div className="change positive">+432.65</div>
                <div className="change-percent positive">(+0.66%)</div>
              </div>
            </div>
            <div className="chart-preview">
              <ReactApexChart
                options={{
                  ...chartOptions,
                  title: { ...chartOptions.title, text: 'SENSEX' }
                }}
                series={sensexSeries}
                type="candlestick"
                height={350}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="market-movers-section">
        <div className="section-header">
          <h2>Market Movers</h2>
          <div className="market-status">
            <span className="status-indicator active"></span>
            Market Open
          </div>
        </div>
        
        <div className="movers-container">
          <div className="movers-card gainers">
            <div className="card-header">
              <h3>Top Gainers</h3>
              <span className="subtitle">NSE</span>
            </div>
            <div className="movers-list">
              <div className="list-header">
                <span>Symbol</span>
                <span>Price</span>
                <span>Change</span>
                <span>Volume</span>
              </div>
              {topGainers.map((stock, index) => (
                <div key={index} className="mover-item">
                  <span className="symbol">{stock.symbol}</span>
                  <span className="price">₹{stock.price}</span>
                  <span className="change positive">{stock.change}</span>
                  <span className="volume">{stock.volume}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="movers-card losers">
            <div className="card-header">
              <h3>Top Losers</h3>
              <span className="subtitle">NSE</span>
            </div>
            <div className="movers-list">
              <div className="list-header">
                <span>Symbol</span>
                <span>Price</span>
                <span>Change</span>
                <span>Volume</span>
              </div>
              {topLosers.map((stock, index) => (
                <div key={index} className="mover-item">
                  <span className="symbol">{stock.symbol}</span>
                  <span className="price">₹{stock.price}</span>
                  <span className="change negative">{stock.change}</span>
                  <span className="volume">{stock.volume}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketOverview; 