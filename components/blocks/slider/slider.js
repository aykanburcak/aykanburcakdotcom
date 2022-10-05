import styles from './slider.module.scss'
import {useThemeContext} from "../../../context/theme";
import {useEffect, useRef, useState} from "react";
import GradientAnimation from "@/components/gradient-animation/gradient-animation";
import TextTransition, { presets } from "react-text-transition";
import useTranslation from 'next-translate/useTranslation'

export const Slider = ({slides}) => {
  const {t} = useTranslation('common')
  const [settings, setSettings] = useThemeContext()
  const [index, setIndex] = useState(0)
  const slideTexts = slides.map((slide) => {
    return slide.title
  })

  useEffect(() => {
    const intervalId = setInterval(() =>
        setIndex(index => index + 1),
      3000
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className={styles.slider}>
      {settings.site_name && (
        <>
          <div className={styles.slider__siteName}>
            {settings.site_name}
          </div>
          <div className={styles.slider__siteNameOverlay} aria-hidden>
            {settings.site_name}
          </div>
        </>
      )}

      <GradientAnimation />

      {slides && (
        <div className={styles.slider__wrapper}>
          <div className={styles.slider__singleSubtitle}>
            <TextTransition
              className={styles.slider__singleSubtitleTransition}
              inline
              springConfig={presets.gentle}>
              {slideTexts[index % slideTexts.length]}
            </TextTransition>
            {t('developer')}
          </div>
        </div>
      )}
    </div>
  )
}
