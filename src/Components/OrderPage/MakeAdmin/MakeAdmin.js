import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const MakeAdmin = () => {
    return (
        <section className="row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-8 mt-5" style={{ backgroundColor:'#F4F7FC'}}>
                <div style={{marginTop:'20px'}}>
                    <form action="">
                      <label for="email"><h5>Email</h5></label> <br/>
                      <input
                       style={{width:'400px', border:'1px solid light', height:'50px',borderRadius:'5px'}}
                       type="text" name="email" placeholder="email" id=""/> 
                       <input type="submit" 
                       className="btn btn-primary ml-5 mb-2"
                       style={{ height:'50px',width:'150px'}}
                       value="submit"/>
                    </form>
                    
                </div>
            </div>
        </section>
    );
};

export default MakeAdmin;