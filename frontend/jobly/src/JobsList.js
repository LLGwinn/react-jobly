import React, {useEffect, useState} from "react";
import JoblyApi from "./api";
import JobCard from "./JobCard";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './JobsList.css';

function JobsList() {
    const [jobs, setJobs] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect( () => {
        search("");
    }, []);

    async function search(title) {
        const searchResults = await JoblyApi.getAllJobs(title);
        setJobs(searchResults);
    }

    function handleChange(evt) {
        setSearchTerm(evt.target.value);
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        search(searchTerm);
    }

    function reset(evt) {
        document.getElementsByTagName('input')[0].value = "";
        search("");
    }

    return(
        <div>
            <Form className='JobsList-form' onSubmit={handleSubmit}>
                <Form.Control type="text"
                                placeholder="Search by job title" 
                                onChange={handleChange} />
                <Button variant="primary" type='submit'>Search</Button> 
                <Button variant='dark' onClick={reset}>Reset</Button>
            </Form>
            {jobs.length > 0 
                ? jobs.map(job => <JobCard job={job} key={job.id}/>)
                : <p className='JobsList-notfound'>No results found for "{searchTerm}".</p>
            }
        </div>
    )
    
}

export default JobsList;