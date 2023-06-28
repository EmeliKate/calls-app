import styles from "./Dashboard.css";
import {Table} from "antd";
import {useSelector, useDispatch} from "react-redux";
import {setCallsList} from "../../features/calls/callsSlice";
import {useEffect} from "react";

const token = "testtoken"
const Dashboard = () => {

    const {callsList} = useSelector((store) => store.calls)
    const dispatch = useDispatch()

    const columns = [
        {
            title: 'Тип',
            dataIndex: 'type',
        },
        {
            title: 'Время',
            dataIndex: 'time',
        },
        {
            title: 'Сотрудник',
            dataIndex: 'employee',
        },
        {
            title: 'Звонок',
            dataIndex: 'number',
        },
        {
            title: 'Источник',
            dataIndex: 'source',
        },
        {
            title: 'Звонок',
            dataIndex: 'rating',
        },
        {
            title: 'Длительность',
            dataIndex: 'duration',
        },
    ];

    async function addData(){
        const res = await fetch("https://api.skilla.ru/mango/getList?date_start=2000-01-01&date_end=2023-06-01&in_out=1", {
            method: "POST",
            mode: "cors",
            credentials: "same-origin",
            headers: {
                "Content-type": "application/json",
                "Accept": 'application/json, text/plain, */*',
                "Authorization": "Bearer " + token
            },
        });
        if (!res.ok){
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json()
        console.log("addData")
        console.log(data.results)
        dispatch(setCallsList(data.results))
    }

    useEffect(() => {
        addData()
        console.log("callsList: " + callsList)
    }, [])

    useEffect(() => {
        console.log("callsList: " + callsList)
        console.log("callsShown: " + callsShown)
    }, [callsList])

    const callsShown = [...callsList].map((call) =>
        ({
             "key": call.id,
             "type": call.in_out,
             "time": call.date,
             "employee": <img src={call.person_avatar} />,
             "number": call.to_number,
             "source": call.source,
             "rating": call.errors,
             "duration": call.time
        })
    )

    return <Table
        className={styles.dashboard}
        columns={columns}
        dataSource={callsShown}
    >
    </Table>
}

export default Dashboard;