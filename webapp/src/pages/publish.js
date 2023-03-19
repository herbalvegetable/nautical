import React, { useState, useEffect } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import parse from 'html-react-parser';

import styles from '@/styles/Publish.module.css'

import PageContainer from '@/layout/PageContainer/PageContainer';

export default function Publish() {

    const [text, setText] = useState('');

    useEffect(() => {
        console.log(text);
    }, [text]);

    return (
        <PageContainer>
            <div className={styles.center}>
                <input
                    className={styles.title}
                    type='text'
                    placeholder='Title' />
                <CKEditor
                    editor={ClassicEditor}
                    data={text}
                    onReady={(editor) => {
                        editor.ui.view.editable.element.style.minHeight = "500px";
                     }}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        console.log({ event, editor, data });
                        setText(data);
                    }}/>
                <input 
                    type='submit'
                    value='Publish'/>
            </div>
        </PageContainer>
    )
}