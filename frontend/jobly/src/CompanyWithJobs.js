import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import JoblyApi from "./api";
import JobCard from "./JobCard";
import './CompanyWithJobs.css';

function CompanyWithJobs() {
    const {handle} = useParams();
    const [company, setCompany] = useState("");

    useEffect(() => {
        async function getCompanyInfo() { 
            setCompany(await JoblyApi.getCompany(handle));
        }
        getCompanyInfo();
    }, [handle])

    return(
        <div className="CompanyWithJobs">
           <p className="CompanyWithJobs-header">{company.name}</p>
           <p>{company.description}</p>
           {company.jobs ?
                <ul>
                    {company.jobs.map(job => <li key={job.id}><JobCard job={job} /></li>)}
                </ul> :
                null
            }
        </div>  
    )
}

export default CompanyWithJobs;