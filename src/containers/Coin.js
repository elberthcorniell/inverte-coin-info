import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import useFecth from '../utils/useFetch';
import API_BASE_URL from '../config';
import CoinInfo from './CoinInfo';

function Coin() {
  const { coin } = useParams();
  const dispatch = useDispatch();
  const { data: coinData } = useFecth(`${API_BASE_URL}${coin}`);
  if (coinData) {
    dispatch({
      type: 'SET_COIN',
      coin: coinData,
    });
    return (
      <>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h1>
            {coinData?.name}
&nbsp;
            <span>
              (
              {coinData?.symbol}
              )
            </span>
          </h1>
          <a href="/" style={{ marginLeft: 20 }}>Go back</a>
        </div>
        <CoinInfo />
      </>
    );
  }
  return <div>Loading...</div>;
}

export default Coin;
