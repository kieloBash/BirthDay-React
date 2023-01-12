import { useState } from 'react';
import './App.css';
import List from './components/List';
import Data from './Data';

function App() {
  const [people,setPeople] = useState(Data);
  return (
    <main>
      <section>
        <div className='container'>
          <h3>{people.length} Birthdays found</h3>
          <List people={people}/>
          <button onClick={() => setPeople([])}>Clear All</button>
        </div>
      </section>
    </main>

  );
}

export default App;
