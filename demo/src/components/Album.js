import React from "react";
import { unstable_createResource } from "react-cache";

import fetchAPI from "../utils/fetchAPI";

const albumResource = unstable_createResource(id => fetchAPI(`/albums/${id}`));

export default function Album({ id }) {
  const album = albumResource.read(id);
  const { name, releasedDate, numberOfSongs, duration, cover, notes } = album;

  return (
    <section key={name} className="album">
      <div className="album-cover-container">
        <img src={cover} alt="cover" />
      </div>
      <div className="album-info">
        <h3>{name}</h3>
        <p>{releasedDate}</p>
        <p>
          {numberOfSongs} Songs, {duration}
        </p>
        <p>{notes}</p>
      </div>
    </section>
  );
}
