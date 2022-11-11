import React, {useState} from 'react';
import {Admin, ObjectPage, Tabs} from "components";
import {PlusCircleOutlined} from "@ant-design/icons";
import {useRouter} from "next/router";

function Object(props) {
    const [index, setIndex] = useState(0)
    const router = useRouter()
    const handleNavigate = () => {
        router.push("/create-object")
    }

    return (
        <Admin>
            <Tabs
                index={index}
                setIndex={setIndex}
                tabs={[
                    {
                        title: "Obyektlar",
                        content: (
                            <div>
                                <ObjectPage/>
                            </div>
                        ),
                    },
                ]}
                tabRightContent={[
                    {
                        icon: <PlusCircleOutlined style={{fontSize: "24px"}}/>,
                        onClick: () => handleNavigate(),
                    },
                ]}
            />
        </Admin>

    );
}

export default Object;
