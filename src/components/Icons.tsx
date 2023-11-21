import styled from "styled-components";
import { Colors } from "../constants/colors";
import useSettignsStore from "../store/settingsStore";

interface ImageProps {
  height: number;
  width: number;
  src: string;
  color?: string;
  onChange?: () => void;
}

export default function Icons({
  height,
  width,
  src,
  color,
  onChange,
}: ImageProps) {
  const theme = useSettignsStore((state) => state.mode);
  const Image = styled.img`
    height: ${height}px;
    width: ${width}px;
    fill: ${color};
    border-radius: 100%;
    object-fit: fill;
    /* box-shadow: 0 0 15px ${color}; */
    background-color: ${theme === "dark" ? Colors.Black : Colors.White};
    /* filter: drop-shadow(30px 10px 4px #4444dd); */
    cursor: pointer;
  `;
  return <Image src={src} onClick={onChange} />;
}
