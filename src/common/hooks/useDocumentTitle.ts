import { useRef } from 'react'

import { useIsomorphicLayoutEffect, useUnmount } from 'usehooks-ts'

type UseDocumentTitleOptions = {
    preserveTitleOnUnmount?: boolean
}

export function useDocumentTitle(title: string, options: UseDocumentTitleOptions = {}): void {
    const { preserveTitleOnUnmount = true } = options
    const defaultTitle = useRef<string | null>(null)

    useIsomorphicLayoutEffect(() => {
        defaultTitle.current = window.document.title
    }, [])

    useIsomorphicLayoutEffect(() => {
        if (title) {
            const titleSuffix = document.body.getAttribute('data-plgd-title-suffix')
            window.document.title = titleSuffix ? `${title} | ${titleSuffix}` : title
        }
    }, [title])

    useUnmount(() => {
        if (!preserveTitleOnUnmount && defaultTitle.current) {
            window.document.title = defaultTitle.current
        }
    })
}
