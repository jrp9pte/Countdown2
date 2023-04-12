import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [vegetarian, setState] = useState(false);

  const items = {
  "breakfast": [
    {"food": "pancakes", "price": 5.00, "vegetarian": true},
    {"food": "waffles", "price": 5.00, "vegetarian": true},
    {"food": "orange juice", "price": 2.00, "vegetarian": true}
  ],
  "lunch": [
    {"food": "turkey sandwich", "price": 8.00, "vegetarian": false},
    {"food": "grilled cheese", "price": 6.00, "vegetarian": true},
    {"food": "hamburger", "price": 8.00, "vegetarian": false}
  ],
  "dinner": [
    {"food": "chicken alfredo", "price": 10.00, "vegetarian": false},
    {"food": "tofu stir-fry", "price": 9.00, "vegetarian": true},
    {"food": "chili", "price": 8.00, "vegetarian": false}
  ]
};

const breakfast = { 
  [
    {"food": "pancakes", "price": 5.00, "vegetarian": true},
    {"food": "waffles", "price": 5.00, "vegetarian": true},
    {"food": "orange juice", "price": 2.00, "vegetarian": true}
  ]
}


let onButtonClick = false;
  return (
    <>
      <div className="Menu">
      <h1 className="Menu-header">
        <p>
          Menu
        </p>
      </h1>

      <button className='buttonVEG'  onClick={onButtonClick}>
        Show Only Vegetarian
      </button>

      <h2 className='Breakfast'>
        Breakfast
        {breakfast.map((element, index) => (
          <Item
            name={"ietm " + element.food}
            price={"button" + element.price}
            isVegatarian={element.vegetarian}
          />
        
      ))} 

      </h2>


      <h2  className= 'Lunch'>
        Lunch
        <Item          />
      </h2>

      <h2>
        Dinner
        <Item          />
        </h2>
    </div>
    </>
  );
}
function Item(props){
  
  return( 
    <> 
    {props.item}
    </>
  )
};

function ProductRow({ props}) {
  const name = items.vegetarian ? items :
    <span style={{ color: 'red' }}>
      {items.food}
    </span>;
  return (
    <tr>
      <td>{props.tem}</td>
      <td>{name.price}</td>
    </tr>
  );
}

export default App;
