import Image from "next/image";

interface Props {
  text?: string;
  style: string;
  icon?: string;
  alt?: string;
}
const Button: React.FC<Props> = ({ text, style, icon, alt }) => {
  return (
    <button className={style}>
      {icon && alt && <Image src={icon} alt={alt} />}

      {text && <span>{text}</span>}
    </button>
  );
};

export default Button;
