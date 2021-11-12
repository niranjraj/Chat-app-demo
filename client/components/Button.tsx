import Image from "next/image";
import { FormEvent } from "react";

interface Props {
  text?: string;
  style: string;
  icon?: string;
  alt?: string;
  height?: string;
  width?: string;
  submit?: boolean;
}
const Button: React.FC<Props> = ({
  text,
  style,
  icon,
  alt,
  height,
  width,
  submit,
}) => {
  return (
    <button className={style} type={submit ? "submit" : "button"}>
      {icon && alt && (
        <Image src={icon} alt={alt} height={height} width={width} />
      )}

      {text && <span>{text}</span>}
    </button>
  );
};

export default Button;
