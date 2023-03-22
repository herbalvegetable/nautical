import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { BsImageFill } from 'react-icons/bs';

import styles from './Article.module.css';

export default function Article(props) {

    const router = useRouter();
    const { title, subtitle, imgBase64, authorTag, articleTag } = props;

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
            <div className={styles.img_container}>
                {
                    imgBase64 ?

                        <Image
                            className={styles.img}
                            src={imgBase64 || "/assets/empty-image.png"}
                            alt='Cover Image'
                            width={50}
                            height={50} />

                        :

                        <div className={styles.empty}>
                            <BsImageFill color='#2A4494'/>
                        </div>
                }
            </div>
        </div>
    )
}