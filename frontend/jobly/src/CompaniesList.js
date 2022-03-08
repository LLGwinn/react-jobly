import React, {useEffect, useState} from "react";
import JoblyApi from './api';
import CompanyCard from "./CompanyCard";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './CompaniesList.css';

/** Shows a list of all companies: name, description */

function CompaniesList() {
    const [allCompanies, setAllCompanies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    // API call to backend to get all companies, set state
    useEffect( () => {
        search("");
    }, []);

    async function search(name) {
        console.log('NAME PASSED INTO SEARCH:', name)
        const searchResults = await JoblyApi.getAllCompanies(name);
        setAllCompanies(searchResults);
    }

    function handleChange(evt) {
        setSearchTerm(evt.target.value);
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        console.log('SEARCH TERM TO SEND TO THE API:', searchTerm);
        search(searchTerm);
    }

    function reset(evt) {
        search("");
    }
    
    return(
        <div>
            <Form className='CompaniesList-form' onSubmit={handleSubmit}>
                <Form.Control type="text" 
                              placeholder="Search by company name" 
                              onChange={handleChange} />
                <Button variant="primary" type='submit'>Search</Button> 
                <Button variant='dark' onClick={reset}>Reset</Button>
            </Form>
            {allCompanies.length > 0 
                ? allCompanies.map(company => <CompanyCard handle={company.handle} key={company.handle}/>)
                : <p>No results found for "{searchTerm}".</p>
            }

            
            
        </div>
    )
}

export default CompaniesList;