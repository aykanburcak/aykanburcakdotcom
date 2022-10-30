import styles from './contact-form.module.scss'
import buttonStyles from '../button/button.module.scss'
import {useState} from "react";
import useTranslation from 'next-translate/useTranslation'
import { ToastContainer, toast } from 'react-toastify';

export default function ContactForm() {
  const {t} = useTranslation('common')
  const [values, setValues] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      })
      if(res.ok) {
        setValues({
          name: '',
          email: '',
          subject: '',
          message: '',
        })
        toast.success(t('messageSuccessful'))
      }
    } catch (error) {
      toast.error(t('messageError'))
    }
  }

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <div className={styles.contactForm__formGroup}>
        <input
          type="text"
          name="name"
          className={styles.contactForm__input}
          value={values.name}
          placeholder={t('name')}
          onChange={handleChange}
          required
        />
        <label className={styles.contactForm__label}>
          {t('name')}
        </label>
      </div>
      <div className={styles.contactForm__formGroup}>
        <input
          type="email"
          name="email"
          className={styles.contactForm__input}
          value={values.email}
          placeholder={t('email')}
          onChange={handleChange}
          required
        />
        <label className={styles.contactForm__label}>
          {t('email')}
        </label>
      </div>
      <div className={styles.contactForm__formGroup}>
        <input
          type="text"
          name="subject"
          className={styles.contactForm__input}
          value={values.subject}
          placeholder={t('subject')}
          onChange={handleChange}
          required
        />
        <label className={styles.contactForm__label}>
          {t('subject')}
        </label>
      </div>
      <div className={styles.contactForm__formGroup}>
        <textarea
          className={styles.contactForm__input}
          name="message"
          cols={40}
          rows={10}
          value={values.message}
          placeholder={t('message')}
          onChange={handleChange}
          required
        />
        <label className={styles.contactForm__label}>
          {t('message')}
        </label>
      </div>
      <div className="text-center">
        <button
          type="submit"
          className={`${buttonStyles.button} ${buttonStyles.buttonGreen}`}>
          {t('send')}
        </button>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    </form>
  )
}
