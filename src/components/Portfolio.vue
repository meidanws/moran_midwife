<template>
  <div
    class="py-4 p-st"
    :class="{
      'bg-light': !nightMode,
      'bg-dark2': nightMode,
      'text-light': nightMode,
    }"
  >
    <div class="container">
      <div
        class="text-center"
        data-aos="fade"
        data-aos-once="true"
        data-aos-duration="1000"
      >
        <span
          class="title text-center"
          :class="{ pgray: !nightMode, 'text-light': nightMode }"
          >הקורסים שלי</span
        >
      </div>
      <hr
        width="50%"
        :class="{ pgray: !nightMode, 'bg-secondary': nightMode }"
      />

      <vue-tabs :activeTextColor="!nightMode ? '#535A5E' : '#dfdfdf'">
        <!-- <v-tab title="design"> -->
        <div
          class="row"
          style="flex-direction: row-reverse;
"
        >
          <div
            v-for="(course, idx) in courses"
            :key="idx"
            :class="{ 'mt-2': idx === 0 ? true : true }"
            class="col-xl-4 col-bg-4 col-md-4 col-sm-4"
          >
            <div class="img-card iCard-style3">
              <div class="card-content">
                <div class="card-image" @click="showDesignModalFn(course)">
                  <span class="card-title">
                    {{ course.title }}
                  </span>
                  <img :src="getImgUrl(idx)" />
                </div>
              </div>

              <div class="card-link">
                <p>{{ course.date }}</p>

                <a
                  href="#"
                  title="Read Full"
                  @click="showDesignModalFn(course)"
                >
                  <span>הירשם</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <br />
      </vue-tabs>
    </div>
    <transition name="modal">
      <Modal
        :showModal="showModal"
        @close="closeModal"
        v-if="showModal"
        :portfolio="modal_info"
        :nightMode="nightMode"
      />
    </transition>
    <transition name="modal">
      <DesignModal
        :showModal="showDesignModal"
        @close="closeModal"
        v-if="showDesignModal"
        :link="selectedCourseSrc"
        :nightMode="nightMode"
      />
    </transition>
  </div>
</template>

<script>
import Card from "./helpers/Card";
import Modal from "./helpers/Modal";
import DesignModal from "./helpers/DesignModal";
import Carousel from "./helpers/Carousel";
import info from "../../info";
import { VueTabs, VTab } from "vue-nav-tabs";
import "vue-nav-tabs/themes/vue-tabs.css";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import VueRoughNotation from "vue-rough-notation";

export default {
  name: "Portfolio",
  components: {
    Card,
    Modal,
    VueTabs,
    VTab,
    VueperSlides,
    VueperSlide,
    DesignModal,
  },
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      all_info: info.portfolio,
      courses: info.courses,
      portfolio_info: [],
      showModal: false,
      showDesignModal: false,
      modal_info: {},
      design_modal_info: {},
      number: 3,
      showBtn: "show more",
      shower: 0,
      data: [
        '<div class="example-slide">Slide 1</div>',
        '<div class="example-slide">Slide 2</div>',
        '<div class="example-slide">Slide 3</div>',
      ],
      selectedCourseSrc: "",
    };
  },
  created() {
    for (var i = 0; i < this.number; i++) {
      this.portfolio_info.push(this.all_info[i]);
    }
  },
  watch: {
    number() {
      this.portfolio_info = [];
      for (var i = 0; i < this.number; i++) {
        this.portfolio_info.push(this.all_info[i]);
      }
    },
  },
  methods: {
    getImgUrl(idx) {
      return require(`../assets/designs/course-icon${idx}.jpeg`);
    },
    next() {
      this.$refs.flickity.next();
    },

    previous() {
      this.$refs.flickity.previous();
    },
    closeModal() {
      this.showModal = false;
      this.showDesignModal = false;
      document.getElementsByTagName("body")[0].classList.remove("modal-open");
    },
    showModalFn(portfolio) {
      this.modal_info = portfolio;
      this.showModal = true;
    },
    showDesignModalFn(course) {
      this.selectedCourseSrc = course.link;
      this.showDesignModal = true;
    },
    showMore() {
      if (this.number != this.all_info.length) {
        this.number += 3;

        window.scrollBy({
          top: document.getElementsByClassName("smcard")[0].clientHeight,
          behavior: "smooth",
        });

        if (this.number > this.all_info.length)
          this.number = this.all_info.length;
      }

      if (this.number == this.all_info.length && this.shower == 0) {
        this.shower = 1;
        this.showBtn = "show less";
      } else if (this.number == this.all_info.length && this.shower == 1) {
        var elementPosition = document.getElementById("portfolio").offsetTop;
        window.scrollTo({ top: elementPosition + 5, behavior: "smooth" });
        this.shower = 0;
        this.number = 3;
        this.showBtn = "show more";
      }
    },
  },
};
</script>

<style scoped>
.title {
  font-size: 30px;
  font-weight: 500;
  font-family: Georgia, "Times New Roman", Times, serif;
}
.title1 {
  font-size: 24px;
  font-weight: 400;
}

.title2 {
  text-align: end;
  font-size: 20px;
  font-weight: 400;
}

