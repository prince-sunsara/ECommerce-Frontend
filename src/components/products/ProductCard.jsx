import { Link } from "react-router";

const ProductCard = ({ image, name, discount, link }) => {
  return (
    <Link
      href={link}
      className="bg-[#2b2a40] rounded-lg overflow-hidden shadow-md transform transition-transform duration-200 ease-in-out hover:-translate-y-1 hover:shadow-lg flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 p-2 mb-4 mx-auto flex-grow-0 flex-shrink-0"
      rel="noopener noreferrer"
    >
      <div className="w-full pt-[100%] relative overflow-hidden border-b border-gray-200">
        {/* Square container */}
        <img
          src={image}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="p-3 text-center flex flex-col flex-grow">
        <p className="text-semibold text-white leading-tight overflow-hidden text-ellipsis line-clamp-2 min-h-[24px]">
          {name}
        </p>
        <p className="text-base text-[#7D5FFF] font-bold">{discount}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
