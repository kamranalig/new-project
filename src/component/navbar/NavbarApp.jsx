import React from 'react';
import styles from "./NavbarApp.module.scss";
import menuImg from "/menu.png";
const NavbarApp = () => {
  return (
    <div className={styles.navbar}>
        <div className={styles.menu}>
            <img src={menuImg} alt="" />
            <div className={styles.menu_list}>
                <a >Information</a>
                <a >Gallery</a>
                <a >Contact</a>
                <a >Resume</a>
                <a >Facebook</a>
            </div>
        </div>
    </div>
  )
}

export default NavbarApp;