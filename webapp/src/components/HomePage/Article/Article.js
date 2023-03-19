import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import styles from './Article.module.css';

export default function Article(props){

    const router = useRouter();
    const { title, subtitle, coverImg, authorTag, articleTag } = props;

    useEffect(() => {

    }, []);

    const handleClick = e => {
        router.push(`/${authorTag}/${articleTag}`);
    }

    return (
        <div 
            className={styles.main}
            onClick={handleClick}>
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