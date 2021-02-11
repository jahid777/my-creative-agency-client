import React from 'react';
import Order from '../Order/Order';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <main className="row">
            <section className="col-md-3" style={{backgroundColor:'pink'}}>
                <Sidebar></Sidebar>
            </section>

            <section className="col-md-9 mt-5">
                <Order></Order>
            </section>
        </main>
    );
};

export default Dashboard;