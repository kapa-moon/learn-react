import logo from './logo.svg';
import './App.css';
import eat from './pic1.png';
import { NextUIProvider } from '@nextui-org/react';
import { Dropdown } from "@nextui-org/react";
import { createTheme, Button, Grid } from "@nextui-org/react";
import { Input } from '@nextui-org/react';



const theme = createTheme({
  type: "light", // it could be "light" or "dark"
  theme: {
    colors: {
      primary: "#0070f3",
      secondary: "#431a1a",
      gradient: 'linear-gradient(90deg, #ed8686, #ffd468)',
      link: '#5E1DAD',

      // you can also create your own color
      myColor: '#F29C6B'

      // ...  more colors
    },
    space: {},
    fonts: {}
  }
});

<NextUIProvider theme={theme}>
  <App />
</NextUIProvider>


function App() {
  return (

    <div className="App">
      <div className="eat-container">
        <img src={eat} alt="eat" />
      </div>
      <input type="text" placeholder="Join A Group" className="search rounded-lg border-2 border-yellow-400 w-4/5" />
      <button className='w-4/5 h-10 rounded-lg bg-yellow-100 text-orange-900 font-semibold border-red-900 text-center'>Create New Group</button>
      {/* <Input
        status="warning"
        width="50vw"
        disabled labelPlaceholder=" Enter Code to Join!" /> */}
      <Button bordered color="gradient" size="md" ghost>New Group</Button>
      <Dropdown>
        <Dropdown.Button flat color="secondary">Dropdown</Dropdown.Button>
        <Dropdown.Menu>
          <Dropdown.Item>Recommendations</Dropdown.Item>
          <Dropdown.Item>Chosen by Friends</Dropdown.Item>
        </Dropdown.Menu>

      </Dropdown>


      <NextUIProvider theme={theme}>
      </NextUIProvider>
    </div>
  );
}




export default App;

