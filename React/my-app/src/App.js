import logo from "./logo.svg";
import "./App.css";
import { useState } from 'react';


// const [count, setCount] = useState(0);

// function handleClick() {
//   setCount(count + 1);
// }
// return (
//   <button onClick={handleClick}>
//     Clicked {count} times
//   </button>
// );



// const user = {
//   name: 'Hedy Lamarr',
//   imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
//   imageSize: 90,
// };

// const products = [
//   { title: 'Cabbage', isFruit: false, id: 1 },
//   { title: 'Garlic', isFruit: false, id: 2 },
//   { title: 'Apple', isFruit: true, id: 3 },
// ];

// const listItems = products.map(product =>
//   <li key={product.id} style={{
//     color: product.isFruit ? 'magenta' : 'red'
//   }}>{product.title}</li>
//   );

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  // const [count, setCount] = useState(0);

  // function handleClick() {
  //   setCount(count + 1);
  // }
  return (
    <>
      {/* <ul>{listItems}</ul> */}

      {/* <h1>{user.name}</h1>

    <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
    /> */}
      {/* <h1>About</h1>
      <p>Hello there.<br />How do you do?</p> */}

      {/* <button onClick={handleClick}>
        Clicked {count} times
        </button> */}

<div>
      <h1>Counters that update separately</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
    </>
  );

  function MyButton({ count, onClick }) {
  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );

  }

}

export default App;
