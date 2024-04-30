import { FC } from 'react'
import { motion } from 'framer-motion'
import { Props, defaultProps } from './Backdrop.types'
import * as styles from './Backdrop.styles'

const Backdrop: FC<Props> = (props) => {
    const { children, onClick, zIndex } = { ...defaultProps, ...props }
    return (
        <motion.div
            animate={{ opacity: 1 }}
            css={styles.blackDrop(zIndex)}
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            onClick={onClick}
            transition={{
                duration: 0.25,
            }}
        >
            {children}
        </motion.div>
    )
}

Backdrop.displayName = 'Backdrop'

export default Backdrop
