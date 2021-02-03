import { useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import { formatNumber, getChartData } from '../utils';
import { Line, Chart } from 'react-chartjs-2';
Chart.defaults.scale.gridLines.display = false;

const CoinInfo = () => {
    const coinData = useSelector(state => state.coin);
    const desc = useRef(null);
    const {
        name,
        symbol,
        categories,
        description: { en: description = '', } = {},
        tickers,
        image,
        links: {
            homepage: website,
            repos_url: reposUrl,
        } = {},
        market_data: {
            market_cap: { usd: marketCap } = {},
            circulating_supply: circulatingSupply,
            total_volume: { usd: totalVolume } = {},
            current_price: { usd: price } = {},
        } = {},
    } = coinData;
    useEffect(() => {
            desc.current.innerHTML = description;
    });
    return (
        <>
            <div className="grid-1-2">
                <div className="card">
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                        <img src={image.small} alt={name} className="coin-logo" />
                        <h2>${formatNumber(price, 2)}</h2>
                    </div>
                    <br />
                    <div style={{ marginTop: 20 }}>
                        <div className="gray-card property">
                            <strong>Market Cap</strong>
                            <strong><span>${formatNumber(marketCap, 2)}</span></strong>
                        </div>
                        <div className="gray-card property">
                            <strong>Circulating Supply</strong>
                            <strong><span>${formatNumber(circulatingSupply, 2)}</span></strong>
                        </div>
                        <div className="gray-card property">
                            <strong>Total Volume</strong>
                            <strong><span>${formatNumber(totalVolume, 2)}</span></strong>
                        </div>
                    </div>
                    <br />
                    <div>
                        {website?.map(link => {
                            if (link.length > 0)
                                return (
                                    <div className="gray-pill">
                                        <a href={link}>
                                            {link}
                                        </a>
                                    </div>);
                            return false;
                        }
                        )}
                        <div className="gray-pill">
                            Wallet:&nbsp;
                                <a href="https://inverte.io">
                                Inverte
                                </a>
                        </div>
                        {Object.keys(reposUrl)?.map(key => {
                            const url = reposUrl[key][0];
                            if (url)
                                return (
                                    <div className="gray-pill">
                                        <a href={url}>
                                            {key}
                                        </a>
                                    </div>);
                            return false;
                        })}
                        {categories?.map(category => (<div className="gray-pill">
                            {category}
                        </div>)
                        )}
                    </div>
                </div>
                <div>
                    <Line
                        options={{
                            responsive: true,
                            legend: {
                                display: false,
                            },
                            scales: {
                                xAxes: [
                                    {
                                        ticks: {
                                            display: false,
                                        },
                                    },
                                ],
                            },
                        }}
                        data={getChartData(tickers)}
                    />
                    <p className="gray-card" ref={desc} style={{ marginTop: 40 }}></p>
                </div>
            </div>
        </>
    );
}

export default CoinInfo;