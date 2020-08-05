import React from 'react';
import ResultItem from "../ResultItem/ResultItem";
import Spinner from "../../common/Spinner/Spinner";

/**
 * The Interface for the ResultList
 */
interface IResultsList {
    results: {
        URL: string,
        state: string
    }[],
    loading: boolean
}

/**
 * The resultList component
 *
 * @param results - the results to display
 * @param loading - true if the page is loading
 */
const ResultList = ({ results, loading }: IResultsList) => (
    loading ? <Spinner/> :
    <ul className="list-group">
        {results.map((data, index) => (
            <ResultItem key={index} URL={data.URL} status={data.state} />
        ))}
    </ul>
);


export default ResultList;