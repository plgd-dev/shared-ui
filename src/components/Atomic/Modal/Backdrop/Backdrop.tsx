import { FC } from 'react'
import { motion } from 'framer-motion'
import { Props } from './Backdrop.types'
import * as styles from './Backdrop.styles'

const Backdrop: FC<Props> = (props) => {
    const { children, onClick } = props
    return (
        <motion.div
            animate={{ opacity: 1 }}
            css={styles.blackDrop}
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
