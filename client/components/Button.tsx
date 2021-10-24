import Image from "next/image";

interface Props {
  text?: string;
  style: string;
  icon?: string;
  alt?: string;
  height?: string;
  width?: string;
}
const Button: React.FC<Props> = ({ text, style, icon, alt, height, width }) => {
  return (
    <button className={style}>
      {icon && alt && (
        <Image src={icon} alt={alt} height={height} width={width} />
      )}

      {text && <span>{text}</span>}
    </button>
  );
};

export default Button;
