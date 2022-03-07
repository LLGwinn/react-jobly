import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import JoblyApi from "./api";
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
           {company.jobs ?
                <ul>
                    {company.jobs.map(job => <li key={job.id}>{job.title}</li>)}
                </ul> :
                null
            }
        </div>  
    )
}

export default CompanyWithJobs;