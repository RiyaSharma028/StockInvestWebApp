import React from 'react';

function Brokerage() {
    return (
        <div className='container'>
            <div className="row p-5 border-top mt-5">
                 <div className="col-8 p-4">
                    <a href="#" style={{textDecoration :"none"}}><h3 className='fs-5'>Brokerage calculator</h3></a>
                    <ul>
                        <li>Calculates total brokerage and charges instantly.</li>
                        <li>Supports equity, F&O, currency, and commodity trades.</li>
                        <li>Shows net profit or loss after all charges.</li>
                        <li>Simple and easy-to-use interface.</li>
                        <li>Helps in planning trades with cost transparency.</li>
                    </ul>
                 </div>
                 <div className="col-4 p-4">
                   <a href="#" style={{textDecoration :"none"}}><h3 className='fs-5'>list of charges</h3></a>
                 </div>
            </div>
           
        </div>
    );
}

export default Brokerage;