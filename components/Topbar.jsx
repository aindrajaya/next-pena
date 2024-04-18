import React, { useState } from "react";
import Sidebar from "./Sidebar";

const Topbar = ({
  isHomepage,
  currentLink,
  contents,
  onLinkClick,
  pathname,
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const hanldeToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="flex w-full md:hidden sticky transition-all top-0 z-10 border-b border-slate-200 py-3.5 px-8">
        <div className="flex flex-row gap-x-4">
          <span onClick={hanldeToggle}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 18L20 18"
                stroke="#000000"
                stroke-width="2"
                strokeLinecap="round"
              />
              <path
                d="M4 12L20 12"
                stroke="#000000"
                stroke-width="2"
                strokeLinecap="round"
              />
              <path
                d="M4 6L20 6"
                stroke="#000000"
                stroke-width="2"
                strokeLinecap="round"
              />
            </svg>
          </span>
          {isHomepage && <div>{contents[0]?.title}</div>}
          {!isHomepage && currentLink?.navigations?.length > 0 && (
            <div>
              {currentLink.title}              
            </div>
          )}
        </div>
      </div>
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 backdrop-filter backdrop-blur-md"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="fixed z-50 top-0 left-0 h-screen w-3/4">
          <Sidebar
            isHomepage={isHomepage}
            currentLink={currentLink}
            contents={contents}
            onLinkClick={onLinkClick}
            pathname={pathname}
          />
        </div>
      )}
    </>
  );
};

export default Topbar;
