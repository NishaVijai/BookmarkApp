import React from "react";

export default function VideoTutorialsContainer(props) {
  return (
    <section>
      <h2>{props.title}</h2>
      <ul>
        <h3>{props.level}</h3>
        <li>
          {props.language}
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
            <img
              src={props.img}
              alt={props.alt}
              loading="lazy"
              title={props.alt}
            />
          </a>
        </li>
      </ul>
    </section>
  );
}
