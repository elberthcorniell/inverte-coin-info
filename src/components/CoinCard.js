import { formatNumber } from '../utils';

const CoinCard = ({
    name, image, symbol, index,
    currentPrice, marketCap,
}) => (<div className="gray-card" style={{
    position: 'relative',
    textAlign: 'center',
}}>
    <strong style={{
        position: 'absolute',
        top: 10,
        left: 10
    }}>{index + 1}</strong>
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
    }}>
        <strong>{name}</strong>
        {" "}
        <strong><span>{symbol}</span></strong>
    </div>
    <ul style={{
        textAlign: 'left',
        marginTop: 40,
    }}>
        <li>
            <strong style={{
                fontWeight: 300,
            }}>Price: </strong>
            <span>${formatNumber(currentPrice, 2)}</span>
        </li>
        <li>
            <strong style={{
                fontWeight: 300,
            }}>Market Cap: </strong>
            <span>${formatNumber(marketCap, 2)}</span>
        </li>
    </ul>
</div>)

export default CoinCard;