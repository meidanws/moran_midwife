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
          style="color:#dfb2b2"
          :class="{ pgray: !nightMode, 'text-light': nightMode }"
          >קצת עליי</span
        >
      </div>
      <hr
        width="50%"
        :class="{ pgray: !nightMode, 'bg-secondary': nightMode }"
      />

      <div class="row" style="justify-content: center; text-align: center;">
        <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12">
          <RoughNotation
            :is-show="true"
            :animate="true"
            :animationDuration="1000"
            color="#d6c6c685"
            type="highlight"
            :iterations="4"
          >
            <h3>?אז איך הפכתי להיות מיילדת</h3>
          </RoughNotation>
          <p style="text-align: right; margin-top: 15px;">
            בזכרונות הילדות שלי, כילדה קטנה, נהגתי לשים כרית בתוך החולצה ולשחק
            במשחקי דמיון שיש לי תינוק בבטן, נמשכתי לתינוקות ותמיד השתוקקתי
            להחזיק אותם, ללטף ולהיות בסביבתם. כל אישה בהריון נראתה לי כמו פלא,
            ונשאבתי לאזור שלה בסקרנות. ‎כשקצת גדלתי הבנתי שלא טעיתי- ואכן מדובר
            בפלא! באזור גיל הנעורים החלטתי, שאני רוצה להיות מיילדת. להיות שותפה
            לרגע הבריאה הזה, להיות חלק מהפלא ‎לימים ילדתי גם בעצמי בלידה שהפכה
            מבחינתי לרגע מכונן שחיזק את הרצון להפוך למיילדת. ‎את לידתי השניה כבר
            ילדתי כמיילדת בעצמי, חוויה מעצימה לא פחות. ‎היום אני יכולה לומר
            שהדרך הייתה שווה, ושמזל שהקשבתי ללב שלי ‎לפעמים אני נהנית מהמחשבה
            שכבר יש בית ספר שלם של ילדים שאני יילדתי… וזו הנחת שלי
          </p>
          <svg
            xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
            xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:dc="http://purl.org/dc/elements/1.1/"
            xmlns:ns1="http://sozi.baierouge.fr"
            xmlns:cc="http://web.resource.org/cc/"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
            version="1.0"
            class="bounce2"
            style="height: 50px; width: 50px;"
            viewBox="0 0 1024.000000 640.000000"
          >
            <g transform="translate(0 640) scale(0.1 -0.1)" fill="#dfb2b2">
              <path
                d="m4410 5799c-98-11-252-43-332-69-264-89-506-296-689-590-139-224-208-430-247-732l-7-58-50 62c-137 167-384 327-636 411-290 98-542 101-799 12-529-184-842-568-949-1163-42-233-51-598-20-821 34-243 161-491 332-647 130-118 332-230 527-293 126-40 930-244 1680-426 395-96 697-224 950-403 103-73 280-242 325-310 15-23 29-41 31-39s-12 48-32 102c-150 419-114 828 110 1261 48 92 322 493 338 494 3 0 68-80 144-178 76-97 199-253 274-347 230-287 334-443 446-662 130-258 201-514 207-751 1-55 3-99 4-98s19 49 39 106c84 244 179 397 353 570 137 137 274 232 466 325 116 57 187 80 645 215 834 245 959 288 1175 407 371 206 622 476 829 894 129 260 171 486 131 710-68 390-346 714-798 929-152 73-269 101-444 107-157 6-256-5-403-43-299-78-546-213-751-411l-106-103-7 103c-12 183-61 351-161 546-143 279-354 495-589 601-176 80-409 130-599 130-113-1-266-23-382-56l-61-17-61 42c-234 159-547 227-883 190zm246-260c42-6 114-21 160-35 87-25 224-82 224-93 0-4-39-36-87-71-222-164-509-490-656-746-162-280-195-588-95-894 63-195 148-333 434-705 110-143 203-266 208-272 4-8-54-100-157-245-184-262-230-337-280-458-71-172-97-306-97-500 0-178 38-387 95-524 20-47 14-57-10-19-32 49-168 183-250 247-175 136-360 231-630 323-55 19-467 126-916 238-897 224-945 240-1155 366-285 172-442 383-505 676-43 200-36 594 16 850 107 523 439 879 953 1020 84 24 116 27 242 27 204 1 360-39 565-141 163-82 331-214 410-322 17-22 33-41 36-41s9 39 12 88c22 294 185 642 416 884 206 216 405 312 736 351 69 9 259 6 331-4zm1305-139c185-19 387-78 524-155 236-132 441-398 540-700 34-104 65-274 65-360v-48l103 99c169 163 336 262 572 340 184 60 283 77 450 77 165-1 278-26 420-92 309-145 527-347 651-606 66-139 88-235 88-390 1-139-12-213-60-347-61-169-223-442-354-595-165-194-427-370-709-478-77-29-522-166-1186-366-234-70-364-133-521-255-197-153-339-355-445-639l-34-90-6 115c-18 314-156 656-403 1e3 -33 47-188 248-344 448l-282 362 169 238c278 392 372 548 454 757 96 242 131 427 131 685-1 362-68 670-194 887-21 37-37 70-34 74 8 14 146 36 285 48 9 0 63-4 120-9zm-635-234c157-206 238-516 238-906 0-127-5-201-18-270-39-204-148-475-263-655-60-93-332-483-341-489-8-4-268 327-320 408-103 158-197 390-227 559-23 128-16 308 15 417 56 197 213 441 438 681 123 131 384 337 415 326 7-2 35-34 63-71z"
              />
            </g>
          </svg>

          <!-- <Timeline :data="education" :nightMode="nightMode" /> -->
        </div>
        <!-- <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12">
          <Timeline :data="experience" :nightMode="nightMode" />
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import Timeline from "./helpers/Timeline";
import info from "../../info";

export default {
  name: "About",
  components: {
    Timeline,
  },
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      education: {
        title: "education",
        data: info.education,
      },
      experience: {
        title: "experiences",
        data: info.experience,
      },
    };
  },
};
</script>

<style scoped>
.title {
  font-size: 30px;
  font-weight: 500;
}

.bounce2 {
  animation: bounce2 3s ease infinite;
}
@keyframes bounce2 {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}
</style>
