import React, {useEffect, useState} from 'react';
import JoblyApi from './api';
import './CompanyCard.css';

function CompanyCard( {handle}) {
    const [company, setCompany] = useState("");

    useEffect( () => {
        async function getCompanyInfo() {
            setCompany(await JoblyApi.getCompany(handle));
        }
        getCompanyInfo();
    }, [handle]);

    return(
        <div className='CompanyCard'>
            <p className='CompanyCard-header'>{company.name}</p>
            <p>{company.description}</p>
        </div>
    )
}

export default CompanyCard;