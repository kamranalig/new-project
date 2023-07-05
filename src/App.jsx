import React from 'react';
// import styles from "./App.module.scss";
// import NavbarApp from './component/navbar/NavbarApp';
// import Sidebar from './component/sidebar/Sidebar';
// import Footer from './component/footer/Footer';
// import Section from './component/section/Section';
// import Slider from "./slider/slider"
import AppPopover from './component/popover/popover';
function App() {
  return (
    <React.Fragment>
      {/* <NavbarApp />
      <div className={styles.about}>
        <Sidebar />
        <div className={styles.border_line}></div>
        <Section/>
      </div>
      <Footer /> */}
      {/* <Slider/> */}
     <AppPopover />

    </React.Fragment>
  )
}

export default App;
