import React, {useContext} from 'react';
import Button from 'react-bootstrap/Button';
import './JobCard.css';
import './formatNumber';
import JoblyApi from './api';
import addCommas from './formatNumber';
import AuthContext from './authContext';

function JobCard(job) {
    const formattedSalary = job.job.salary !== null
        ? addCommas(job.job.salary)
        : null;

    const {currUser} = useContext(AuthContext);

    async function applyToJob (evt) {
        const jobId = job.job.id;
        const user = currUser.username;
        await JoblyApi.applyToJob(user, jobId);
    }

    const buttonText = currUser.applications.includes(job.job.id)
        ? 'APPLIED'
        : 'APPLY'

    const disabledStatus = currUser.applications.includes(job.job.id)
        ? true
        : false
    

    return(
        <div className='JobCard'>
            <p className='JobCard-header'>{job.job.title}</p>
            <p>{job.job.companyName}</p>
            <p className='JobCard-small'>Salary: {formattedSalary}<br />
                Equity: {job.job.equity}</p>
            <div className='text-end'>
                <Button variant='danger' onClick={applyToJob} disabled={disabledStatus}>{buttonText}</Button>
            </div>
            
        </div>
    )
}

export default JobCard;