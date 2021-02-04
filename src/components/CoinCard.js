import PropTypes from 'prop-types';
import { formatNumber } from '../utils';

const CoinCard = ({
  name, image, symbol, index,
  currentPrice, marketCap,
}) => (
  <div
    className="gray-card"
    style={{
      position: 'relative',
      textAlign: 'center',
    }}
  >
    <strong style={{
      position: 'absolute',
      top: 10,
      left: 10,
    }}
    >
      {index + 1}
    </strong>
    <img
      src={image}
      alt={name}
      height={40}
      style={{
        border: 'none',
      }}
    />
    <div style={{
      margin: '10px 0',
    }}
    >
      <strong>{name}</strong>
      {' '}
      <strong><span>{symbol}</span></strong>
    </div>
    <ul style={{
      textAlign: 'left',
      marginTop: 40,
    }}
    >
      <li>
        <strong style={{
          fontWeight: 300,
        }}
        >
          Price:
        </strong>
        <span>
          $
          {formatNumber(currentPrice, 2)}
        </span>
      </li>
      <li>
        <strong style={{
          fontWeight: 300,
        }}
        >
          Market Cap:
        </strong>
        <span>
          $
          {formatNumber(marketCap, 2)}
        </span>
      </li>
    </ul>
  </div>
);

CoinCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  symbol: PropTypes.string,
  index: PropTypes.number,
  currentPrice: PropTypes.number,
  marketCap: PropTypes.number,
};

CoinCard.defaultProps = {
  name: '',
  image: '',
  symbol: '',
  index: 0,
  currentPrice: 0,
  marketCap: 0,
};

export default CoinCard;
