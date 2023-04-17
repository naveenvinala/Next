import styles from "./Header.module.scss";
import Image from "next/image";
import logo from "public/img/NV.jpeg";
import Link from "next/link";

const Header = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.title}>
        <Image src={logo} alt="logo" height={100} width={150} />
      </div>
      <div className={styles.links}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
