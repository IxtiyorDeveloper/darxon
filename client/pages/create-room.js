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
        axios.post(`${MainApi}/api/honadon`, values)
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
                            title: "Xonadon qo'shish",
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
                                        label="Oshhona"
                                        name="Oshhona"
                                        rules={[{required: true, message: 'Iltimos Oshhonani kiriting!'}]}
                                    >
                                        <Input type="number"/>
                                    </Form.Item>
                                    <Form.Item
                                        label="MehmonHona"
                                        name="MehmonHona"
                                        rules={[{required: true, message: 'Iltimos MehmonHonani kiriting!'}]}
                                    >
                                        <Input type="number"/>
                                    </Form.Item>
                                    <Form.Item
                                        label="Yotohona"
                                        name="Yotohona"
                                        rules={[{
                                            required: true,
                                            message: 'Iltimos Yotohonani kiriting!'
                                        }]}
                                    >
                                        <Input type="number"/>
                                    </Form.Item>
                                    <Form.Item
                                        label="Balkon"
                                        name="Balkon"
                                        rules={[{
                                            required: true,
                                            message: 'Iltimos Balkonni kiriting!'
                                        }]}
                                    >
                                        <Input type="number"/>
                                    </Form.Item>
                                    <Form.Item
                                        label="Kirish"
                                        name="Kirish"
                                        rules={[{required: true, message: 'Iltimos Kirishni kiriting!'}]}
                                    >
                                        <Input/>
                                    </Form.Item>
                                    <Form.Item
                                        label="Kartira qiymati"
                                        name="Kvqiymadi"
                                        rules={[{required: true, message: 'Iltimos Kartira qiymatini kiriting!'}]}
                                    >
                                        <Input type="number"/>
                                    </Form.Item>
                                    <Form.Item
                                        label="Ummumiy Maydon"
                                        name="UmmumiyMaydon"
                                        rules={[{required: true, message: 'Iltimos Ummumiy Maydonni kiriting!'}]}
                                    >
                                        <Input type="number"/>
                                    </Form.Item>
                                    <Form.Item
                                        label="Uy raqami"
                                        name="Uyraqami"
                                        rules={[{required: true, message: 'Iltimos Uy raqamini kiriting!'}]}
                                    >
                                        <Input type="number"/>
                                    </Form.Item>

                                    <Form.Item
                                        label="Bino Raqami"
                                        name="BinoRaqami"
                                        rules={[{required: true, message: 'Iltimos Bino Raqamini kiriting!'}]}
                                    >
                                        <Input type="number"/>
                                    </Form.Item>
                                    <Form.Item
                                        label="Obyekt Nomi"
                                        name="ObektNomi"
                                        rules={[{required: true, message: 'Iltimos Obyekt Nomi kiriting!'}]}
                                    >
                                        <Input/>
                                    </Form.Item>
                                    <Form.Item
                                        label="Etaji"
                                        name="Etaji"
                                        rules={[{required: true, message: 'Iltimos Etajini kiriting!'}]}
                                    >
                                        <Input type="number"/>
                                    </Form.Item>
                                    <Form.Item
                                        label="Kvartira narxi"
                                        name="Kvnarhi"
                                        rules={[{required: true, message: 'Iltimos Kvartira narxi kiriting!'}]}
                                    >
                                        <Input type="number"/>
                                    </Form.Item>
                                    <Form.Item
                                        label="Tip"
                                        name="Tip"
                                        rules={[{required: true, message: 'Iltimos Tipni kiriting!'}]}
                                    >
                                        <Input type="number"/>
                                    </Form.Item>
                                    <Form.Item
                                        label="Statuslar"
                                        name="Statuslar"
                                        rules={[{required: true, message: 'Iltimos Statuslar kiriting!'}]}
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
