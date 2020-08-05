import ResultList from "./ResultList/ResultList";
import React, { useEffect, useState } from 'react';
import { getResults } from "../../api/TestResults/TestResultsApi";

/**
 * The resultPage component
 */
const ResultPage = () => {

    // set the results in state
    const [ results, setResults ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    /**
     * Called when the component is rendered
     */
    useEffect(() => {
        // set the results into state
        (async () => {
            setResults(await getResults());
            setLoading(false);
        })();
    }, [results.length]);

    return (
        <div>
            <h4 className='text-center jumbotron'>The API Test Results</h4>
            <div className='mr-5 ml-5'>
                <ResultList results={results} loading={loading}/>
            </div>
        </div>
    );
}

export default ResultPage;