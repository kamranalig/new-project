import React from 'react';
// import Navbar from './component/Navbar';
import NavbarApp from './component/navbar/NavbarApp';
import Sidebar from './component/sidebar/Sidebar';
import styles from "./App.module.scss";
function App() {
  return (
    <React.Fragment>
      <NavbarApp/>
      <div className={styles.about}>
      <Sidebar/>
      </div>
    {/* <Navbar/> */}
    </React.Fragment>
  )
}

export default App;
