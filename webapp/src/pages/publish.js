import React, { useState, useEffect } from 'react';
import parse from 'html-react-parser';
import dynamic from 'next/dynamic';
import axios from 'axios';
import { useRouter } from 'next/router';

import styles from '@/styles/Publish.module.css'

import PageContainer from '@/layout/PageContainer/PageContainer';

const RichTextEditor = dynamic(() => import('@/components/RichTextEditor/RichTextEditor'), {
    loading: () => <span>Loading text editor...</span>,
    ssr: false,
})

export default function Publish() {

    const router = useRouter();

    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [imgData, setImgData] = useState('');

    useEffect(() => {
        console.log(text);
    }, [text]);

    const handlePublish = e => {
        e.preventDefault();
        if(!(title && text)) return;

        const articleData = { title, text };

        axios.post(`http://localhost:5000/article/`, articleData)
            .then(res => {
                console.log(res.status);

                setTitle('');
                setText('');
                setImgData('');

                router.push('/');
            })
            .catch(err => {
                console.log(err);
            });
    }

    const handlePreview = e => {
        e.preventDefault();


    }


    return (
        <PageContainer>
            <div className={styles.center}>
                <div className={styles.editor}>
                    <input
                        className={styles.title}
                        type='text'
                        placeholder='Title'
                        value={title}
                        onChange={e => setTitle(e.target.value)} />
                    <RichTextEditor
                        data={text}
                        setData={setText} />
                </div>
                <div className={styles.sidebar}>
                    <button
                        className={styles.preview_btn}
                        onClick={handlePreview}>
                        Preview
                    </button>
                    <button
                        className={styles.publish_btn}
                        onClick={handlePublish}>
                        Publish
                    </button>
                </div>
            </div>
        </PageContainer>
    )
}