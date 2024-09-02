import "./App.css";

import NAMES from "./components/data.json";
import {useState, useTransition} from 'react'

// import { PostList } from "./components/PostList";
// import { PostForm } from "./components/PostForm";

// import { Form } from "./components/Form";
// import './appStyles.css'
// import styles from './appStyles.module.css'
// import { Inline } from "./components/Inline";
// import { Stylesheet } from "./components/Stylesheet";

// import { Greet } from "./components/Greet";
// import { Message } from "./components/Message";
// import { ClickHandler } from "./components/ClickHandler";
// import { ParentComponent } from "./components/ParentComponent";
// import { UserGreeting } from "./components/UserGreeting";
// import { NameList } from "./components/NameLisr";

// import CounterWithHooks from "./components/UsingHooks";
// import CounterWithoutHooks from "./components/WithoutHooks";
// D:\Erfan_project\Programming\01_MyFreshStart\WebDevelopmentCrashCourses\08_React18FundamentalsCrashCourse\react-demo\src\components\UsingHooks.js

function App() {
  const [query, setQuery] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [isPending, startTransition] = useTransition()
  const changeHandler = (event) => {
    setInputValue(event.target.value)
    startTransition(()=> setQuery(event.target.value))
  }
  const filteredNames = NAMES.filter((item => {
    return item.first_name.includes(query) || item.last_name.includes(query)
  })
  )
  return (
    <div className="App">
      <input type="text" value={inputValue} onChange={changeHandler}/>
      {isPending&& <p>Updating list ...</p>}
      {filteredNames.map((item) => (
        <p key={item.id}>
          {item.first_name} {item.last_name}
        </p>
      ))}

      {/* <Greet name='Ali' heroName='Lionel Messi' />
      <Greet name='Reza' heroName='C.Ronaldo' >
        <button>Action</button>
      </Greet>
      <Greet name='Mohammad' heroName='Tylor Swift'> 
        <p>This is children props</p>
      </Greet> */}
      {/* <Message></Message> */}
      {/* <ClickHandler/> */}

      {/* <ParentComponent/> */}
      {/* <UserGreeting></UserGreeting> */}
      {/* <NameList></NameList> */}
      {/* <Stylesheet></Stylesheet> */}
      {/* <Inline></Inline>
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1> */}
      {/* <Form></Form> */}

      {/* <h1>Counter Example</h1> */}
      {/* Render the CounterWithHooks component */}
      {/* <CounterWithHooks /> */}
      {/* Render the CounterWithoutHooks component */}
      {/* <CounterWithoutHooks /> */}

      {/* <PostForm />
      <PostList></PostList> */}
    </div>
  );
}

export default App;



// import "./App.css";
// import NAMES from "./components/data.json";
// import { useState } from 'react';

// function App() {
//   const [query, setQuery] = useState('');

//   const changeHandler = (event) => {
//     setQuery(event.target.value);
//   };

//   const filteredNames = NAMES.filter((item) => {
//     return item.first_name.includes(query) || item.last_name.includes(query);
//   });

//   return (
//     <div className="App">
//       <input type="text" value={query} onChange={changeHandler} placeholder="Search..." />
//       {filteredNames.map((item) => (
//         <p key={item.id}>
//           {item.first_name} {item.last_name}
//         </p>
//       ))}
//     </div>
//   );
// }

// export default App;
