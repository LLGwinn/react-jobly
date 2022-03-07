import React, {useEffect, useState} from "react";
import JoblyApi from './api';
import CompanyCard from "./CompanyCard";

/** Shows a list of all companies: name, description */

function CompaniesList() {
    const [allCompanies, setAllCompanies] = useState([]);

    // API call to backend to get all companies, set state
    useEffect( () => {
        async function getCompaniesList() {
            setAllCompanies(await JoblyApi.getAllCompanies());
        }
        getCompaniesList();
    }, [])
    
    return(
        <div>
            {allCompanies.map(company => <CompanyCard handle={company.handle} key={company.handle}/>)}
        </div>
    )
}

export default CompaniesList;