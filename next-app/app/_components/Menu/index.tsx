"use client";
import Link from "next/link";
import styles from "./index.module.css";
import Image from "next/image";
import { useState } from "react";

export default function Menu() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const open = () => {
    setOpen(true);
  };
  const close = () => {
    setOpen(false);
  };

  return (
    <div>
      <nav className={isOpen ? `${styles.nav} ${styles.open}` : styles.nav}>
        <button
          className={
            isOpen ? `${styles.button} ${styles.close}` : styles.button
          }
          onClick={close}
        >
          <Image src="/close.svg" alt="close" width={24} height={24} />
        </button>
        <ul className={styles.items}>
          <li>
            <Link href="/news">ニュース</Link>
          </li>
          <li>
            <Link href="/members">メンバー</Link>
          </li>
          <li>
            <Link href="/contact">お問い合わせ</Link>
          </li>
        </ul>
      </nav>
      <button className={styles.button} onClick={open}>
        <Image src="/menu.svg" alt="menu" width={24} height={24} />
      </button>
    </div>
  );
}
