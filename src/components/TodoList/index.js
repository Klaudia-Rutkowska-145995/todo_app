import React from 'react';
import { List, Empty } from 'antd';

import TodoItem from '../TodoItem';

const TodoList = ({ todos, onTodoRemove, onTodoToggle }) => {
    return (
        <List
            locale={{
                emptyText: <Empty description="Todos not found" />
            }}
            dataSource={todos}
            renderItem={todo => (
                <TodoItem
                    todo={todo}
                    onTodoRemove={onTodoRemove}
                    onTodoToggle={onTodoToggle}
                />
            )}
            pagination={{
                position: "bottom",
                pageSize: 10
            }}
        >

        </List>
    )
}

export default TodoList;