import styles from './header.module.scss'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return <div className={styles.header}>
    <Link href="/">
      <Image src="/logo.png" alt="logo" width="50" height="50" />
    </Link>
    <div className={styles.rightNavigation} >
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  </div>
}