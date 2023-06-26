import React from 'react';
import styles from "./Section.module.scss";
const Section = () => {
  return (
        <div className={styles.section} id={styles.section_id}>
            <div className={styles.container}>
              <div className={styles.card_container}>
                <div>
                  <div className={styles.card}>
                    <div className={styles.card_header}>
                      <h3>Welcome!</h3>
                      <p>My name is <b>Alissa Pendorf</b>, and I’m the founder of Discovery By Nature.
                         My mission is to encourage <b>appreciation and conservation of nature</b>
                        through interactive, place-based <b>educational programs</b> . With self-
                        developed curricula, materials, and activities, my goal is to introduce
                      students of all ages to the many <b>wonders of the natural world</b>. In an time
                       when environmental education has become a priority, cultivating an
                        understanding of Earth's ecology can serve as a <b>powerful catalyst</b> for
                         promoting conservation and sustainability throughout all generations.</p>
                    </div>
                  </div>
                    <div className={styles.card_footer}>
                      <span>➤ ABOUT</span>
                      <span>  ➤ TESTIMONIALS  </span>
                    </div>
                </div>
              </div>
            </div>
        </div>
  )
}

export default Section;