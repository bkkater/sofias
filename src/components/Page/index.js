import React from "react";

import Head from "next/head";
import Background from "../Background";
import Header from "../Header";

import "./styles.scss";

const Page = ({ className, title, children }) => {
  return (
    <>
      <Background />
      <div
        className={`container page d-flex flex-column flex-fill py-4 ${className}`}
      >
        {title && (
          <>
            <Header />

            <Head>
              <title>Sofias - {title}</title>
            </Head>

            <div className="page__header">
              <div className="page__title-section row">
                <div className="col-md-5">
                  <h4 className="page__title">{title}</h4>
                </div>
              </div>
            </div>

            {children}
          </>
        )}
      </div>
    </>
  );
};

export default Page;
