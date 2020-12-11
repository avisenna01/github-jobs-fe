import React, { useState, useEffect } from 'react';
import styles from '../styles/joblist.module.scss'
import JobDetailCard from '../components/JobDetailCard'
import axios from 'axios'

const JobList = () => {

    const [jobdesc, setJobdesc] = useState("")
    const [loc, setLoc] = useState("")
    const [fulltime, setFulltime] = useState("")
    const [page, setPage] = useState(1)
    const [joblist, setJoblist] = useState([])

    const handleJobDesc = (e) => {
        setJobdesc(e.target.value)
    }

    const handleLoc = (e) => {
        setLoc(e.target.value)
    }

    const handleFullTime = (e) => {
        setFulltime(e.target.value)
    }

    const nextPage = (e) => {
        setPage(page + 1)
    }

    const prevPage = (e) => {
        setPage(page - 1)
    }

    useEffect(async () => {
        const res = await axios.get(`http://localhost:4000/jobdetail?page=${page}&location=${loc}&description=${jobdesc}`)
        console.log(res.data)
        setJoblist(res.data)
    }, [jobdesc, loc, page])

    return (
        <div className={styles.joblist__container}>
            <div className={styles.section1}>
                <div>
                    <label>Job Description</label>
                    <input value={jobdesc} onChange={handleJobDesc} placeholder="Filter by title, benefits, companies, expertise">
                    </input>
                </div>
                <div>
                    <label>Location</label>
                    <input value={loc} onChange={handleLoc} placeholder="Filter by city, state, zip code or country">
                    </input>
                </div>
                <input type="radio" value="fulltime" checked={fulltime === "fulltime"} onChange={handleFullTime}></input>
                <label className={styles.radiolabel}>Full Time Only</label>
                <button>Search</button>
            </div>
            <div className={styles.section2}>
                <h1>Job List</h1>
                {joblist.map((val, idx) => (
                    <JobDetailCard key={idx} id={val.id} title={val.title} company={val.company} type={val.type} location={val.location} created_at={val.created_at}></JobDetailCard>
                ))}

                <div className={styles.buttons}>
                    <button onClick={prevPage}>Prev Page</button>
                    <button onClick={nextPage}>Next Page</button>
                </div>
            </div>
        </div>
    )
}

export default JobList;