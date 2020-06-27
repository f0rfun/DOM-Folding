import React from "react";
import { Spring } from "react-spring/renderprops";

import foldDemoImageSrc from "./background.jpg";
import FoldableImage from "./FoldableImage";
import SingleAxisDemo from "./SingleAxisDemo";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SingleAxisDemo showNote={true} defaultValue={100} id={1}>
          {percentage => {
            const width = 375;
            const height = width * (4 / 3);

            return (
              <Spring
                to={{ percentage }}
                config={{
                  tension: 120,
                  friction: 90
                }}
              >
                {interpolated => (
                  <FoldableImage
                    alt="A neon alley with a Chinese sign"
                    width={width}
                    height={height}
                    percentage={interpolated.percentage}
                    src={foldDemoImageSrc}
                  />
                )}
              </Spring>
            );
          }}
        </SingleAxisDemo>
      </header>
    </div>
  );
}

export default App;
