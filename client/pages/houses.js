import React, {useState} from 'react';
import {Admin, HousePage, Tabs} from "components";
import {PlusCircleOutlined} from "@ant-design/icons";
import {useRouter} from "next/router";

function Object(props) {
    const [index, setIndex] = useState(0)
    const router = useRouter()
    const handleDelete = () => {
        router.push("/create-house")
    }

    return (
        <Admin>
            <Tabs
                index={index}
                setIndex={setIndex}
                tabs={[
                    {
                        title: "Uylar",
                        content: (
                            <div>
                                <HousePage/>
                            </div>
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

export default Object;
