import React, {useState} from 'react';
import {Admin, Tabs} from "components";
import {PlusCircleOutlined} from "@ant-design/icons";
import StyledTable from "../components/table/table";
import {Button} from "antd";
import {useRouter} from "next/router";
import RoomPage from "../components/room/house";

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
        title: 'delete',
        dataIndex: 'del',
        key: 'del',
        render: () => {
            return (
                <Button type="danger">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    O'chirish
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
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    O'zgartirish
                </Button>
            )
        }
    },
];

function Uy() {
    const [index, setIndex] = useState(0)
    const router = useRouter()

    const handleDelete = () => {
        router.push("/create-room")
    }

    return (
        <Admin>
            <Tabs
                index={index}
                setIndex={setIndex}
                tabs={[
                    {
                        title: "Xonadonlar",
                        content: (
                            <RoomPage/>
                        ),
                    },
                ]}
                tabRightContent={[
                    {
                        icon: <PlusCircleOutlined style={{fontSize:"24px"}}/>,
                        onClick: () => handleDelete(),
                    },
                ]}
            />

        </Admin>

    );
}

export default Uy;
