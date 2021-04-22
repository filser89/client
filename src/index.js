// eslint-disable-next-line
import React, { useState, useEffect } from "react"; // useState is React pre-built hook that  allows us to use state in function components, useEffect allows us to use Effects
import ReactDOM from "react-dom";

// Class component
// eslint-disable-next-line no-unused-vars
// class WelcomeMessage extends React.Component {
//   myName = "Sergey Filippov";
//   render() {
//     return <h1>Hello, {this.myName}</h1>;
//   }
// }

// function component

// function Welcome(props) {
//   // function components always return jsx
//   // props is an object of values passed into a component from outside
//   // props is a read-only. So it can't be changed
//   return (
//     <>
//       <h1>Welcome, {props.user}!</h1>
//       <p>{props.message}</p>
//     </>
//   );
// }

// const sergey = "Sergey Filippov";
// const juja = "Juja";
// const fifa = "Fifa";

// REACT HOOKS:
//Hooks docs: https://reactjs.org/docs/hooks-overview.html
// useState allows to use state.
// State is a set of vaiables within a function component.
// The default values of these vars are passed to the useState() as an argument.
// useState() returns an array [defauldValue, setterFunction]
// this array can be destructured as fallows:
// const [variable, setVariable] = useState(defaultValue)
// later the value of variable can be reset by passing a new value to a setter fuction
// setVariable(newValue)
// the function component will be re-rendered every time the value changes
// useEffect() is used in order to schedule function execution upon change of one of the state variables
// useEffect() takes 2 arguments: a function to execute, an array of dependencies
// Dependencies are the variables which useEffect will watch fo execution of a function
// If the array of dependancies is empty, the function will execute only once

// Uncomment the example below to see how hooks work

// function App() {
//   const [message, setMessage] = useState("Hello world");

//   useEffect(() => {
//     setTimeout(() => {
//       console.log("Updating");
//       setMessage(Math.random());
//     }, 2000);
//   }, []);
//   return (
//     // <> </> is a fragment. It is used to save several elements to 1 variable without creating a div
//     <>
//       {/* user is a property that will be passed to a component in a props object */}
//       <Welcome user={sergey} message={message} />
//       <Welcome user={juja} message={message} />
//       <Welcome user={fifa} message={message} />
//     </>
//   );
// }

// REACT EVENTS
// Events are simmilar to regular HTML DOM events but with camelCase and jsx syntax
// Below is the example of how to modify state of the component with evet handlers

// Uncomment the example below to see how hooks work

// function App() {
//   const [clicks, setClicks] = useState(0);

//   const onClick = () => {
//     setClicks(clicks + 1);
//   };
//   const onReset = () => {
//     setClicks(0);
//   };
//   return (
//     <>
//       <p> You clicked {clicks} times</p>
//       <button onClick={onClick}>Click</button>
//       <button onClick={onReset}>Reset</button>
//     </>
//   );
// }

// CONDITIONAL RENDERING:
// Rendering a copmonent within a component based on the value of state variable
// IF the value is TRUE => renders something
// Othervise doesn't render anything (if && is used) OR renders another thing (if ternary is used).

// Uncomment the example below to see how hooks work

// function App() {
//   const [showMessage, setShowMessage] = useState(false);

//   const onClick = () => {
//     setShowMessage(!showMessage);
//   };

//   return (
//     <>
//       <button onClick={onClick}>Click</button>
//       <p>
//         Use && when only one option{" "}
//         {showMessage && <Message message="Ni hao!" />}
//       </p>
//       <p>
//         Use ternary operator when only two options{" "}
//         {showMessage ? (
//           <Message message="Ni hao!" />
//         ) : (
//           <Message message="Zai jiang" />
//         )}
//       </p>
//     </>
//   );
// }

// function Message(props) {
//   return <p>{props.message}</p>;
// }

// Clock example with State annd Effect

// Uncomment the example below to see how it works

