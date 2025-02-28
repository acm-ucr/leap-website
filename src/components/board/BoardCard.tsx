import Image, { StaticImageData } from "next/image";

interface BoardCardTypes {
  name: string;
  role: string;
  image: StaticImageData;
}

const BoardCard: React.FC<BoardCardTypes> = ({ name, role, image }) => {
  return (
    <div className="m-9 flex h-2/3 w-1/3 flex-col justify-center rounded-3xl border-8 border-leap-text bg-leap-dark-green p-10 text-center">
      <Image
        src={image}
        alt="picture"
        className="aspect-square flex-col justify-center rounded-3xl border-8 border-leap-mid-green"
      />

      <div className="mt-4 p-1 font-leap text-2xl font-semibold text-white">
        {name}
      </div>

      <div className="p-1 font-leap text-2xl font-semibold text-white">
        {role}
      </div>
    </div>
  );
};

export default BoardCard;
