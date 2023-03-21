import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './Navbar.module.css';

export default function Navbar(props) {
    const router = useRouter();

    const [links, setLinks] = useState([
        { href: '/', title: 'Home' },
        { href: '/about', title: 'About' },
        { href: '/publish', title: 'Publish' },
    ]);

    useEffect(() => {

    }, []);

    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <span>Nautical</span>
            </div>
            <div className={styles.links}>
                {
                    links.map((l, i) => {
                        const { href, title } = l;

                        return (
                            <div
                                key={i.toString()} 
                                className={styles.link_container}>
                                <Link
                                    key={i.toString()}
                                    className={`${styles.link} ${router.pathname == href ? styles.active : ''}`}
                                    href={href}>
                                    {title}
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}