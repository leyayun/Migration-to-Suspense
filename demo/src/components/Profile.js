import React from "react";
import { unstable_createResource } from "react-cache";
import fetchAPI from "../utils/fetchAPI";

const photoResource = unstable_createResource(() => fetchAPI("/profile/photo"));
const introResource = unstable_createResource(() => fetchAPI("/profile/intro"));

export default function Profile() {
  const profilePicture = photoResource.read();
  const intro = introResource.read();

  return (
    <>
      <div className="profile-picture">
        <img src={profilePicture} alt="IloveColdplay" />
      </div>
      <div className="profile-intro">
        {
          intro.split("\n").map((para, index) => <p key={index}>{para}</p>)
        }
      </div>
    </>
  );
}
