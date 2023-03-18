import './About.css'

const About = () => {
    return(
        <section className="about">
            <p>
            We use Stock Ticker search lookup API. Search stocks that are in our API by company name or ticker. You can also use the exchange filter to narrow down your results. Company name, currency, and exchange are some of the fields that are returned by API.
            </p>
            <p>
            Stock screener is a more advanced way to search for stocks as there are numerous parameters such as market cap, price, volume, beta, and so on. For example, you can use this endpoint to find NASDAQ-listed software companies that pay dividends and have good liquidity.
            </p>
        </section>
    )
}

export default About