import React from 'react';
import styles from '../styles/jobdetailcard.module.scss'
import { Link } from "react-router-dom";

const JobDetailCard = (props) => {
    return (
        <div className={styles.card__container}>

            <div>
                <p>
                    <Link to={{
                        pathname: '/job-detail/',
                        state: {
                            detail: props
                        }
                    }}>
                        {props.title}
                    </Link>
                </p>
                <p>
                    {props.company} - <span>{props.type}</span>
                </p>
            </div>
            <div>
                <p>
                    {props.location}
                </p>
                <p>
                    {props.created_at}
                </p>
            </div>

        </div>
    )
}

export default JobDetailCard;