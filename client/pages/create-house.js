import {Button, Form, Input} from 'antd';
import {Admin, Tabs} from "../components";
import {PlusCircleOutlined} from "@ant-design/icons";
import React, {useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import {MainApi} from "../api";

const CreateObject = () => {
    const [index, setIndex] = useState(0)
    const onFinish = (values) => {
        axios.post(`${MainApi}/api/bino`, values)
            .then(() => {
                toast.success("successfully saved object");
                console.log("success")
            }).catch(() => {
            toast.error("error");
        })
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const handleDelete = () => {

    }
    return (
        <div>
            <Admin>
                <Tabs
                    index={index}
                    setIndex={setIndex}
                    tabs={[
                        {
                            title: "Uy qo'shish",
                            content: (
                                <Form
                                    name="basic"
                                    initialValues={{remember: true}}
                                    onFinish={onFinish}
                                    onFinishFailed={onFinishFailed}
                                    autoComplete="off"
                                    layout="vertical"
                                    wrapperCol={{span: 16}}
                                >
                                    <Form.Item
                                        label="Nomi"
                                        name="Nomi"
                                        rules={[{required: true, message: 'Iltimos nomini kiriting!'}]}
                                    >
                                        <Input/>
                                    </Form.Item>

                                    <Form.Item
                                        label="Object"
                                        name="Object"
                                        rules={[{required: true, message: 'Iltimos Object kiriting!'}]}
                                    >
                                        <Input/>
                                    </Form.Item>
                                    <Form.Item
                                        label="Qavatliligi"
                                        name="Qavatliligi"
                                        rules={[{required: true, message: 'Iltimos Qavatliligini kiriting!'}]}
                                    >
                                        <Input type="number"/>
                                    </Form.Item>
                                    <Form.Item
                                        label="PodezlarSoni"
                                        name="PodezlarSoni"
                                        rules={[{
                                            required: true,
                                            message: 'Iltimos PodezlarSonini kiriting!'
                                        }]}
                                    >
                                        <Input type="number"/>
                                    </Form.Item>
                                    <Form.Item
                                        label="HonalarSoni"
                                        name="HonalarSoni"
                                        rules={[{
                                            required: true,
                                            message: 'Iltimos HonalarSonini kiriting!'
                                        }]}
                                    >
                                        <Input type="number"/>
                                    </Form.Item>
                                    <Form.Item
                                        label="Raqami"
                                        name="Raqami"
                                        rules={[{required: true, message: 'Iltimos Raqamini kiriting!'}]}
                                    >
                                        <Input type="number"/>
                                    </Form.Item>
                                    <Form.Item
                                        label="UmmumiyKvadrati"
                                        name="UmmumiyKvadrati"
                                        rules={[{required: true, message: 'Iltimos UmmumiyKvadratini kiriting!'}]}
                                    >
                                        <Input type="number"/>
                                    </Form.Item>
                                    <Form.Item
                                        label="Tip"
                                        name="Tip"
                                        rules={[{required: true, message: 'Iltimos tipni kiriting!'}]}
                                    >
                                        <Input/>
                                    </Form.Item>

                                    <Form.Item>
                                        <Button type="primary" htmlType="submit">
                                            Submit
                                        </Button>
                                    </Form.Item>
                                </Form>
                            ),
                        },
                    ]}
                />
            </Admin>
        </div>
    );
};

export default CreateObject;
