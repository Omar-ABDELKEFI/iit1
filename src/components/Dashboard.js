import React , {useState} from 'react';

function Dashboard(props) {
    const [nameOfComponent, setNameOfComponent] = useState('Dashboard');
    return (
        <div>
            {
                nameOfComponent
            }
            
        </div>
    );
}

export default Dashboard;
