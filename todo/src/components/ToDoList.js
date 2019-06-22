import React, { Component } from 'react';
import styled from 'styled-components';

const ToDoMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: solid 1px red;
    width: 400px;
    height: 800px;
    
`

const Header = styled.div`
    border: solid 1px green;
    width: 400px;
    height: 100px;
`

const InputContainer = styled.div`
    border: solid 1px blue;
    width: 350px;
    height: 200px;
    margin-top: 10px;
`
const ItemList = styled.div`
    border: solid 1px purple;
    width: 350px;
    height: 100%;
    margin-top: 10px;
`

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <ToDoMain>
                <Header></Header>
                <InputContainer></InputContainer>
                <ItemList></ItemList>
            </ToDoMain>
        );
    }
}

