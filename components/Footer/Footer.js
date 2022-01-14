import React from 'react'

const Footer = () => {
    let currentYear= new Date().getFullYear(); 
    
    return (
        <footer className="text-center bg-gray-800 text-zinc-400 ">
          <div className="flex justify-around h-28 pt-8 ">
          <div className="text-center p-4  text-sm ">
            © საქართველოს სამოქალაქო ავიაციის სააგენტო {currentYear}
          </div>
          <div className="pt-1">
            <a
              href="#!"
              type="button"
              className="rounded-full border-2 text-zinc-400 text-zinc-400 leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-7 h-7 m-1"
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
    )
}

export default Footer
