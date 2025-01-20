import { ModeToggle } from "../mode-toggle";

export default function Navbar() {
  return (
    <>
      <header className="text-gray-600 dark:text-neutral-50 body-font dark:bg-neutral-950">
        <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 dark:text-neutral-50 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-gray-900 dark:bg-neutral-800 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span  className="ml-3 text-xl">DevSpectrum</span>
          </a>
          <nav className=" cursor-pointer md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l text-gray-400 md:border-gray-400 dark:md:border-neutral-50 flex flex-wrap items-center text-base justify-center font-semibold">
            <a className="mr-5 hover:text-gray-900 dark:hover:text-neutral-50">Overview</a>
            <a href="https://github.com/Rohan-Ver-ma/DevSpectrum" target="_blank" className="mr-5 hover:text-gray-900 dark:hover:text-neutral-50">Github</a>
            <a  href="https://x.com/rohans_twt" target="_blank" className="mr-5 hover:text-gray-900 dark:hover:text-neutral-50">Twitter/X</a>
          </nav>
          <div className="inline-flex items-center border-0 py-1 px-3 focus:outline-none dark:focus:bg-neutral-800 dark:focus:text-neutral-50 rounded text-base mt-4 md:mt-0">
            <ModeToggle />
          </div>
        </div>
      </header>
    </>
  );
}
