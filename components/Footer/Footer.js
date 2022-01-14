import React from "react";

const Footer = () => {
  let currentYear = new Date().getFullYear();

  return (
    <div className=" bg-zinc-600">
      {/* Companies list section */}
      <div className="w-full flex justify-around py-10 border-b-2 border-gray-300 px-2 sm:px-8 md:px-24 lg:px-44 ">
        <a href="http://jarus-rpas.org/" target="_blank">
          <img
            className="pt-2 sm:h-7 h-5 w-20 sm:w-28"
            src="../img/contact/jarus.png"
            alt="UAS-logo"
          />
        </a>
        <a href="https://www.icao.int/Pages/default.aspx" target="_blank">
          <img
            className="sm:h-8 sm:w-28 h-6 w-20"
            src="../img/contact/icao.png"
            alt="UAS-logo"
          />
        </a>
        <a href="https://www.eurocontrol.int/" target="_blank">
          <img
            className="sm:h-8 sm:w-30 h-6 w-26"
            src="../img/contact/eurocontrol.png"
            alt="UAS-logo"
          />
        </a>
        <a href="https://www.easa.europa.eu/" target="_blank">
          <img
            className="sm:h-8 sm:w-30 h-6 w-22"
            src="../img/contact/easa.png"
            alt="UAS-logo"
          />
        </a>
        <a href="https://gcaa.ge/" target="_blank">
          <img
            className="sm:h-9 sm:w-30 h-6 w-18"
            src="../img/contact/logoWhite.png"
            alt="UAS-logo"
          />
        </a>
      </div>
      {/* Companies list section END */}
      {/* Main Section */}
      <div className="flex flex-col py-10 px-12">
        <h2 className="text-zinc-400 text-center text-xl font-bold">
          სამოქალაქო ავიაციის სააგენტო უპილოტო საჰაერო სისტემების და საერთო
          დანიშნულების ავიაციის დეპარტამენტი
        </h2>
        {/* Contact Section */}
        <div className="flex lg:flex-row flex-col items-center pt-12 ">
          <div class="text-zinc-300 px-20 py-10 ">
            <div>
              <h6 class=" uppercase  mb-4 flex justify-center font-bold md:justify-start">
                კონტაქტი
              </h6>
              <p class=" uppercase  mb-4 flex justify-center  md:justify-start">
                სამოქალაქო ავიაციის სააგენტო:
              </p>
              <p class="flex items-center justify-center md:justify-start mb-4">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="home"
                  class="w-6 mr-3"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="currentColor"
                    d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
                  ></path>
                </svg>
                0114, თბილისი, I ხეივნის ქუჩის დასაწყისი
              </p>
              <p class="flex items-center justify-center md:justify-start mb-4">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="envelope"
                  class="w-4 mr-4"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                  ></path>
                </svg>
                office@gcaa.ge
              </p>
              <p class="flex items-center justify-center md:justify-start mb-4">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="phone"
                  class="w-4 mr-4"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
                  ></path>
                </svg>
                (+995 32) 2 94 80 14
              </p>
            </div>
            <div>
              <p class=" uppercase pt-4 mb-4 flex justify-center  md:justify-start">
                დეპარტამენტის უფროსი:
              </p>
              <p class="flex items-center justify-center md:justify-start mb-4 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                    clip-rule="evenodd"
                  />
                </svg>
                აკაკი მაისაია
              </p>
              <p class="flex items-center justify-center md:justify-start mb-4">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="envelope"
                  class="w-4 mr-4"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                  ></path>
                </svg>
                UAS-GA@gcaa.ge
              </p>
            </div>
            <p class="flex items-center justify-center md:justify-start mb-4">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="phone"
                class="w-4 mr-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
                ></path>
              </svg>
              (+995 32) 2 94 80 10 (შიდა ნომერი 106)
            </p>
          </div>
          {/* Contact Section END */}
          {/* Google map Section */}
          <div className="lg:w-4/6 w-full p-0 lg:p-10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2979.9146453342273!2d44.82634175102188!3d41.67918678571564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440db6935026f1%3A0x285e7e51c0c97678!2z4YOh4YOh4YOY4YOeIOGDoeGDkOGDm-GDneGDpeGDkOGDmuGDkOGDpeGDnSDhg5Dhg5Xhg5jhg5Dhg6rhg5jhg5jhg6Eg4YOh4YOQ4YOQ4YOS4YOU4YOc4YOi4YOd!5e0!3m2!1sen!2sge!4v1642164558292!5m2!1sen!2sge"
              width="100%"
              height="350"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
          {/* Google map Section END */}
        </div>
      </div>
      {/* Main Section */}
      {/* Footer Section */}
      <footer className="text-center bg-gray-700 text-zinc-400 ">
        <div className="flex justify-around h-20 pt-4 ">
          <div className="text-center p-4  text-sm ">
            © საქართველოს სამოქალაქო ავიაციის სააგენტო {currentYear}
          </div>
          <div className="pt-1 pr-3">
            <a
              href="https://www.facebook.com/GeorgianAviation"
              target="_blank"
              type="button"
              className="rounded-full border-2 border-zinc-400 text-zinc-400 leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-7 h-7 m-1"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="facebook-f"
                className="w-2 h-full mx-auto"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
      {/* Footer Section END */}
    </div>
  );
};

export default Footer;
