import React, { useState } from 'react';
import AddTestForm from "./AddTestForm/AddTestForm";
import { addTestURL } from "../../api/TestResults/TestResultsApi";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

/**
 * Interface for the event
 */
interface IEvent {
    target: { value: string },
    preventDefault: () => void
}

/**
 * The AddTest page component
 */
const AddTestPage = () => {

    // Store the url in state
    const [ URL, setURL ] = useState('');

    /**
     * Called when the URL is changed
     *
     * @param event
     */
    const onChange = (event: IEvent) => setURL(event.target.value);

    /**
     * Called when the form is submitted
     *
     * @param event
     */
    const onSubmit = (event: IEvent) => {
        event.preventDefault();
        toast.success(`http://${URL} added to tests..`,{"autoClose": 3000});
        addTestURL(URL);
        setURL('');
    }

    /**
     * Render the component
     */
    return (
        <div>
            <ToastContainer/>
            <h4 className={'text-center jumbotron'}>Add a URL to test</h4>
            <div className={'mr-5 ml-5'}>
                <AddTestForm URL={URL} onChange={onChange} onSubmit={onSubmit} />
            </div>
        </div>
    );
}

export default AddTestPage;