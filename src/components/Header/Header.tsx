import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeaderIcon from "../../../public/assets/icons/header_icon.png";
import styles from "../../styles/Header.module.css";

export const Header: React.FC = () => {
  return (
    <div className={styles.headerContainer}>
      <Image src={HeaderIcon} alt="Header Logo" />

      <hr className={styles.lineHeader} />

      <nav className={styles.navbarContainer}>
        <Link href={"/"} className={styles.navbarLink}>
          <span>00</span> Home
        </Link>
        <Link href={"/"} className={styles.navbarLink}>
          <span>01</span> Destination
        </Link>
        <Link href={"/"} className={styles.navbarLink}>
          <span>02</span> Crew
        </Link>
        <Link href={"/"} className={styles.navbarLink}>
          <span>03</span> Technology
        </Link>
      </nav>
    </div>
  );
};
