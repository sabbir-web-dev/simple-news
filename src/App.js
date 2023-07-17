
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import News from './components/news/News';
import { useEffect, useState } from 'react';
import Header from './components/Header/Header';

function App() {

  const [news,setNews] = useState([]);

  useEffect(()=>{
    const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=8407d7b500094eb290866adedb96213b';

    fetch(url)
    .then(res=> res.json())
    .then(data=> { 
      setNews(data.articles)
    })

    .catch(err=> console.log(err))
    
  },[])

  return (
    <div className="container">
      <Header news={news}></Header>
      <div className="conteiner">
      {
        news.map(news=> <News news={news} key={news.url}></News>)
      }
      </div>

    </div>
  );
}

export default App;
