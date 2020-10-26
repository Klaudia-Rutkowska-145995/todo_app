import React from 'react';
import { Tooltip, Tag, List, Button, Popconfirm, Switch } from 'antd';
import { CloseOutlined, CheckOutlined, DeleteFilled } from '@ant-design/icons';

const TodoItem = ({ todo, onTodoRemove, onTodoToggle }) => {
    return (
        <List.Item
            actions={[
                <Tooltip title={todo.completed ? 'Mark as uncompleted' : 'Mark as completed'}>
                    <Switch
                        checkedChildren={<CheckOutlined />}
                        unCheckedChildren={<CloseOutlined />}
                        onChange={() => onTodoToggle(todo)}
                        defaultChecked={todo.completed}
                    />
                </Tooltip>,
                <Popconfirm
                    title="Are you sure you want to delete?"
                    onConfirm={() => {
                        onTodoRemove(todo);
                    }}
                >
                    <Button type="primary" icon={<DeleteFilled />} shape="circle" size="small" danger />
                </Popconfirm>
            ]}
            key={todo.name}
        >
            <div>
                <Tag color={todo.completed ? 'green' : 'red'}>
                    {todo.name}
                </Tag>
            </div>
        </List.Item>
    )
}

export default TodoItem;