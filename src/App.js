import React, {useEffect, useState} from 'react';
import Header from './components/Header';
import Searchbar from './components/Searchbar';
import ShowGrid from './components/ShowGrid';
import SingleShow from './components/SingleShow';
import {Redirect, Route, Switch} from 'react-router-dom';

const App = () => {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState('marvel');
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true);
   fetch(`http://api.tvmaze.com/search/shows?q=${search}`)
	.then(res => res.json())
  .then(data =>{
    setItems(data);
    setLoading(false)
  }).catch((err) => {
    setLoading(false);
  })
  },[search])


  return (
      <div className="container">
            <Switch>
              <Route exact path="/" render={() => 
              <>
                <Header />
                <Searchbar setSearch={setSearch} />
              <ShowGrid  items={items} loading={loading}/>
              </>
            } /> 
              <Route path="/show/:id" component={SingleShow} />
              <Redirect to='/'/>
            </Switch>
      </div>
  )
}

export default App;