import React, { FunctionComponent, memo, SyntheticEvent, useCallback, useMemo } from 'react';
import classNames from 'classnames/bind';
import { Portal } from 'ui-kit';
import styles from './HiddenFileUploader.module.scss';

const cn = classNames.bind(styles);
const CLASS_NAME = 'HiddenFileUploader';

export type HiddenFileUploaderChangeParamsType = {
    files: FileList;
    event: SyntheticEvent;
};

export type HiddenFileUploaderPropsType = {
    id: string;
    isOnlyFolder?: boolean;
    onChange: (params: HiddenFileUploaderChangeParamsType) => void;
};

export const HiddenFileUploader: FunctionComponent<HiddenFileUploaderPropsType> = memo(
    ({ id, isOnlyFolder = false, onChange }) => {
        const handleChange = useCallback(
            (event) => {
                onChange({ files: event.target.files, event });
            },
            [onChange]
        );

        const optionalParams = useMemo(() => {
            return isOnlyFolder ? { webkitdirectory: 'true' } : {};
        }, [isOnlyFolder]);

        return (
            <Portal isOpened>
                <input
                    className={cn(CLASS_NAME)}
                    type="file"
                    id={id}
                    onChange={handleChange}
                    multiple
                    {...optionalParams}
                />
            </Portal>
        );
    }
);
