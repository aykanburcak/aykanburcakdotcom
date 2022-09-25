import styles from './slider.module.scss'
import Image from "next/image";
import {getStrapiMedia} from "../../../utils";
import {useThemeContext} from "../../../context/theme";
import {useEffect, useRef, useState} from "react";

export const Slider = ({slides}) => {
  const [settings, setSettings] = useThemeContext()
  const [activeSlide, setActiveSlide] = useState(0)
  const prevActiveSlide = useRef()


  useEffect(() => {
    prevActiveSlide.current = activeSlide
    const interval = setInterval(() => {

      if (prevActiveSlide.current === slides.length -1) {
        setActiveSlide(0 )
      }

      if (activeSlide < slides.length - 1) {
        setActiveSlide((prevActiveSlide)=> prevActiveSlide + 1 )
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [activeSlide]);

  return (
    <div className={styles.slider}>
      {settings.site_name && (
        <div className={styles.slider__siteName}>
          {settings.site_name}
        </div>
      )}

      {slides && (
        <div className={styles.slider__wrapper}>
          {
            slides?.map((slide, index) =>
              <div key={slide.id}
                   className={`${styles.slider__single} ${activeSlide === index ? styles.slider__singleEnter : styles.slider__singleLeave}`}>
                <div className={styles.slider__singleSubtitle}>
                  {slide.title}
                </div>
                {slide.image && (
                  <div className={styles.slider__singleImage}>
                    <Image
                      priority
                      width={slide.image.data[0].attributes.width}
                      height={slide.image.data[0].attributes.height}
                      src={getStrapiMedia(slide.image.data[0].attributes.url)}/>
                  </div>
                )}
              </div>
            )
          }
        </div>
      )}
    </div>
  )
}
