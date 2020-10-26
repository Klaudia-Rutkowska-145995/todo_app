import React, { useState, useEffect } from 'react';
import { Row, Col, Card, PageHeader, message } from "antd";

import AddTodoForm from '../../components/AddTodoForm';
import TodoList from "../../components/TodoList";

import { todosRef } from '../../firebase';

const TodosContainer = () => {
    const [todos, setTodos] = useState([]);

    const handleFormSubmit = (todo) => {
        let newTodo = todosRef.push();

        todo.id = newTodo.key;

        newTodo.set(todo);

        message.success('Todo added!');
    }

    const handleTodoRemove = (todo) => {
        todosRef.child(todo.id).remove();

        message.warn('Todo removed!');
    }

    const handleTodoToggle = (todo) => {
        todosRef.child(todo.id).set({ ...todo, completed: !todo.completed });

        message.info('Todo toggled!');
    }

    useEffect(() => {
        todosRef.on('value', (snapshot) => {
            let items = snapshot.val();
            let newState = [];

            for (let item in items) {
                newState.push({
                    id: item,
                    name: items[item].name,
                    completed: items[item].completed
                })
            }

            setTodos(newState);
        });
    }, [])

    return (
        <Row
            justify="center"
            align="middle"
            gutter={[0, 16]}
            style={{ margin: 0, paddingTop: 10 }}
        >
            <Col
                xs={22}
                sm={23}
                md={21}
                lg={20}
                xl={18}
            >
                <PageHeader
                    title="Add Todo"
                    subTitle="To add a todo, just fill the form below and click in add todo."
                    ghost={false}
                />
            </Col>

            <Col
                xs={22}
                sm={23}
                md={21}
                lg={20}
                xl={18}
            >
                <AddTodoForm onFormSubmit={handleFormSubmit} />
            </Col>

            <Col
                xs={22}
                sm={23}
                md={21}
                lg={20}
                xl={18}
            >
                <Card title="Todo List">
                    <TodoList onTodoRemove={handleTodoRemove} onTodoToggle={handleTodoToggle} todos={todos} />
                </Card>
            </Col>
        </Row>
    );
}

export default TodosContainer;