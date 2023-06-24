import React from 'react';
import styles from "./NavbarApp.module.scss";
import menuImg from "./menu.png";
const NavbarApp = () => {
  return (
    <div className={styles.navbar}>
        <div className={styles.menu}>
            <img src={menuImg} alt="" />
            <div className={styles.menu_list}>
                <a href="">Information</a>
                <a href="">Gallery</a>
                <a href="">Contact</a>
                <a href="">Resume</a>
                <a href="">Facebook</a>
            </div>
        </div>
    </div>
  )
}

export default NavbarApp;