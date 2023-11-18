import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import News from "./components/news/News";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";

function App() {
  const [news, setNews] = useState(null);
  const [isLodding, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = 'https://api.currentsapi.services/v1/latest-news?language=en&apiKey=6EFMeWybcuzW8PAc-XlhwIt9VkluIsfk3p36WKCEMP-UMKGG';
        const res = await fetch(url);
  
        if (!res.ok) {
          throw Error('Data is not loaded.');
        }
  
        const data = await res.json();
        setNews(data.news);
        setIsLoading(false);
        setError(false);
        console.log(data)
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
        setNews(null);
      }
    };
  
    fetchData();
  }, []);
  

  return (
    <div className="container">
      <Header news={news ? news.length : "0"}></Header>
      {isLodding && <p>Lodding..</p>}
      {error && <p>{error}</p>}
      <div className="conteiner">
        {news && news.map((news) => <News news={news} key={news.url}></News>)}
      </div>
    </div>
  );
}

export default App;
