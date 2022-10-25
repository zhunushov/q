import React from "react";

export default function Navbar({ search, time }) {
  const { disabled } = search.props;
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="sticky top-0 flex flex-wrap items-center justify-between px-2 py-3 bg-stone-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <span className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white">
              Quest
            </span>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}>
              {!navbarOpen ? (
                <div className="space-y-2">
                  <div className="w-8 h-0.5 bg-gray-600"></div>
                  <div className="w-8 h-0.5 bg-gray-600"></div>
                  <div className="w-8 h-0.5 bg-gray-600"></div>
                </div>
              ) : (
                "X"
              )}
            </button>
          </div>

          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger">
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {disabled && (
                <li className="nav-item mr-40">
                  <span className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                    <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75">
                      <span className="ml-2"> через {time} сек</span>
                    </i>
                  </span>
                </li>
              )}
              {search}
              {/* <li className="nav-item">
                <span className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                  <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Share</span>
                </span>
              </li>
              <li className="nav-item">
                <span className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                  <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Tweet</span>
                </span>
              </li>
              <li className="nav-item">
                <span className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                  <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Pin</span>
                </span>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
