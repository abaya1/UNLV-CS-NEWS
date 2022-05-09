import React, {useState} from 'react';
import { Admin, Add, Delete, Edit } from '../../components';
import './AdminDashboard.css';

const AdminDashboard = () => {
    const [state, setState] = useState(0);

    const onObjectClick = (num) => {

        console.log(num)
        if(num === 0) {
            return;
        }
        else if (num === 1) {
            return (<Add/>)
        }
        else if (num === 2) {
            return <Edit />
        }
        else if (num === 3) {
            return (<Delete />)
        }
    }
    return(
        <div className="dashboard">
            <div className="dashboard__header" >
                <h1 className="dashboard__title">Dashboard</h1>
            </div>
            <div className="dashboard__selection">
                <div className="dashboard__single"  onClick={() => setState(1)} >
                    <Admin title="Add" color="red" />
                </div>
                <div className="dashboard__single"  onClick={() => setState(2)} >
                    <Admin title="Edit" color="blue" />
                </div>
                <div className="dashboard__single"  onClick={() => setState(3)} >
                    <Admin title="Delete" color="black" />
                </div>

                <div className="dashboard__addon">
                    {onObjectClick(state)}
                </div>
            </div>
           
        </div>
    )
}

export default AdminDashboard;