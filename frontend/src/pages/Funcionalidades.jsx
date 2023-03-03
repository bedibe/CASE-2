import React from 'react';
import '../assets/css/Lista.css';
import TodoList from '../components/TodaLista';
import BootstrapCarousel from '../components/Carousel';

function App() {
  return (
    <div className='todo-app'>
      <TodoList />
      <BootstrapCarousel/>
    </div>
  );
}

export default App;
