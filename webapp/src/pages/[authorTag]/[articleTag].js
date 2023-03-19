import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import styles from '@/styles/ArticleTag.module.css';

import PageContainer from '@/layout/PageContainer/PageContainer';

export default function ArticleId() {

    const router = useRouter();
    const { authorTag, articleTag } = router.query;

    useEffect(() => {

    }, []);

    return (
        <PageContainer>
            <span>{authorTag}</span>
            <span>{articleTag}</span>
        </PageContainer>
    )
}