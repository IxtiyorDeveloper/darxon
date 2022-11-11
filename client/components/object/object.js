import StyledTable from "../table/table";
import {Button, Modal} from "antd";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {ExclamationCircleOutlined} from "@ant-design/icons";
import {MainApi} from "api";
import {toast} from "react-toastify";

function ObjectPage() {
    const columns = [
        {
            title: 'Nomi',
            dataIndex: 'Nomi',
            key: 'Nomi',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Ummumiy',
            dataIndex: 'Ummumiy',
            key: 'Ummumiy',
        },
        {
            title: 'Bino',
            dataIndex: 'Bino',
            key: 'Bino',
        },
        {
            title: 'Qurilishni Boshlanish Sanasi',
            dataIndex: 'QurilishniBoshlanishSanasi',
            key: 'QurilishniBoshlanishSanasi',
        },
        {
            title: 'Qurilishni Bitish Sanasi',
            dataIndex: 'QurilishniBitishSanasi',
            key: 'rooms',
        },
        {
            title: 'Tip',
            dataIndex: 'Tip',
            key: 'Tip',
        },
        {
            title: 'delete',
            dataIndex: '_id',
            key: '_id',
            render: (id) => {
                return (
                    <Button type="danger" onClick={() => handleDelete(id)}>
                        O&apos;chirish
                    </Button>
                )
            }
        },
        {
            title: 'edit',
            dataIndex: 'upd',
            key: 'upd',
            render: () => {
                return (
                    <Button type="default">
                        O&apos;zgartirish
                    </Button>
                )
            }
        },
    ];

    const handleDelete = (id) => {
        Modal.confirm({
            centered: true,
            title: "Rostan ham o'chirmoqchimisiz?",
            icon: <ExclamationCircleOutlined/>,
            onOk() {
                axios.delete(`${MainApi}/api/object/delete/${id}`).then(r => {
                    toast.success("Muvaffaqqiyatli o'chirildi!")
                    getData()
                }).catch(er => toast.error("Error"))
            },
        })
    }

    const [data, setData] = useState([]);

    const getData = () => {
        axios.get(`${MainApi}/api/object`)
            .then(res => {
                setData(res.data.data);
            });
    }

    useEffect(() => {
        getData()
    }, []);

    return (
        <div>
            <StyledTable columns={columns} data={data}/>
        </div>
    );
}

export default ObjectPage;
