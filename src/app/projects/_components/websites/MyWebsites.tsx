"use client";

import { Fragment } from "react";
import "./MyWebsites.css";
import { websiteInfo } from "../../../../data/websites";

import WebsiteItem from "./WebsiteItem";

const MyWebsites = () => {
  return (
    <>
      {websiteInfo.map((website) => (
        <Fragment key={website.id}>
          <WebsiteItem {...website} />
          <div className="websites-page-divider"></div>
        </Fragment>
      ))}
    </>
  );
};

export default MyWebsites;
