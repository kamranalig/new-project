import React from 'react';
import Slider from "react-slick";
import styles from "./slider.module.scss";
const slider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div className={styles.container_fluid}>

    <div className={styles.container}>

    <Slider {...settings} className={styles.slider}>
      <div>
        <p>I’ve had the gift of watching Alissa share her passion for birds with visitors of all ages at The Arboretum at Penn State. Alissa is articulate, organized and responsive in her approach in both formal and experiential presentations. She is a true asset to our educational programs.</p>
      </div>
      <div>
        <p>Alissa has been amazing in introducing our youth group to birds. Her presentations are fun and educational and have increased the girls' interest in birds and their habitats. We are especially appreciative of Alissa’s nestbox knowledge and monitoring instructions; doing nest checks has become the highlight of each week. The girls are looking forward to posting their observations online at the end of the summer as citizen scientists!</p>
      </div>
      <div>
        <p>My summer camp students were so inspired by your captivating and creative programs. We all loved learning about animals, their habitats, and the impact that people have on the environment. You are extremely talented in working with children and provided us with an outstanding experience. We look forward to working with you again.</p>
      </div>
      <div>
        <p>Thank you for presenting to Navigator Scouts last week. Part of our core mission is to spend time outdoors and to protect our planet, which can only be achieved by understanding the Earth's ecosystems and wildlife. Your program helped our chapter to learn about animal migration and how we can assist birds in their seasonal journey. Thank you again for such a wonderful presentation.</p>
      </div>
      <div>
        <p>Our school has been involved with Alissa on a weekly basis for several years, and my students are always eager to learn about what is presented. Through the use of children's literature, hands-on materials, and interactive games, the children are always encouraged to learn through observation and discussion. These programs have been a wonderful addition to our science curriculum, and have inspired our classes to document and chart what they see in nature, both in school and at home.</p>
      </div>
      <div>
        <p>Alissa has become a familiar face at Stone Valley Community Charter School. Our students are always excited to hear that she is coming to do a presentation for our Environmental Science Curriculum. So, I asked her to be a guest at our Summer Library Program. With a presentation that she customized to fit our summer theme, she provided a hands-on experience that engaged the full age range of our elementary students. Since her visit, there has been an outpouring of positive feedback from students, parents, and staff members alike.</p>
      </div>
    </Slider>
    <div className={styles.slider_footer}>
        <span>About</span>
        <span>Testimonail</span>
    </div>
  </div>
    </div>
  )
}

export default slider;