import React from "react";
import { FilterContainer, FishEyeSVG} from "./Filter.styled.jsx";
import { encoded } from "../../resources/encoded.ts";

interface ContainerProps {
  children: React.ReactNode; 
}

export const Filter:React.FC<ContainerProps>= ({children}) => {
  return (
    <FilterContainer>
      <FishEyeSVG>
        <defs>
    		<filter id="SphereMapTest" filterUnits="objectBoundingBox">
    			<feImage id="mapa" result="Map" preserveAspectRatio="none" xlinkHref={`data:image/png;base64,${encoded}`}></feImage>
    			<feDisplacementMap in="SourceGraphic" in2="map" scale="200" xChannelSelector="R" yChannelSelector="G"></feDisplacementMap>
    		</filter>
    	</defs>
      </FishEyeSVG>
      {children}
    </FilterContainer>
  );
};

