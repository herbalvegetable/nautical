import React, { useState, useEffect } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function RichTextEditor(props) {

    const { data, setData } = props;

    return (
        <CKEditor
            editor={ClassicEditor}
            data={data}
            onChange={(event, editor) => {
                const data = editor.getData();
                // console.log({ event, editor, data });
                setData(data);
            }} />
    )
}