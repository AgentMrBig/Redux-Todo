import styled from 'styled-components';

var appFontSize = 'font-size: 1.5rem';
var mainFont = `font-family: 'Acme', sans-serif;`;
var mainFontColor = 'color: #99b5e9';
var fieldBgColor = 'background-color: #565d69';

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
margin: 20px;
${appFontSize};
${mainFont};
${fieldBgColor};
`

const Button = styled.button`
margin-top: 0px;
margin-left: 20px;
margin-right: 20px;
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

const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
    height: 100px;
    width: 90%;
`

const AddTodoContainer = styled.div`
    display: flex;

`

export { ToDoMain, Header, InputContainer, ItemList, Input, Button, UL, LI, FooterContainer, AddTodoContainer }
