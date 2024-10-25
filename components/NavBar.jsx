import styles from "../styles/navbar.module.css"
import Link from "next/link"

function NavBar() {
  return (
    <div>
        <ul className={styles.ul}>
            <li className={styles.li}><Link className={styles.a} href="/">Home</Link></li>
            <li className={styles.li}><Link className={styles.a} href="/feedback">Feedback</Link></li>
            <li className={styles.li}><Link className={styles.a} href="/contact">Contact</Link></li>
            <li className={styles.li}><Link className={styles.a} href="/about">About</Link></li>
        </ul>
    </div>
  )
}

export default NavBar