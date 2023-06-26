import React from 'react';
import styles from "./Sidebar.module.scss";
import logo from "/logo.svg";
const Sidebar = () => {
  return (
    <div className={styles.sidebar_wrapper}>
        <div className={styles.sidebar}>
            <img src={logo} alt="logo" />
            <div className={styles.sidebar_menu_items}>
                <h5>➤ EDUCATION GALLERY</h5>
                <h5>➤ EDUCATION BROCHURE</h5>
                <ul className={styles.dropdown_menu}>
                    <li className={styles.list}>
                        <span>➤ EXPERIENCE</span>
                        <ul className={styles.child_menu}>
                            <li>Memberships</li>
                            <li>Training & Seminars</li>
                            <li>Clearance / Insurance</li>
                        </ul>
                        <li className={styles.item}>➤ PERMITS</li>
                    </li>
                </ul>
            </div>
            <div className={styles.side_footer}>
                <p className={styles.name}>ALISSA PENDORF</p>
                <p className={styles.subtext}>ENVIRONMENTAL EDUCATOR</p>
                <p className={styles.email}>education@discoverybynature.com</p>
            </div>
        </div>
        <div className={styles.border}></div>
    </div>
  )
}

export default Sidebar;