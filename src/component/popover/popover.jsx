import React from 'react';
import { Button, Popover } from 'antd';
import styles from "./Pop.module.scss";
const content = (
  <div className={styles.container}>
    <p>Discovery By Nature, LLC is a proud member of the following:</p>
<p>North American Association of Environmental Educators (NAAEE)</p>
<p>National Start Alliance for Early Childhood Education</p>
<p>Pennsylvania Association of Environmental Educators (PAEE)</p>
  </div>
);

const AppPopover = () => (
  <Popover content={content} placement='right' className={styles.PopoverB_btn}>
    <a>Memberships</a>
  </Popover>
);

export default AppPopover;