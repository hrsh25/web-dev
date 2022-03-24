import React from "react";
import Classes from "./classes";
import {Link} from "react-router-dom";
import Styles from "./styles"
import ConditionalOutput from "./conditional-output";
import TodoItem from "./todo/todoitem"
import TodoList from "./todo/todolist"
const Index = () => {
    return(
        <>
            <h1>Labs</h1>
            <Link to="/hello">
                Hello
            </Link> |
            <Link to="/tuiter/home">
                Tuiter
            </Link>
            <TodoList/>
            <TodoItem/>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
        </>
    )
};
export default Index;