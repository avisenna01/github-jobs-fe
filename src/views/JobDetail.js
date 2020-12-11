import styles from '../styles/jobdetail.module.scss'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const JobDetail = (props) => {

    const [data, setData] = useState(null)

    useEffect(async () => {
        const res = await axios.get(`http://localhost:4000/jobdetail/${props.location.state.detail.id}`)
        setData(res.data)
        console.log(res.data)
    }, [])

    if (data) {

        return (
            <div className={styles.jobdetail__container}>
                <div className={styles.box}>
                    <p>{data.type} / <span>{data.location}</span></p>
                    <h1>
                        {data.title}
                    </h1>

                    <div className={styles.section__container}>
                        <div className={styles.first__section}>
                            <div>
                                <h3>title1 balblalbal</h3>
                                {data.description}
                            </div>
                            <div>
                                <h3>title2ba lblal</h3>
                                {data.how_to_apply}
                            </div>
                            <div>
                                <h3>title3l baba</h3>
                                <p>lorem ipsum bjnwbhrwhighiwehg ewhgiowhrghworigrew</p>
                            </div>
                        </div>
                        <div className={styles.second__section}>
                            <div>
                                <h4>{data.company_url}</h4>
                                <img src={data.company_logo} alt="company logo"></img>
                            </div>
                            <div>
                                <h4>How to apply</h4>
                                <div>kotak kosong</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        )
    }
    else {
        return <h1>Loading...</h1>
    }
}

export default JobDetail;