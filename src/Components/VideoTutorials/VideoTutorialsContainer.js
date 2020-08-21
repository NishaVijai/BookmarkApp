import React from "react";

export default function VideoTutorialsContainer(props) {
  return (
    <section>
      <h2>{props.title}</h2>
      <ul>
        <h3>{props.level}</h3>
        <li>
          {props.language}
          {props.name}

          <a
            href={props.url}
            target="_blank"
            rel="noopener  noreferrer"
            title={props.name}
          >
            <img src={props.img} alt={props.alt} loading="lazy" />
          </a>
        </li>
      </ul>
    </section>
  );
}
