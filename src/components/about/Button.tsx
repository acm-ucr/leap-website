import Link from "next/link";

interface ButtonProps {
  text: string;
  link: string;
}

const Button: React.FC<ButtonProps> = ({ text, link }) => {
  return (
    <div className="flex h-1/6 w-1/6 items-center justify-center">
      <Link href={link} target="_blank">
        <div className="h-15 m-0 flex w-40 items-center rounded-lg border-4 border-leap-dark-green bg-leap-mid-green px-4 py-1 text-center font-leap text-lg text-white">
          {text}
        </div>
      </Link>
    </div>
  );
};

export default Button;
