import "./App.css";
import axios from 'axios'
import Header from './components/ui/Header'
import Search from './components/ui/Search'
import CharacterGrid from './components/characters/CharacterGrid'
import React, {useState, useEffect} from "react";

const App = () => {
  // eslint-disable-next-line
  const [items, setItems] = useState([]);
  // eslint-disable-next-line
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    // eslint-disable-next-line
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      setItems(result.data);
      setIsLoading(false)
    };
    fetchItems()
  }, [query]);
  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => {setQuery(q)}}/>
      <CharacterGrid isLoading={isLoading} items={items}/>
    </div>
  );
};

export default App;
