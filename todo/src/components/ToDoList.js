// import React, { Component } from 'react';

// import * as Redux from 'redux';

// import { ToDoMain, Header, InputContainer, ItemList, Input, Button, UL, LI } from './ToDoListStyles';
// // For holding temporary input, making sure there are 53 or less chars in input
// var inputArray;


// /**
//  * REDUX START
//  */
// const reducer = Redux.combineReducers({
//     todos: (state = [], action) => {
//         const newState = Object.assign([], state);
//         if (action.type == 'add') {
//             newState.push(action.item);
//         }
//         if (action.type == 'complete') {
//             newState.splice(action.index, 1);
//         }
//         if (action.type == 'remove') {
//             newState.splice(action.index, 1);
//         }
//         return newState;
//     }
// });

// const store = Redux.createStore(reducer);

// const render = () => {
//     const container = document.getElementById('container');
//     container.innerHTML = '';
//     const state = store.getState();
//     state.todos.forEach((todo, i) => {
//         const e = document.createElement('div');
//         e.innerHTML = todo;
//         container.appendChild(e);
//         e.onclick = () => {
//             store.dispatch({
//                 type: 'remove',
//                 index: i
//             });
//             render();
//         }
//     });
// };

// function sendDataToStore(data) {
//     store.dispatch({
//         type: 'add',
//         item: data
//     });
// }
// // document.getElementById('submit-todo').onclick = () => {
// //     store.dispatch({
// //         type: 'add',
// //         item: document.getElementById('todo').value
// //     });
// //     render();
// // };


// /**
//  * REDUX END
//  */

// export default class extends Component {
//     constructor(props) {
//         super(props);
//     }

//     componentDidMount() {
//         this.enterToSubmit();
//     }

//     // keep track of user input and limit the amount of characters that 
//     // will be added to the inputArray.
//     handleUserInput(input) {
//         var maxChars = 55;

//         inputArray = input;
//         if (inputArray.length > maxChars) {
//             inputArray.split("");
//             inputArray.slice(0, maxChars);
//             inputArray.split(" ");
//         }
//         if (inputArray.length <= maxChars) {


//         }
//     }

//     addToList(input) {
//         var STATE = store.getState();

//         let todosArray = this.state.todos;

//         if (this.validation()) {
//             console.log('addToList ', input);
//             console.log()
//             todosArray.push(input);
//             this.setState({
//                 todos: todosArray,
//                 userInput: ''
//             });
//         }


//     }

//     // boilerplate validation for checking empty input and/or unsupported chars
//     validation() {
//         var userInput = document.getElementById("todoInput").value;

//         var emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//         if (userInput === '') {
//             alert("How are you gonna do Nothing?");
//             return false;
//         } else {
//             return true;
//         }

//     }

//     // Called in componentDidMount to set up Enter key as alternative todo submit 
//     enterToSubmit() {
//         // Get the input field
//         var input = document.getElementById('todoInput');

//         // Execute a function when the user releases a key on the keyboard
//         input.addEventListener("keyup", function (event) {
//             // Number 13 is the "Enter key on the keyboard"
//             if (event.keyCode === 13) {
//                 // Cancel the default action, if needed
//                 event.preventDefault();
//                 // Trigger the button element with a click
//                 document.getElementById('todoButton').click();
//             }
//         })

//     }

//     render() {
//         return (
//             <ToDoMain>
//                 <Header>
//                     Get It Done!
//                 </Header>
//                 <InputContainer>
//                     <Input
//                         onChange={(e) => {
//                             this.handleUserInput(e.target.value)
//                         }}
//                         value={this.state.userInput}
//                         type="text"
//                         id="todoInput"
//                     />
//                     <Button
//                         onClick={() => {
//                             this.addToList(this.state.userInput)

//                         }}
//                         id="todoButton"
//                     >
//                         Gotta Do It
//                     </Button>
//                 </InputContainer>
//                 <ItemList>
//                     <UL>
//                         {this.state.todos.map((val, key) => <LI key={key}>{val}</LI>)}
//                     </UL>
//                 </ItemList>
//             </ToDoMain>
//         );
//     }
// }

