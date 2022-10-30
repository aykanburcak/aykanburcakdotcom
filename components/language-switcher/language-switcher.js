import Link from 'next/link'
import {useLocale} from "../../hooks";

export default function LanguageSwitcher() {
  const currentLocale = useLocale();

  return (
    <>
      {currentLocale === 'en' && (
        <Link href="/" locale="tr">
          <a>TR</a>
        </Link>
      )}

      {currentLocale === 'tr' && (
        <Link href="/en" locale="en">
          <a>EN</a>
        </Link>
      )}
    </>
  )
}
