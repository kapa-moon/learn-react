import React from 'react';
// import { ReactDOM } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import CreateNewTeam from './component/CreateNewTeam';
import Home from './component/Home';
import Group from './component/Group';
import { Link } from 'react-router-dom';
import Selector from './component/Selector';
import Pumpkin from './pumpkin.png';
// import Soup from './component/soup.svg';
// import { ReactComponent as ReactLogo } from '.component/soup.svg';

function App() {

  return (
    <div className='App max-h-screen flex justify-center min-w-screen md: max-w-800'>
      <div className='m-10'>

        <Link to='/'>
          <img src={Pumpkin} className='w-12 h-12'></img>
        </Link>

        <SearchBar></SearchBar>
        {/* <div className='selectors flex justify-between h-20'>
          <Link to='/group' className='text-xl '>Recommend</Link>
          <Link to='/group' className='text-xl '>Group List</Link>
          <Link to='/group' className='text-xl '>Go!</Link>
        </div> */}
        {/* <div className='flex justify-between h-20 pt-2'>
          <Selector path='/recommend' page="Recommend"></Selector>
          <Selector path='/group' page="Group List"></Selector>
          <Selector path='/go' page="Go!"></Selector>
        </div> */}
        <Selectors></Selectors>

        <div className='routes h-2/3'>
          <Routes>
            <Route path='/' element={<CreateNewTeam />} />
            <Route path='/home' element={<Home />} />
            <Route path='/learn-react/group' element={<Group />} />
          </Routes>
        </div>

      </div>
    </div >

  );
}

const Selectors = () => {
  return (
    <div className='flex justify-between h-20 pt-2'>
      <Selector path='/learn-react/recommend' page="Recommend"></Selector>
      <Selector path='/learn-react/group' page="Group List"></Selector>
      <Selector path='/learn-react/go' page="Go!"></Selector>
    </div>
  );
}


// DETACH SEARCH BAR FROM APP.JS
const SearchBar = () => {
  return (
    <div className='flex justify-center pt-5 pb-4'>
      <div className='flex justify-center items-center w-full h-12 bg-white rounded-xl ring-2 ring-primary'>
        <input className='w-4/5 h-10 bg-white rounded-xl border-primary text-md focus:outline-none' type='search' placeholder='I have a place in mind' />
        <div className='p-2'>
          <svg className='w-6 h-6 text-gray-500 text-primary' fill='none' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' viewBox='0 0 24 24' stroke='currentColor'>
            <path d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
          </svg>
        </div>
      </div>

    </div>
  );
}

export default App;
