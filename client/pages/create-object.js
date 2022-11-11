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
        axios.post(`${MainApi}/api/object`, values)
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
                            title: "Obyekt qo'shish",
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
                                        label="Ummumiy"
                                        name="Ummumiy"
                                        rules={[{required: true, message: 'Iltimos ummumiyni kiriting!'}]}
                                    >
                                        <Input/>
                                    </Form.Item>
                                    <Form.Item
                                        label="Bino"
                                        name="Bino"
                                        rules={[{required: true, message: 'Iltimos binoni kiriting!'}]}
                                    >
                                        <Input/>
                                    </Form.Item>
                                    <Form.Item
                                        label="Qurilishni Boshlanish Sanasi"
                                        name="QurilishniBoshlanishSanasi"
                                        rules={[{
                                            required: true,
                                            message: 'Iltimos qurilishni boshlanish sanasi kiriting!'
                                        }]}
                                    >
                                        <Input type="date"/>
                                    </Form.Item>
                                    <Form.Item
                                        label="Qurilishni Bitish Sanasi"
                                        name="QurilishniBitishSanasi"
                                        rules={[{
                                            required: true,
                                            message: 'Iltimos qurilishni boshlanish sanasi kiriting!'
                                        }]}
                                    >
                                        <Input type="date"/>
                                    </Form.Item>
                                    <Form.Item
                                        label="Tip"
                                        name="Tip"
                                        rules={[{required: true, message: 'Iltimos tipni kiriting!'}]}
                                    >
                                        <Input type="number"/>
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
