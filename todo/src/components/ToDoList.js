import React, { Component } from 'react';
import styled from 'styled-components';
import store from '../store/index';

var appFontSize = 'font-size: 1.5rem';
var mainFont = `font-family: 'Istok Web', sans-serif`;
var mainFontColor = 'color: #99b5e9';
var fieldBgColor = 'background-color: #565d69';
// For holding temporary input, making sure there are 53 or less chars in input
var inputArray;

const ToDoMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    width: 400px;
    height: 800px;
    background-color: gray;
    `

const Header = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 400px;
    height: 100px;
    ${mainFontColor};
    ${mainFont};
    background-color: #808a9b;
    font-size: 2rem;
    border-bottom: solid 1px darkgray;
    border-radius: 5px 5px 0px 0px;
    `
const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    width: 350px;
    height: 200px;
    margin-top: 10px;
    padding: 20px;
    `

const ItemList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    background-color: #565d69;
    border-radius: 4px;
    width: 350px;
    height: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
    `

const Input = styled.input`
    height: 40px;
    width: 75%;
    border-radius: 5px;
    text-align: center;
    border:none;
    ${appFontSize};
    ${mainFont};
    ${fieldBgColor};
    `

const Button = styled.button`
    margin-top: 20px;
    height: 40px;
    ${appFontSize};
    ${mainFont};
    border-radius: 5px;
    border: none;

    background-color: #8bbbb3;
    `

const UL = styled.ul`
    margin-top: 10px;
    padding: 0;
    height: 100%;
    width: 100%;
    ${appFontSize};
    border-radius: 5px;
    border: none;
    `

const LI = styled.li`
    display: flex;
    justify-content: center;
    align-items:center;
    margin-top: 10px;
    height:40px;
    line-height: 20px;
    width: 90%;
    margin: auto;
    margin-top: 5px;
    margin-bottom: 5px;
    padding: 5px;

    ${appFontSize};
    ${mainFont};
    border-radius: 5px;
    border: none;
    color: black;
    background-color: lightskyblue;
    list-style-type: none;
    `


export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: '',
            todos: [],
            item: {
                value: 'Walk the dog.',
                completed: false
            }
        }
    }

    componentDidMount() {
        this.enterToSubmit();
    }

    handleUserInput(input) {
        var maxChars = 55;

        inputArray = input;
        if (inputArray.length > maxChars) {
            inputArray.split("");
            inputArray.slice(0, maxChars);
            inputArray.split(" ");
        }
        if (inputArray.length <= maxChars) {

            this.setState({
                userInput: inputArray
            }, () => console.log('handleUserInput', inputArray));
        }


    }

    addToList(input) {
        let todosArray = this.state.todos;

        if (this.validation()) {
            console.log('addToList ', input);
            console.log()
            todosArray.push(input);
            this.setState({
                todos: todosArray,
                userInput: ''
            });
        }

    }

    // boilerplate validation for checking empty input and/or unsupported chars
    validation() {

        var userInput = document.getElementById("todoInput").value;

        var emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (userInput === '') {
            alert("How are you gonna do Nothing?");
            return false;
        } else {
            return true;
        }

    }

    // Called in componentDidMount to set up Enter key as alternative todo submit 
    enterToSubmit() {
        // Get the input field
        var input = document.getElementById('todoInput');

        // Execute a function when the user releases a key on the keyboard
        input.addEventListener("keyup", function (event) {
            // Number 13 is the "Enter key on the keyboard"
            if (event.keyCode === 13) {
                // Cancel the default action, if needed
                event.preventDefault();
                // Trigger the button element with a click
                document.getElementById('todoButton').click();
            }
        })

    }

    render() {
        return (
            <ToDoMain>
                <Header>
                    Get It Done!
                </Header>
                <InputContainer>
                    <Input
                        onChange={(e) => {
                            this.handleUserInput(e.target.value)
                        }}
                        value={this.state.userInput}
                        type="text"
                        id="todoInput"
                    />
                    <Button
                        onClick={() => {
                            this.addToList(this.state.userInput)

                        }}
                        id="todoButton"
                    >
                        Gotta Do It
                    </Button>
                </InputContainer>
                <ItemList>
                    <UL>
                        {this.state.todos.map((val, key) => <LI key={key}>{val}</LI>)}
                    </UL>
                </ItemList>
            </ToDoMain>
        );
    }
}