// function Clock() {
//   const [time, setTime] = useState(new Date().toLocaleTimeString());
//   useEffect(() => {
//     setInterval(() => {
//       setTime(new Date().toLocaleTimeString());
//       console.log("Updating");
//     }, 1000);
//   }, []);
//   return <p>It's {time}</p>;
// }

// function Hello(props) {
//   return <p>Hello, {props.name}</p>;
// }

// function App() {
//   return (
//     <>
//       <Clock time />
//       <Hello name="Juja" />
//     </>
//   );
// }

//  Rendering lists of data

// function Snippet(props) {
//   return <h1>{props.title}</h1>;
// }

// function App() {
//   const snippets = [
//     { title: "Snippet 1" },
//     { title: "Snippet 2" },
//     { title: "Snippet 3" },
//   ];

//   function renderSnippets() {
//     return snippets.map((e, i) => {
//       return <Snippet title={e.title} key={i} />;
//     });
//   }
//   return <>{renderSnippets()}</>;
// }

// FORMS IN REACT
// override efault form submit behavior with e.preventDefault()
// get the input value into the state of the component by setting the component state variables to the input value with onChange event (1)
// set the input value to the default state("") by assigning input  value to state variable (2)

// uncomment the example below to see the form example

// function App() {
//   const [formUsername, setFormUsername] = useState("");
//   const [formPassword, setFormPassword] = useState("");

//   function sendData(e) {
//     e.preventDefault();
//     console.log("sending data");

//     setFormUsername("");
//     setFormPassword("");
//   }

//   return (
//     <>
//       <form onSubmit={sendData}>
//         <input
//           type="text"
//           placeholder="username"
//           onChange={(e) => setFormUsername(e.target.value)} // (1)
//           value={formUsername} // (2)
//         ></input>
//         <input
//           type="password"
//           placeholder="password"
//           onChange={(e) => setFormUsername(e.target.value)} // (1)
//           value={formPassword} // (2)
//         ></input>
//         <button type="submit">Submit</button>
//       </form>
//     </>
//   );
// }

// Use cases of useEffect:

// uncomment the example below to see how it works

// function App() {
//   const [randomNumber, setRandomNumber] = useState(Math.random());
//   const [messageShown, setMessageShown] = useState(false);

//   // no second Argument. Function will be called on every update of the component

//   useEffect(() => {
//     console.log("No second argument => component update");
//   });

//   // empty dependancies (lets the function inside run only once)
//   useEffect(() => {
//     console.log("Empty dependencies array => component mount");
//     setInterval(() => {
//       setRandomNumber(Math.random);
//     }, 1000);
//   }, []);

//   // specific state variable in dependancy array
//   useEffect(() => {
//     console.log(
//       "specific state variable in dependancy array => specific state update"
//     );
//   }, [messageShown]);

//   return (
//     <>
//       <h1>{randomNumber}</h1>
//       <button onClick={() => setMessageShown(!messageShown)}>
//         Toggle message
//       </button>
//       {messageShown && <p>Some message</p>}
//     </>
//   );
// }

// Cleaning up with useEffect

function App() {
  const [messageShown, setMessageShown] = useState(false);

  // no second Argument. Function will be called on every update of the component

  return (
    <>
      <button onClick={() => setMessageShown(!messageShown)}>
        Toggle message
      </button>
      {messageShown && <Random />}
    </>
  );
}

function Random() {
  const [randomNumber, setRandomNumber] = useState(Math.random());
  // empty dependancies (lets the function inside run only once)
  useEffect(() => {
    console.log("Empty dependencies array => component mount");
    const intervalId = setInterval(() => {
      console.log();
      setRandomNumber(Math.random);
      console.log("setting new random number");
    }, 1000);
    // comment out the return open console and click the Toggle button several times to see what happens if cleanong up is not done
    return () => {
      console.log("Return of use effect => component unmount");
      clearInterval(intervalId);
    };
  }, []);
  return <h1>{randomNumber}</h1>;
}

ReactDOM.render(<App />, document.getElementById("root")); // this is what renders html
