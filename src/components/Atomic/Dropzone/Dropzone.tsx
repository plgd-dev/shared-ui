import { cloneElement, FC, ReactElement, SyntheticEvent, useCallback, useEffect, useMemo, useState } from 'react'
import { useDropzone } from 'react-dropzone'

import { Props } from './Dropzone.types'
import * as styles from './Dropzone.styles'
import { convertSize, Icon, IconClose, IconFileUpload } from '../Icon'

const Dropzone: FC<Props> = (props) => {
    const { accept, customFileRenders, description, disabled, maxFiles, maxSize, title, validator } = props
    const [files, setFiles] = useState<any>([])

    const { getRootProps, getInputProps } = useDropzone({
        accept,
        disabled,
        maxFiles,
        maxSize,
        onDrop: (acceptedFiles, fileRejections) => {
            setFiles(
                acceptedFiles.map((file) =>
                    Object.assign(file, {
                        preview: URL.createObjectURL(file),
                    })
                )
            )
        },
        validator,
    })

    const renderFile = useCallback(
        (file: any) => {
            const nameArray = file.name.split('.')
            const format = nameArray[nameArray.length - 1]
            const index = customFileRenders?.findIndex((item) => item.format === format.toLowerCase())

            if (customFileRenders && index !== undefined && index >= 0) {
                return typeof customFileRenders[index].icon === 'string' ? (
                    <Icon icon={customFileRenders[index].icon as string} size={40} />
                ) : (
                    cloneElement(customFileRenders[index].icon as ReactElement, { ...convertSize(40) })
                )
            }

            return (
                <img
                    alt={file.name}
                    css={styles.image}
                    onLoad={() => {
                        URL.revokeObjectURL(file.preview)
                    }}
                    src={file.preview}
                />
            )
        },
        [customFileRenders]
    )

    const removeFile = (file: any, e: SyntheticEvent) => {
        e.stopPropagation()
        const newFiles = [...files]
        newFiles.splice(newFiles.indexOf(file), 1)
        setFiles(newFiles)
    }

    function bytesFormatter(num: number) {
        let i = 0
        for (i = 0; num >= 1024 && i < 4; i++) {
            num /= 1024
        }
        return [`${num} `, [' Bytes', ' kB', 'MB', 'GB', 'TB'][i]]
    }

    const thumbs = useMemo(
        () =>
            files.map((file: any) => (
                <div css={styles.imageRow} key={file.name}>
                    <div css={styles.imageWrapper}>{renderFile(file)}</div>

                    <div css={styles.contentWrapper}>
                        <div css={styles.fileLine}>
                            <div css={styles.fileName}>{file.name}</div>
                            <IconClose css={styles.closeIcon} onClick={(e) => removeFile(file, e)} />
                        </div>
                        <div css={styles.fileLine}>
                            <div css={styles.fileSize}>{bytesFormatter(file.size)}</div>
                        </div>
                    </div>
                </div>
            )),
        [files, renderFile]
    )

    useEffect(() => {
        // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
        return () => files.forEach((file: any) => URL.revokeObjectURL(file.preview))
    }, [])

    return (
        <div>
            <div {...getRootProps({ className: 'dropzone' })} css={styles.dropzoneContainer}>
                <input {...getInputProps()} />
                {thumbs.length === 0 && (
                    <div css={styles.placeholder}>
                        <IconFileUpload {...convertSize(50)} />

                        <p css={styles.placeholderText}>{title}</p>
                        {description && <p css={styles.placeholderDescription}>{description}</p>}
                    </div>
                )}

                {thumbs && <aside>{thumbs}</aside>}
            </div>
        </div>
    )
}

Dropzone.displayName = 'Dropzone'

export default Dropzone
