import styles from './header.module.scss'
import Link from 'next/link'
import Image from "next/image";
import {fetchApi} from "../../services";
import {useEffect, useState} from "react";
import {getStrapiMedia} from "../../utils";

export default function Header({settings}) {
  const [menu, setMenu] = useState([])
  useEffect(() => {
    fetchApi(`menus/2?populate=*`)
      .then((res) => {
        setMenu(res.attributes.menu_item)
      })
  }, [])

  const menuItems = menu?.map((menuItem) =>
    <li key={menuItem.id}>
      <Link href={menuItem.link}>{menuItem.label}</Link>
    </li>
  )

  const logo = settings?.logo?.data?.attributes?.url

  return (
    <header className={styles.header}>
      {menu && (
        <ul className={styles.header__menu}>
          {menuItems}
        </ul>
      )}

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

      <div className={styles.header__languageSwitcher}>
        <Link href="/en">EN</Link>
      </div>

    </header>
  )
}
