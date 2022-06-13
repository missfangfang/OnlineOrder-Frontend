import { Button, Form, Input, message } from "antd";
import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { login } from "../utils";

class LoginForm extends React.Component {
    state = {
        loading: false,
    };

    onFinish = (data) => {
        this.setState({
            loading: true,
        });
        login(data) // login定义在utils.js
            .then(() => {
                message.success(`Login Successful`);
                this.props.onSuccess();
            })
            .catch((err) => {
                message.error(err.message);
            })
            .finally(() => {
                this.setState({  // 不管怎么样都该把loading state变成false，不然会一直转圈圈
                    loading: false,
                });
            });
    };

    render = () => {
        return (
            <Form
                name="normal_login"
                onFinish={this.onFinish}
                style={{
                    width: 300,
                    margin: "auto",
                }}
            >
                <Form.Item
                    name="username"
                    // 必须填username，不然会出现message
                    rules={[{ required: true, message: "Please input your Username!" }]}
                >
                    <Input prefix={<UserOutlined />} placeholder="Username" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: "Please input your Password!" }]}
                >
                    <Input.Password prefix={<LockOutlined />} placeholder="Password" />
                </Form.Item>


                <Form.Item>
                    {/* 当用Form.Item包裹住Button的时候，并且button的htmlType为submit的时候，在点button的时候会trigger onFinish，然后form会被提交 */}
                    <Button type="primary" htmlType="submit" loading={this.state.loading}>
                        Login
                    </Button>
                </Form.Item>
            </Form>
        );
    };
}

export default LoginForm;