// TheLayout.js

import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Loader from "../../components/Loader/Loader";

function TheLayout() {
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const simulateContentLoading = () => {
      const interval = setInterval(() => {
        setLoadingProgress((prevProgress) => {
          const newProgress = prevProgress + 1;
          if (newProgress === 100) {
            clearInterval(interval);
          }
          return newProgress;
        });
      }, 50);
    };

    simulateContentLoading();
  }, []);

  return (
    <>
      {loadingProgress < 100 ? (
        <Loader />
      ) : (
        <>
          <Header />
          <div className="main_content_section">
            <Outlet />
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

export default TheLayout;
