import './StockDetails.css'
import { AiOutlineRightCircle } from 'react-icons/ai';
import {BsBarChartLine } from "react-icons/bs";

const Stock = ({symbol, companyName, marketCap, beta, price, volume }) => {
    return(
        <section>
           <header>
                <div className="icon"><BsBarChartLine /></div>
                <h1 className="name">{companyName}</h1>
            </header>
      <div className="breakdown">
        <span>DATA BREAKDOWN</span>
      </div>
      <ul className='list'>
        <li className="item even">
          <span>SYMBOL</span>
          <span>
            {symbol}
            <span className="arrow"><AiOutlineRightCircle /></span>
          </span>
        </li>
        <li className="item odd">
          <span>MARKET CAP</span>
          <span>
            ${marketCap}
            <span className="arrow"><AiOutlineRightCircle /></span>
          </span>
        </li>
        <li className="item even">
          <span>BETA</span>
          <span>
            {beta}
            <span className="arrow"><AiOutlineRightCircle /></span>
          </span>
        </li>
        <li className="item odd">
          <span>PRICE</span>
          <span>
            ${price}
            <span className="arrow"><AiOutlineRightCircle /></span>
          </span>
        </li>
        <li className="item even">
          <span>VOLUME</span>
          <span>
            {volume}
            <span className="arrow"><AiOutlineRightCircle /></span>
          </span>
        </li>
      </ul>
        </section>
    )
}

export default Stock