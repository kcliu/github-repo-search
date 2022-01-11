import React, {useEffect, useState} from 'react';
import styles from './RepoItem.module.css';
import {NewWindowButton} from '../NewWindowButton/NewWindowButton';

interface RepoInfo {
    description: string
    url: string
    title: string
}

export const RepoItem = ({title, description, url}: RepoInfo) => {
    return (<div className={styles.container}>
        <div className={styles.title}>{title}</div>
        <div className={styles.descriptionWrapper}>
            <div className={styles.description}>{description}</div>
            <NewWindowButton link={url}/>
        </div>

    </div>)
}
