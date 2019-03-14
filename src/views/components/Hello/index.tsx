import * as React from "react";
// import IMAGES from "../../images";
// const { EXAMPLE } = IMAGES;

type Props = {
  title: string;
};

export function Hello({ title }: Props) {
  return (
    <div>
      <h1>{title}</h1>
      <a href="./second">to second</a>
      {[...new Array(30)].map((_, i) => {
        return (
          <img
            className="lazy"
            src={i < 6 ? "imgs/example.png" : ""}
            data-src="imgs/example.png"
            style={{
              width: "500px",
              height: "500px"
            }}
          />
        );
      })}
    </div>
  );
}
