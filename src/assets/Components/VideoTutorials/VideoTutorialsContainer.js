import React from "react";

export default function VideoTutorialsContainer(props) {
  return (
    <section className="video-tut-section">
      {/* <h2>{props.title}</h2> */}
      <ul className="video-tut-section-ul">
        <li>
          <img
            src={props.img}
            alt={props.alt}
            loading="lazy"
            title={props.alt}
          />
          {/* {props.level} */}
          <h3>{props.level}</h3>
          <h4>{props.language}</h4>
          {/* <img
            src={props.img}
            alt={props.alt}
            loading="lazy"
            title={props.alt}
          /> */}

          <a
            href={props.url}
            target="_blank"
            rel="noopener  noreferrer"
            title={props.name}
          >
            {props.name}
            {/* <img
              src={props.img}
              alt={props.alt}
              loading="lazy"
              title={props.alt}
            /> */}
          </a>
        </li>
        {/* <hr /> */}
      </ul>
      {/* <hr /> */}
    </section>
  );
}
