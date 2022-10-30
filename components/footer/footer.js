import styles from './footer.module.scss'
import Container from '@/components/container/container'
import {getYear} from "../../utils";
import useTranslation from 'next-translate/useTranslation'
import ContactForm from "@/components/contact-form/contact-form";
import {LinkedinIcon, TwitterIcon, InstagramIcon} from "../../assets/icons";

export default function Footer({settings}) {
  const {t} = useTranslation('common')

  return (
    <footer>
      <section className={styles.footer__form}>
        <Container>
          <h3 className="h2 text-center">{t('contact')}</h3>
          <ContactForm />
        </Container>
      </section>
      <Container>
        <div className={styles.footer__bottom}>
          {settings?.copyright && (
            <div className={styles.footer__copyright}>
              {settings.copyright} {getYear()}
            </div>
          )}
          {(settings?.linkedin || settings?.twitter || settings?.instagram) && (
            <div className={styles.footer__social}>
              {settings?.linkedin && (
                <a href={settings?.linkedin} target="_blank">
                  <LinkedinIcon/>
                </a>
              )}
              {settings?.instagram && (
                <a href={settings?.instagram} target="_blank">
                  <InstagramIcon/>
                </a>
              )}
              {settings?.twitter && (
                <a href={settings?.twitter} target="_blank">
                  <TwitterIcon/>
                </a>
              )}
            </div>
          )}
        </div>
      </Container>
    </footer>
  )
}
