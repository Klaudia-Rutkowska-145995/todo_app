import React, { useState } from 'react';
import { Row, Col, Card, PageHeader, message } from "antd";

import AddTodoForm from '../../components/AddTodoForm';
import TodoList from "../../components/TodoList";

const TodosContainer = () => {
    const [todos, setTodos] = useState([]);

    const handleFormSubmit = (todo) => {
        setTodos([...todos, todo]);

        message.success('Todo added!');
    }

    const handleTodoRemove = (todo) => {
        const array = [...todos];
        const index = array.indexOf(todo);

        if (index > -1) {
            array.splice(index, 1);
            setTodos(array);

            message.warn('Todo removed!');
        }
    }

    const handleTodoToggle = (todo) => {
        const array = [...todos];
        const index = array.indexOf(todo);

        if (index > -1) {
            array[index].completed = !array[index].completed;
            setTodos(array);

            message.info('Todo toggled!');
        }
    }

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