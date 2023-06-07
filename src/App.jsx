import { useState,useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [quotes, setQuotes] = useState('');
  const [isLoading, setIsLoading] = useState(false);
      const quotes_url = "https://dummyjson.com/quotes";

      useEffect(()=>{
          const fetchData = async()=>{
            try{
              const fetchData = await fetch(quotes_url);
              const jsonData = await fetchData.json();
              const data = await jsonData;
              
              setData(data);
            
            }catch(err){
              console.error(err)
            }
        }
        fetchData();
      },[])

      const generateQuotes=()=>{
        setIsLoading(true)

        setTimeout(()=>{
          const random = Math.floor(Math.random() * data.quotes.length)
          const randomQuotes = data.quotes[random]
          setQuotes(randomQuotes);
          setIsLoading(false)
        },2000)
      }
      
  return (
        <div className="card-container">
            <div className="quotes">
              <h1>{`" ${quotes.quote === undefined ? "Click the button, senpai!" : quotes.quote} "`}</h1>
              <h4>{`-${quotes.author === undefined ? "" : quotes.author}`}</h4>
            </div>
            <div className="buttons">
                <button className="generateBtn" onClick={generateQuotes}><span><i className="fa-solid fa-rotate-right" id={isLoading ? "rotate" : ""}></i></span> Generate</button>
                <button className="copyBtn"><span><i className="fa-solid fa-copy"></i></span> Copy</button>
            </div>
        </div>
  )
}

export default App
