import styles from './footer.module.scss'
import Container from '@/components/container/container'
import {getYear} from "../../utils";
import useTranslation from 'next-translate/useTranslation'
import ContactForm from "@/components/contact-form/contact-form";

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
        {settings?.copyright && (
          <div>{settings.copyright} {getYear()}</div>
        )}
      </Container>
    </footer>
  )
}