.title3 {
  font-size: 16px;
  font-weight: 400;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-popup {
  position: absolute;
  z-index: 2;
  margin-left: 25%;
}
.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.btn {
  border-color: #8585ad;
  color: #8585ad;
}

.btn:hover {
  background-color: #8585ad;
  border-color: #8585ad;
  color: white;
}

.btn:focus {
  background-color: #8585ad;
  border-color: #8585ad;
  color: white;
}

/deep/ .vue-tabs .nav-tabs {
  border: none;
  font-size: 20px;
  font-weight: 500;
  display: flex;

  justify-content: center;
}

/deep/ .vue-tabs .tabs__link {
  color: #a0a0a0;
}

/deep/ .vue-tabs .nav-tabs > li.active > a {
  background: transparent;
  border: none;
  transition: all 0.5s;
  padding-right: 0;
  padding-left: 0;
  margin-right: 15px;
  margin-left: 15px;
}

/deep/ .vue-tabs .nav-tabs > li > a:hover {
  background: transparent;
  color: #cbcbcb;
  transition: all 0.5s;
}

/deep/ .vue-tabs .nav-tabs > li > a {
  background: transparent;
  border: none;
  transition: all 0.5s;
}

/deep/ .vue-tabs .nav-tabs > li > a:after {
  content: "";
  width: 20%;
  position: absolute;
  bottom: 3px;
  border-width: 0 0 2px;
  border-style: solid;
  transition: all 0.5s;
}

/deep/ .vue-tabs .nav-tabs > li.active > a:after {
  width: 100%;
  transition: all 0.5s;
}

.design-img {
  width: 100%;
  border-radius: 15px;
  transition: all 0.5s;
}

.dimg {
  position: relative;
  border-radius: 15px;
}
.middle {
  transition: all 0.5s;
  opacity: 0;
  position: absolute;
  bottom: 0px;
  left: 70px;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
  padding: 20px;
}

.dimg:hover .design-img {
  position: relative;
  border-radius: 15px;
  opacity: 0.1;
  cursor: pointer;
}

.dimg:hover .middle {
  opacity: 1;
}

/deep/.vueperslide {
  border-radius: 10px !important;
  background: white;
}
/deep/.vueperslides__parallax-wrapper {
  border-radius: 10px !important;
  background: white;
}

.btn {
  border-color: #759cc9;
  color: #759cc9;
}

.btn:hover {
  background-color: #759cc9;
  border-color: #759cc9;
  color: white;
}

.btn:focus {
  background-color: #759cc9;
  border-color: #759cc9;
  color: white;
}
/deep/ .vueperslides__arrow {
  outline: none !important;
  border: none;
  color: grey;
}

.badge {
  background-color: #bbd4dd;
  transition: all 0.5s;
  font-weight: 500;
  font-size: 13px;
}

.bg-dark4 {
  background-color: #494e55 !important;
}

.date {
  font-size: 14px;
  font-weight: 400;
  opacity: 0.75;
}

.course-image:hover {
  cursor: pointer;
}

.zoom-img {
  position: absolute;
  background: #ffffff;
  border: 0.5px solid #ffffff;
  border-radius: 5px;
  margin: 5px;
}

.course-container {
  display: flex;
  justify-content: center;
}

/* Image Card */
.img-card {
  background: #ffffff;
  position: relative;
  border-radius: 5px;
  text-align: left;
  -webkit-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.3);
  -o-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.3);
}

.img-card .card-image {
  position: relative;
  margin: auto;
  overflow: hidden;
  border-radius: 5px 5px 0px 0px;
  height: 200px;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
}

.img-card .card-image img {
  border-radius: 5px 5px 0px 0px;
  -webkit-transition: all 0.8s;
  -moz-transition: all 0.8s;
  -o-transition: all 0.8s;
  transition: all 0.8s;
}

.img-card .card-image:hover img {
  cursor: pointer;
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
  -o-transform: scale(1.1);
  transform: scale(1.1);
}

.img-card .card-text {
  padding: 0 15px 15px;
  line-height: 1.5;
}

.img-card .card-link {
  padding: 20px 15px 30px;
  width: -webkit-fill-available;
}

.img-card .card-link a {
  text-decoration: none;
  position: relative;
  padding: 10px 0;
}

.img-card .card-link a:after {
  top: 30px;
  content: "";
  display: block;
  height: 2px;
  left: 50%;
  position: absolute;
  width: 0;
  -webkit-transition: width 0.3s ease 0s, left 0.3s ease 0s;
  -moz-transition: width 0.3s ease 0s, left 0.3s ease 0s;
  -o-transition: width 0.3s ease 0s, left 0.3s ease 0s;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
}

.img-card .card-link a:hover:after {
  width: 100%;
  left: 0;
}

.img-card.iCard-style3 {
  text-align: center;
}

.img-card.iCard-style3 .card-title {
  top: 85%;
  font-size: 14px;
  color: rgb(26, 26, 26);
  position: absolute;
  width: 100%;
  font-family: "Roboto", sans-serif;
  z-index: 1;
}

.img-card.iCard-style3 .card-text {
  color: #636060;
}

.img-card.iCard-style3 .card-link {
  border-top: 1px solid #e8e8e8;
}
.img-card.iCard-style3 .card-link a {
  color: #585858;
}
.img-card.iCard-style3 .card-link a:after {
  background: #585858;
}
</style>
