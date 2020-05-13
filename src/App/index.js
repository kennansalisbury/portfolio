import React, {useEffect, useState} from 'react';
import './App.scss';
import Navbar from '../Partials/Navbar';
import Main from '../Main/index'

const App = props => {

  const [nav, setNav] = useState('')

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = e => {

    if(window.scrollY > 500) {
        setNav(<Navbar />)
    }
    else if(window.scrollY < 300) {
        setNav('')
    }
  }

  return (
    <div>
      {nav}
      <Main />
    </div>
  );
}

export default App;
