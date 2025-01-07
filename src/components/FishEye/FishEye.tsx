import React from "react";
import { FishEyeContainer, FishEyeSVG } from "./FishEye.styled";
import { encoded } from "../../resources/encoded.ts";

interface ContainerProps {
    children: React.ReactNode; 
}

export const FishEye:React.FC<ContainerProps> = ({children}) => {
  return (
    <FishEyeContainer>
      <FishEyeSVG>
        <defs>
    		<filter id="SphereMapTest" filterUnits="objectBoundingBox">
    			<feImage id="mapa" result="Map" preserveAspectRatio="none" xlinkHref={`data:image/png;base64,${encoded}`}></feImage>
    			<feDisplacementMap in="SourceGraphic" in2="map" scale="200" xChannelSelector="R" yChannelSelector="G"></feDisplacementMap>
    		</filter>
    	</defs>
      </FishEyeSVG>
        {children}
    </FishEyeContainer>
  );
};

