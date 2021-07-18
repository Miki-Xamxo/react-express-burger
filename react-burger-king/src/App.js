import axios from 'axios';
import React from 'react'
import { Route } from 'react-router';
import Header from './components/Header';
import Home from './pages/Home';

function App() {

  // React.useEffect(() => {
  //   async function fetchData(){
  //     const resp = await axios.get('/api/cart')
  //     console.log(resp)
  //   }

  //   fetchData()
  // }, [])


  return (
    <div className="wrapper">
      <Header />
      <div className='content'>
        <Route exact path='/' component={Home} />
      </div>
    </div>
  );
}

export default App;
