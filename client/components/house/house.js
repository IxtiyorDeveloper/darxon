import StyledTable from "../table/table";
import {Button, Modal} from "antd";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {ExclamationCircleOutlined} from "@ant-design/icons";
import {MainApi} from "../../api";
import {toast} from "react-toastify";

function HousePage() {

    const columns = [
        {
            title: 'Nomi',
            dataIndex: 'Nomi',
            key: 'Nomi',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Object',
            dataIndex: 'Object',
            key: 'Object',
        },
        {
            title: 'Qavatliligi',
            dataIndex: 'Qavatliligi',
            key: 'Qavatliligi',
        },
        {
            title: 'PodezlarSoni',
            dataIndex: 'PodezlarSoni',
            key: 'PodezlarSoni',
        },
        {
            title: 'HonalarSoni',
            dataIndex: 'HonalarSoni',
            key: 'HonalarSoni',
        },
        {
            title: 'Raqami',
            dataIndex: 'Raqami',
            key: 'Raqami',
        },
        {
            title: 'UmmumiyKvadrati',
            dataIndex: 'UmmumiyKvadrati',
            key: 'UmmumiyKvadrati',
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
                axios.delete(`${MainApi}/api/bino/delete/${id}`).then(r => {
                    toast.success("Muvaffaqqiyatli o'chirildi!")
                    getData()
                }).catch(er => toast.error("Error"))
            },
        })
    }

    const [data, setData] = useState([]);

    const getData = () => {
        axios.get(`${MainApi}/api/bino`)
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

export default HousePage;
