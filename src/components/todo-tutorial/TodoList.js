import React from "react";
import { useRecoilValue } from "recoil";
import { filteredTodoListState } from "../../recoil/todo-tutorial/selectors";
import TodoItem from "./TodoItem";
import TodoItemCreator from "./TodoItemCreator";
import TodoListFilters from "./TodoListFilters";

function TodoList() {
    const todoList = useRecoilValue(filteredTodoListState);

    return (
        <>
        <TodoListFilters />
        <TodoItemCreator />
        {todoList.map((todoItem) => (
            <TodoItem key={todoItem.id} item={todoItem} />
        ))}
        </>
    );
}

export default TodoList;