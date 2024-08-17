<template>
  <div class="resumes2024">
    <header class="container">
      <h1>
        <p data-aos="fade-right">VITO</p>
        <img data-aos="zoom-in" src="../assets/images/Resumes2024/vito.png" width="636" class="d-block mx-auto" alt="">
        <p data-aos="fade-left" data-aos-offset="300" class="text-end">RESUME</p>
      </h1>
    </header>
    <section class="intro intro-bg">
      <div class="container">
        <p data-aos="fade-left" data-aos-offset="300" class="intro-content ms-auto">
          I'm Vito, a UI Designer with 5+ years of experience. I create visually appealing interfaces for web and mobile
          apps. Proficient in Sketch, Adobe XD, Figma, HTML, CSS, and JavaScript. I enjoy collaborating with others to
          create high-quality products.
        </p>
      </div>
    </section>
    <section class="experience">
      <ul class="container">
        <!---->
        <li data-aos="fade-up" data-aos-offset="300" class="experience-item">
          <h2>Vito Evans</h2>
          <ul>
            <li>456 Walnut Avenue, Someville, USA</li>
            <li>+1 123 456 7890</li>
            <li>info@hexschool.com</li>
            <li>www.infohexschool.com</li>
          </ul>
        </li>
        <!---->
        <li data-aos="fade-up" data-aos-offset="300" class="experience-item">
          <h2>Education</h2>
          <ul>
            <li>
              <p class="experience-item-period">2014-2018</p>
              Bachelor of Science in Business Administration, University of California, Los Angeles
            </li>
            <li>
              <p class="experience-item-period">2012-2014</p>
              Associate of Arts in Graphic Design, San Francisco State University
            </li>
            <li>
              <p class="experience-item-period">2008-2012</p>
              High School Diploma, Lincoln High School
            </li>
          </ul>
        </li>
        <!---->
        <li data-aos="fade-up" data-aos-offset="300" class="experience-item">
          <h2>Work</h2>
          <ul>
            <li>
              <p class="experience-item-period">2018-2021</p>
              Marketing Manager, ABC Company
            </li>
            <li>
              <p class="experience-item-period">2016-2018</p>
              Sales Associate, XYZ Corporation
            </li>
            <li>
              <p class="experience-item-period">2014-2016</p>
              Customer Service Representative, QRS Inc.
            </li>
          </ul>
        </li>
        <!---->
        <li data-aos="fade-up" data-aos-offset="300" class="experience-item">
          <h2>Awards</h2>
          <ul>
            <li>Best in Show Award, National Advertising Awards, 2020</li>
            <li>Honorable Mention, International Design Competition, 2019</li>
            <li>People's Choice Award, Local Art Exhibition, 2018</li>
          </ul>
        </li>
        <!---->
      </ul>
    </section>
    <footer class="bg-dark">
      <div class="footer-content text-center">
        <img src="../assets/images/Resumes2024/fb.png" class="d-inline-block" alt="facebook">
        <img src="../assets/images/Resumes2024/instagram.png" class="d-inline-block" alt="instagram">
        <img src="../assets/images/Resumes2024/line.png" class="d-inline-block" alt="line">
      </div>
    </footer>
  </div>
</template>

<script setup>
</script>

<style scoped>
.resumes2024 {
  font-family: "Castoro", serif;
  font-weight: 400;
  font-style: normal;
  line-height: 1.5;
}


/* header */
.resumes2024 header h1 {
  font-size: 128px;
}

/* --==========-- */


/* intro */
.resumes2024 .intro {
  margin-bottom: 80px;
}

.resumes2024 .intro-bg {
  background-color: #efefef;
  ;
}

.resumes2024 .intro-content {
  max-width: 636px;
  padding: 48px 0;
  font-size: 32px;
}

/* --==========-- */


/* experience */
.experience .experience-item {
  width: 50%;
}

.experience .experience-item:not(:last-child) {
  margin-bottom: 40px;
}

.experience .experience-item h2 {
  color: #AE0000;
  font-size: 40px;
  border-bottom: #AE0000 3px solid;
  margin-bottom: 16px;
}

.experience .experience-item ul>li {
  font-size: 24px;
}

.experience .experience-item ul>li:not(:last-child) {
  margin-bottom: 8px;
}

.experience .experience-item .experience-item-period {
  font-size: 20px;
  font-style: italic;
  color: #949494;
}

/* --==========-- */


/* footer */
.resumes2024 footer {
  margin-top: 160px;
}

.resumes2024 .footer-content {
  padding: 40px 0;
}

.resumes2024 footer img:not(:last-child) {
  margin-right: 40px;
}

/* --==========-- */
</style>