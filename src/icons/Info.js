import React from "react";
import Svg, { Path } from "react-native-svg";

export function InfoDefault(props) {
  return (
    <Svg width="14" height="14" viewBox="0 0 24 24" {...props}>
      <Path
        d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-.001 5.75c.69 0 1.251.56 1.251 1.25s-.561 1.25-1.251 1.25-1.249-.56-1.249-1.25.559-1.25 1.249-1.25zm2.001 12.25h-4v-1c.484-.179 1-.241 1-.735v-4.467c0-.534-.516-.618-1-.797v-1h3v6.265c0 .535.517.558 1 .735v.999z"
        stroke="grey"
        fill="grey"
        strokeWidth="0"
      />
    </Svg>
  );
}

export function InfoAlternate(props) {
  return (
    <Svg width="14" height="14" viewBox="0 0 24 24" {...props}>
      <Path
        d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-.001 5.75c.69 0 1.251.56 1.251 1.25s-.561 1.25-1.251 1.25-1.249-.56-1.249-1.25.559-1.25 1.249-1.25zm2.001 12.25h-4v-1c.484-.179 1-.241 1-.735v-4.467c0-.534-.516-.618-1-.797v-1h3v6.265c0 .535.517.558 1 .735v.999z"
        stroke="black"
        fill="black"
        strokeWidth="0"
      />
    </Svg>
  );
}

export function InfoActive(props) {
  return (
    <Svg width="13" height="13" viewBox="0 0 24 24" {...props}>
      <Path
        d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-.001 5.75c.69 0 1.251.56 1.251 1.25s-.561 1.25-1.251 1.25-1.249-.56-1.249-1.25.559-1.25 1.249-1.25zm2.001 12.25h-4v-1c.484-.179 1-.201 1-.735v-4.467c0-.534-.516-.618-1-.797v-1h3v6.265c0 .535.517.558 1 .735v.999z"
        stroke="#B20C37"
        fill="#B20C37"
        strokeWidth="0"
      />
    </Svg>
  );
}
