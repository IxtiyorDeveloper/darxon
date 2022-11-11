import StyledTable from "../table/table";
import {Button, Modal} from "antd";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {ExclamationCircleOutlined} from "@ant-design/icons";
import {MainApi} from "../../api";
import {toast} from "react-toastify";

function RoomPage() {

    const columns = [
        {
            title: 'Nomi',
            dataIndex: 'Nomi',
            key: 'Nomi',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Oshhona',
            dataIndex: 'Oshhona',
            key: 'Oshhona',
        },
        {
            title: 'MehmonHona',
            dataIndex: 'MehmonHona',
            key: 'MehmonHona',
        },
        {
            title: 'Yotohona',
            dataIndex: 'Yotohona',
            key: 'Yotohona',
        },
        {
            title: 'Balkon',
            dataIndex: 'Balkon',
            key: 'Balkon',
        },
        {
            title: 'Kirish',
            dataIndex: 'Kirish',
            key: 'Kirish',
        },
        {
            title: 'Kvqiymadi',
            dataIndex: 'Kvqiymadi',
            key: 'Kvqiymadi',
        },
        {
            title: 'UmmumiyMaydon',
            dataIndex: 'UmmumiyMaydon',
            key: 'UmmumiyMaydon',
        },
        {
            title: 'Uyraqami',
            dataIndex: 'Uyraqami',
            key: 'Uyraqami',
        },
        {
            title: 'BinoRaqami',
            dataIndex: 'BinoRaqami',
            key: 'BinoRaqami',
        },
        {
            title: 'ObectNomi',
            dataIndex: 'ObectNomi',
            key: 'ObectNomi',
        },
        {
            title: 'Etaji',
            dataIndex: 'Etaji',
            key: 'Etaji',
        },
        {
            title: 'Kvnarhi',
            dataIndex: 'Kvnarhi',
            key: 'Kvnarhi',
        },
        {
            title: 'Tip',
            dataIndex: 'Tip',
            key: 'Tip',
        },
        {
            title: 'Statuslar',
            dataIndex: 'Statuslar',
            key: 'Statuslar',
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
                axios.delete(`${MainApi}/api/honadon/delete/${id}`).then(r => {
                    toast.success("Muvaffaqqiyatli o'chirildi!")
                    getData()
                }).catch(er => toast.error("Error"))
            },
        })
    }

    const [data, setData] = useState([]);

    const getData = () => {
        axios.get(`${MainApi}/api/honadon`)
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

export default RoomPage;
