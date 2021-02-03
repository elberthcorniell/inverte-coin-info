import useFecth from "../utils/useFetch";
import { API_BASE_URL } from '../config';
import CoinList from "../components/CoinList";
import SearchFilter from "../components/SearchFilter";
import { useDispatch } from 'react-redux';


const Home = () => {
    const dispatch = useDispatch();
    const handleFilterChange = e => {
        const { value: filter } = e.target;
        dispatch({
            type: 'CHANGE_FILTER',
            filter,
        });
    };
    const { data: coinList } = useFecth(`${API_BASE_URL}markets?vs_currency=usd&order=market_cap_desc`);
    if (coinList) {
        dispatch({
            type: 'SET_COINS',
            coins: coinList,
        });
        return (
            <>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}>
                    <h1>Top 100 Cryptocurrencies by Market Cap</h1>
                    <SearchFilter handleFilterChange={handleFilterChange} />
                </div>
                <CoinList />
            </>
        );
    }
    return (<div>Loading...</div>)
}

export default Home;