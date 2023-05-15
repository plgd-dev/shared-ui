import { FC } from 'react'
import { motion } from 'framer-motion'
import { Props } from './Backdrop.types'
import * as styles from './Backdrop.styles'

const Backdrop: FC<Props> = (props) => {
    const { children, onClick } = props
    return (
        <motion.div
            onClick={onClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
                duration: 0.25,
            }}
            css={styles.blackDrop}
        >
            {children}
        </motion.div>
    )
}

Backdrop.displayName = 'Backdrop'

export default Backdrop
