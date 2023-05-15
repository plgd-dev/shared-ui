import React, { cloneElement, FC } from 'react'
import { Props, defaultProps } from './Swiper.types'
import { Swiper as SwiperBase, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper'
import * as styles from './Swiper.style'

import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'

const Swiper: FC<Props> = (props) => {
    const { alignItems, delay, slides } = { ...defaultProps, ...props }
    return (
        <div className={props.className} css={styles.Swiper(alignItems || 'center')} style={{ width: '100%' }}>
            <SwiperBase
                autoplay={{
                    delay,
                    disableOnInteraction: true,
                }}
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                slidesPerView={1}
                spaceBetween={0}
            >
                {slides.map((slide, i) => (
                    <SwiperSlide key={i}>{({ isActive }) => cloneElement(slide as any, { isActive })}</SwiperSlide>
                ))}
            </SwiperBase>
        </div>
    )
}

Swiper.displayName = 'Swiper'

export default Swiper
