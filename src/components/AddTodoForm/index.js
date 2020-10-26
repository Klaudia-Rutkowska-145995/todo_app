import React from 'react';
import { Form, Row, Col, Button, Input } from "antd";
import { PlusCircleFilled, QuestionCircleOutlined } from "@ant-design/icons";

const AddTodoForm = ({ onFormSubmit }) => {
    const [form] = Form.useForm();

    const onFinish = () => {
        onFormSubmit({
            name: form.getFieldValue('name'),
            
            completed: false,
        });

        form.resetFields();
    }

    return (
        <Form
            form={form}
            onFinish={onFinish}
            layout="horizontal"
        >
            <Row gutter={{ xs: 0, sm: 6, md: 12, lg: 18 }}>
                <Col xs={24} sm={12} md={12} lg={16} xl={18}>
                    <Form.Item
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: 'This field is required!',
                            }
                        ]}
                        style={{ marginBottom: 0 }}
                    >
                        <Input placeholder="What needs to be done?" prefix={<QuestionCircleOutlined />} />
                    </Form.Item>
                </Col>

                <Col xs={24} sm={12} md={12} lg={8} xl={6}>
                    <Button type="primary" htmlType="submit" icon={<PlusCircleFilled />} block>
                        Add todo
                    </Button>
                </Col>
            </Row>
        </Form>
    );
}

export default AddTodoForm;