import styled from "styled-components";
import { Colors } from "../constants/colors";

interface ImageProps {
  height: number;
  width: number;
  src: string;
  color: string;
  onChange: () => void;
}

export default function Icons({
  height,
  width,
  src,
  color,
  onChange,
}: ImageProps) {
  const Image = styled.img`
    height: ${height}px;
    width: ${width}px;
    fill: ${color};
    border-radius: 100%;
    object-fit: fill;
    background-color: ${Colors.White};
    cursor: pointer;
  `;
  return <Image src={src} onClick={onChange} />;
}
