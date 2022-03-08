import React from 'react';
import './JobCard.css';
import './formatNumber';
import addCommas from './formatNumber';

function JobCard(job) {
    let formattedSalary = job.job.salary !== null
        ? addCommas(job.job.salary)
        : null;
    
    return(
        <div className='JobCard'>
            <p className='JobCard-header'>{job.job.title}</p>
            <p>{job.job.companyName}</p>
            <p className='JobCard-small'>Salary: {formattedSalary}<br />
                Equity: {job.job.equity}</p>
        </div>
    )
}

export default JobCard;