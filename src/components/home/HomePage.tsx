import React from 'react';
import State from "../results/State";

/**
 * The home page component
 *
 * @constructor
 */
const HomePage = () => (
    <>
        <div className="jumbotron">
            <h4 className="text-center">Home Page</h4>
        </div>
        <div className='mr-5 ml-5'>
            <p> This is a simple application to test the current availiabiliy
                of company servers.<br/>
                Server URLs to be tested are added via the 'Test Server' page.<br/>
                The results can be viewed on the 'Results page.<br/><br/>
                <ul className="list-group">
                    <li className="list-group-item list-group-item-info">The test is waiting to be processed</li>
                    <li className="list-group-item list-group-item-success">The server is alive</li>
                    <li className="list-group-item list-group-item-danger">The server is down</li>
                </ul>
            </p>
        </div>
    </>
)

export default HomePage