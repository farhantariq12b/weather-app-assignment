import styled from "styled-components";
import { Colors } from "../constants/colors";
import useSettignsStore from "../store/settingsStore";

interface ImageProps {
  height: number;
  width: number;
  src: string;
  color?: string;
  onChange?: () => void;
  toggle?: boolean;
}

export default function Icons({
  height,
  width,
  src,
  color,
  onChange,
  toggle,
}: ImageProps) {
  const theme = useSettignsStore((state) => state.mode);
  const Image = styled.img`
    height: ${height}px;
    width: ${width}px;
    fill: ${color};
    border-radius: 100%;
    object-fit: fill;
    background-color: ${toggle
      ? theme === "dark"
        ? Colors.White
        : "transparent"
      : theme === "dark"
      ? Colors.Black
      : Colors.White};
    cursor: pointer;
  `;
  return <Image src={src} onClick={onChange} />;
}
