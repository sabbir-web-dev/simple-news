import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import News from "./components/news/News";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";

function App() {
  const [news, setNews] = useState(null);
  const [isLodding, setIsLodding] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const url =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=8407d7b500094eb290866adedb96213b";

    fetch(url)
      .then((res) =>{
        if(!res){
          throw Error('Data is not Load..');
        }
        else{
          return res.json();
        }
      })
      .then((data) => {
        setNews(data.articles);
        setIsLodding(false);
        setError(false);
      })

      .catch((err) =>{
        setError(err.message);
        setIsLodding(false);
        setNews(null);
      });
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
