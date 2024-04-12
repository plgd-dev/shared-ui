import { cloneElement, FC, Fragment, ReactElement, SyntheticEvent, useCallback, useEffect, useMemo, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import isFunction from 'lodash/isFunction'

import { defaultProps, Props } from './Dropzone.types'
import * as styles from './Dropzone.styles'
import { convertSize, Icon, IconClose, IconFileUpload } from '../Icon'

const Dropzone: FC<Props> = (props) => {
    const { accept, customFileRenders, description, disabled, maxFiles, maxSize, onFileDrop, onFilesDrop, renderThumbs, smallPadding, title, validator } = {
        ...defaultProps,
        ...props,
    }
    const [files, setFiles] = useState<any>([])

    const onDrop = useCallback(
        (acceptedFiles: any) => {
            setFiles([
                ...files,
                ...acceptedFiles.map((file: any) =>
                    Object.assign(file, {
                        preview: URL.createObjectURL(file),
                    })
                ),
            ])

            const droppedProm = acceptedFiles.map(
                (file: any) =>
                    new Promise(function (resolve, reject) {
                        const reader = new FileReader()

                        reader.onabort = () => {
                            console.log('file reading was aborted')
                            reject('file reading was aborted')
                        }
                        reader.onerror = () => {
                            console.log('file reading has failed')
                            reject('file reading has failed')
                        }
                        reader.onload = () => {
                            isFunction(onFileDrop) && onFileDrop(reader.result)
                            resolve(reader.result)
                        }

                        reader.readAsText(file)
                    })
            )

            Promise.all(droppedProm).then((loadedFiles) => {
                isFunction(onFilesDrop) && onFilesDrop(loadedFiles)
            })
        },
        [files, onFileDrop, onFilesDrop]
    )

    const { getRootProps, getInputProps, fileRejections } = useDropzone({
        accept,
        disabled,
        maxFiles,
        maxSize,
        onDrop,
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
        return [`${num.toFixed(2)} `, [' Bytes', ' kB', 'MB', 'GB', 'TB'][i]]
    }

    const thumbs = useMemo(
        () =>
            files.map((file: any, key: number) => (
                <Fragment key={key}>
                    <div css={styles.imageRow} key={file.name}>
                        <div css={styles.imageWrapper}>{renderFile(file)}</div>

                        <div css={styles.contentWrapper}>
                            <div css={styles.fileLine}>
                                <div css={styles.fileName}>{file.name}</div>
                                <IconClose css={styles.closeIcon} onClick={(e) => removeFile(file, e)} />
                            </div>
                            <div css={styles.fileLine}>
                                <div css={styles.fileSize}>{bytesFormatter(file.size)}</div>
                                <div css={styles.fileSize}>100%</div>
                            </div>
                        </div>
                    </div>
                    <div css={styles.progressBar}></div>
                </Fragment>
            )),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [files, renderFile]
    )

    useEffect(() => {
        // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
        return () => files.forEach((file: any) => URL.revokeObjectURL(file.preview))
    }, [files])

    return (
        <div>
            <div {...getRootProps({ className: 'dropzone' })} css={[styles.dropzoneContainer, smallPadding && styles.smallPadding]}>
                <input {...getInputProps()} />
                {thumbs.length !== maxFiles && (
                    <div css={styles.placeholder}>
                        <IconFileUpload {...convertSize(50)} />

                        <p css={styles.placeholderText}>{title}</p>
                        {description && <p css={styles.placeholderDescription}>{description}</p>}
                    </div>
                )}

                {renderThumbs && thumbs && <aside>{thumbs}</aside>}
            </div>
            {fileRejections.length > 0 && (
                <div css={styles.fileRejections}>
                    {fileRejections.map((file, key) => (
                        <div css={styles.rejectedFile} key={key}>
                            {file.file.name}:
                            {file.errors.map((e, j) => (
                                <span key={j}>{e.message}</span>
                            ))}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

Dropzone.displayName = 'Dropzone'

export default Dropzone
