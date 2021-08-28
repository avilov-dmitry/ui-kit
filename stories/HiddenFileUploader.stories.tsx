import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { Button, HiddenFileUploader, HiddenFileUploaderPropsType } from 'ui-kit';
import { useState } from 'react';
import { useCallback } from 'react';

export default {
    title: 'Example/HiddenFileUploader',
    background: '#EFEEEE',
    component: HiddenFileUploader,
    args: {
        id: 'HiddenFileUploaderId',
    },
} as Meta;

export const Simple: Story<HiddenFileUploaderPropsType> = (args: HiddenFileUploaderPropsType) => {
    const [files, setFiles] = useState([]);

    const open = useCallback(() => {
        document.getElementById(args.id)?.click();
    }, [args.id]);

    const handleChange = useCallback(({ files }) => {
        setFiles(files);
    }, []);

    return (
        <div style={{ padding: 25, fontSize: 30 }}>
            <HiddenFileUploader {...args} onChange={handleChange} />

            <Button onClick={open}>Open HiddenFileUploader</Button>

            <div style={{ height: 700, marginTop: 25, overflow: 'scroll' }}>
                {files?.length !== 0 &&
                    Array.from(files).map(({ name }) => (
                        <div style={{ marginBottom: 25 }}>{name}</div>
                    ))}
            </div>
        </div>
    );
};
