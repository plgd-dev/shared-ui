import React, { cloneElement, FC } from 'react'
import { Props } from './Swiper.types'
import { Swiper as SwiperBase, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper'
import * as styles from './Swiper.style'

import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'

const Swiper: FC<Props> = (props: Props) => {
    const { slides } = props
    return (
        <div className={props.className} css={styles.Swiper} style={{ width: '100%' }}>
            <SwiperBase
                autoplay={{
                    delay: 2500,
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
