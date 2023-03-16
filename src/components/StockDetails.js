const Stock = ({symbol, companyName, marketCap, beta, price, volume }) => {
    return(
        <section>
            <h1>{companyName}</h1>
            <table>
                <tr>
                    <th>{companyName}</th>
                </tr>
                <tr>
                    <td>Symbol {symbol}</td>
                </tr>
                <tr>
                    <td>Market Cap {marketCap}</td>
                </tr>
                <tr>
                    <td>Beta {beta}</td>
                </tr>
                <tr>
                    <td>Price {price}</td>
                </tr>
                <tr>
                    <td>Volume {volume}</td>
                </tr>
            </table>
        </section>
    )
}

export default Stock