import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import styles from './Article.module.css';

export default function Article(props){

    const { title, subtitle, coverImg } = props;

    useEffect(() => {

    }, []);

    return (
        <div className={styles.main}>
            <div className={styles.text_wrapper}>
                <span className={styles.title}>{title}</span>
                <div className={styles.subtitle}>{subtitle}</div>
            </div>
            <Image 
                src={coverImg || "/assets/empty-image.png"}
                width={96}
                height={96}/>
        </div>
    )
}