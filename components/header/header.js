import styles from './header.module.scss'
import Link from 'next/link'
import Image from "next/image";
import {fetchMenu} from "../../services";
import {getStrapiMedia} from "../../utils";
import LanguageSwitcher from "@/components/language-switcher/language-switcher";
import {useLocale} from "../../hooks";
import {useQuery} from "@tanstack/react-query"

export default function Header({settings}) {
  const currentLocale = useLocale()

  const { data } = useQuery([`menu-${currentLocale}`], () =>
    fetchMenu('header', currentLocale)
      .then((res) => res.data[0])
  );

  const menuItems = data?.attributes?.menu_item.map((menuItem) =>
    <li key={menuItem.id}>
      <Link href={menuItem.link}>{menuItem.label}</Link>
    </li>
  )

  const logo = settings?.logo?.data?.attributes?.url

  return (
    <header className={styles.header}>
      {menuItems && (
        <ul className={styles.header__menu}>
          {menuItems}
        </ul>
      )}

      <div className={styles.header__languageSwitcher}>
        <LanguageSwitcher />
      </div>

      {logo && (
        <Link href="/">
          <div className={styles.header__logo}>
            <Image
              src={getStrapiMedia(logo)}
              alt=""
              width={55}
              height={53}
            />
          </div>
        </Link>
      )}

    </header>
  )
}
