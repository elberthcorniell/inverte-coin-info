import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CoinCard from '../components/CoinCard';

const CoinList = () => {
  const coinList = useSelector(state => state.coins);
  const filter = useSelector(state => state.filter);
  return (
    <div className="grid-4">
      {coinList?.map(({
        id, symbol, name, image, current_price: currentPrice,
        market_cap: marketCap,
      }, index) => {
        if ((name.toLowerCase()).includes(filter.toLowerCase())) {
          return (
            <Link key={`${id}${symbol}`} to={`/coin/${id}`}> {/* Cannot read property 'range' of null eslint error */}
              <CoinCard
                key={`${id}${name}`}
                index={index}
                name={name}
                symbol={symbol}
                image={image}
                currentPrice={currentPrice}
                marketCap={marketCap}
              />
            </Link>
          );
        }
        return false;
      })}
    </div>
  );
};

export default CoinList;
