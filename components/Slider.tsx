import styled from "styled-components";

type SliderProps = {
  min: number;
  max: number;
  className?: string;
  onChange: (value: string) => any;
};

const SliderInput = styled.input``;

export default function Slider({ min, max, className, onChange }: SliderProps) {
  return (
    <SliderInput
      type="range"
      min={min}
      max={max}
      onChange={(ev) => onChange(ev.target.value)}
      className={className}
    />
  );
}
