import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStocks } from '../redux/Stocks/stocksSlice';
import { NavLink} from 'react-router-dom';
import './Stocks.css'
import { AiOutlineStock } from "react-icons/ai";
import { AiOutlineRightCircle } from 'react-icons/ai';
import { AiOutlineBarChart } from 'react-icons/ai';

const Stocks = () => {
    const dispatch = useDispatch()
    const stocksArray = useSelector((store) => store.stocks.stocks)
    const ifSucceed = useSelector((store) => store.stocks.ifSucceed)

    useEffect(() => {
        if(stocksArray.length === 0){
            dispatch(fetchStocks())
        }
    }, [dispatch, ifSucceed, stocksArray])

    return(
        <main>
                <section className='main-section'>
                    <div className='top-icon'>
                        <AiOutlineBarChart />
                    </div>
                    <div className='title'>
                        <div>
                            <h1 className='text'>TOTAL</h1>
                            <h1 className='value'>$23847</h1>
                        </div>
                    </div>
                </section>
                <section className='heading'>
                    STATS BY COMPANY
                </section>
                <section className='stocks'>
                    {stocksArray.map((stock) => 
                    <div className="stock">
                    <NavLink to={`stock/${stock.symbol}`} className="symbol">
                    <div className="topHalf">
                        <div className="icon">
                            <AiOutlineStock />
                        </div>
                        <div className="arrow">
                            <AiOutlineRightCircle />
                        </div>
                    </div>
                    <div className="bottomHalf">
                    {stock.symbol}
                    <br/>
                    ${stock.marketCap}
                    <br/>
                    </div>
                    </NavLink>
                    </div>
                    )}       
                </section>
        </main>
    )
}

export default Stocks