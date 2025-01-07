import React from "react";
import { FishEyeSVG } from "./FishEye.styled";
import { encoded } from "../../resources/encoded.ts";


export const FishEye:React.FC= () => {
  return (
      <FishEyeSVG>
        <defs>
    		<filter id="SphereMapTest" filterUnits="objectBoundingBox">
    			<feImage id="mapa" result="Map" preserveAspectRatio="none" xlinkHref={`data:image/png;base64,${encoded}`}></feImage>
    			<feDisplacementMap in="SourceGraphic" in2="map" scale="1000" xChannelSelector="R" yChannelSelector="G"></feDisplacementMap>
    		</filter>
    	</defs>
      </FishEyeSVG>
  );
};

