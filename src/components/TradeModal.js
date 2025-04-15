import React, { useState, useEffect } from 'react';
import '../styles/TradeModal.css';

const TradeModal = ({ isOpen, onClose, stock, type, onTrade }) => {
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(0);
  const [error, setError] = useState('');

  useEffect(() => {
    if (stock) {
      setTotal(quantity * stock.currentPrice);
      // Reset quantity when modal opens
      setQuantity(1);
      setError('');
    }
  }, [stock, isOpen]);

  useEffect(() => {
    if (stock) {
      setTotal(quantity * stock.currentPrice);
      
      // Validate quantity for sell operations
      if (type === 'sell' && quantity > stock.shares) {
        setError(`You can only sell up to ${stock.shares} shares`);
      } else {
        setError('');
      }
    }
  }, [quantity, stock, type]);

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    setQuantity(value);
    
    if (value <= 0) {
      setError('Quantity must be greater than 0');
    } else if (type === 'sell' && value > stock.shares) {
      setError(`You can only sell up to ${stock.shares} shares`);
    } else {
      setError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (quantity <= 0) {
      setError('Quantity must be greater than 0');
      return;
    }

    if (type === 'sell' && quantity > stock.shares) {
      setError(`You can only sell up to ${stock.shares} shares`);
      return;
    }

    onTrade({
      symbol: stock.symbol,
      name: stock.name,
      quantity: quantity,
      shares: quantity,
      price: stock.currentPrice,
      total: quantity * stock.currentPrice,
      type: type.toUpperCase()
    });

    // Reset form
    setQuantity(1);
    setError('');
    onClose();
  };

  if (!isOpen || !stock) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>&times;</button>
        <h2>{type === 'buy' ? 'Buy' : 'Sell'} {stock.symbol}</h2>
        
        <div className="stock-info">
          <div className="info-row">
            <span>Current Price:</span>
            <span className="price">₹{stock.currentPrice.toFixed(2)}</span>
          </div>
          {type === 'sell' && (
            <>
              <div className="info-row">
                <span>Average Buy Price:</span>
                <span>₹{stock.avgPrice.toFixed(2)}</span>
              </div>
              <div className="info-row">
                <span>Available Shares:</span>
                <span>{stock.shares}</span>
              </div>
            </>
          )}
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="quantity">Quantity</label>
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={handleQuantityChange}
              min="1"
              max={type === 'sell' ? stock.shares : undefined}
            />
          </div>

          <div className="trade-summary">
            <div className="info-row">
              <span>Total Amount:</span>
              <span className="total">₹{total.toFixed(2)}</span>
            </div>
          </div>

          {error && <div className="error-message">{error}</div>}

          <button 
            type="submit" 
            className={`trade-button ${type}`}
            disabled={quantity <= 0 || error !== ''}
          >
            {type === 'buy' ? 'Buy' : 'Sell'} {stock.symbol}
          </button>
        </form>
      </div>
    </div>
  );
};

export default TradeModal; 