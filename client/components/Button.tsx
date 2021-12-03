import Image from "next/image";
import React, { FormEvent } from "react";

interface Props {
  text?: string;
  style: string;
  icon?: string;
  alt?: string;
  height?: string;
  width?: string;
  submit?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
const Button: React.FC<Props> = ({
  text,
  style,
  icon,
  alt,
  height,
  width,
  submit,
  onClick,
}) => {
  return (
    <button
      className={style}
      type={submit ? "submit" : "button"}
      onClick={onClick}
    >
      {icon && alt && (
        <Image src={icon} alt={alt} height={height} width={width} />
      )}

      {text && <span>{text}</span>}
    </button>
  );
};

export default Button;
