import { useState, useEffect} from 'react' //hook useState => method: getter + setter , useEffect(() => {transaction}, [dependency array]) => no second param => component (execute with rendering)    '[]' => only execute once   '[state]' => when it is changed, it would execute.

function App() {
  const [context, setContext] = useState({ name: ''});
  const [currencyData, setCurrencyData] = useState({
    currency: {},
    tours: [],
    specialsUrl: '',
    currencies: []
  })
  useEffect(() => {
    fetch('http://localhost:3001/api/context')
      .then(res => res.json())
      .then(data => setContext(data))  //promise from .then(res => res.json())
  }, [])

  useEffect(() => {
    fetch('http://localhost:3001/api/currency')
      .then(res => res.json())
      .then(data => setCurrencyData(data))
  }, [])

  const { name } = context;

  const {currency, tours, specialsUrl, currencies} = currencyData;

  return (
    <div style={{ padding: '30px', fontSize: '18px'}}>
      <h2>Hello, { name }</h2>  
      {/*Default escape */}
      <p dangerouslySetInnerHTML={{__html: `Hello, ${ name }!` }} /> 
      {/*no escape*/}
      <hr style={{margin:'30px 0'}} />

      {/*second part*/}
      <ul style={{listStyle: 'none', padding:0}}>
        {
          tours.map((item, index) => (
            <li key={index} style={{margin:'10px 0'}}>
              {item.name} - {item.price}
              {currencies && currencies.length > 0 && (
                <span> ({currency.abbrev})</span>
              )}
              {/*In JSX, in {} you can only write js expression instead of js statement, in {{}} you can write onject syntax */}
              {/*If true then execute the last one expression (with &&) to achieve if function */}
            </li>
          ))
        }
      </ul>
      {(!currencies || currencies.length === 0 ) && (
        <p>All prices in {currency.name}.</p>
      )}

      { specialsUrl? (
        <p>Check out our <a href={specialsUrl}>specials!</a></p>
      ) : (
        <p>Please check back often for specials.</p>
      )}
      {
        currencies && currencies.length>0 ? (
          currencies.map((item, index) => (
            <a key={index} href="#" className= "currency" style={{margin:'0 50px'}}>
              {item}
            </a>
          ))
        ) : (
          <span>Unfortunately, we currently only accept {currency.name}.</span>
        )
      }
 
    </div>
  )


  
}

export default App;
