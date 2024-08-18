import './App.css';
import react, {useState} from 'react';

// const products = [
//   { title: 'Cabbage', id: 1 },
//   { title: 'Garlic', id: 2 },
//   { title: 'Apple', id: 3 },
// ];

// const listsOfProducts = products.map(product => 
//   (
//     <li key = {product.id}> {product.title} </li>
//   )
// )

// for (const x of listsOfProducts){
//   console.log(x.length)
// }

// // console.log(listsOfProducts);


const MyButton = ({count, onClick}) => {

  return (
    <button onClick = {onClick}> Clicked {count} times</button>
  )
}

const MyButton2 = () => {
  const [state, setState] = useState(0);
  
  const incr = () => {
    setState(state+1);
  }
  return (
    <button onClick = {incr}> Clicked {state} times</button>
  )
}


function App() {
  const [state, setState] = useState(0);
  
  const incr = () => {
    setState(state+1);
  }
  return (
    <>
    Related Buttons! <br />
    <MyButton count = {state} onClick = {incr}/> <br />
    <MyButton count = {state} onClick = {incr}/> <br />
    Unrelated Buttons! <br />
    <MyButton2 /> <br />
    <MyButton2 /> <br />
    </>
    
  );
}

export default App;
