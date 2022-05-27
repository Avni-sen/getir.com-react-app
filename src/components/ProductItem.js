import {AiOutlinePlus} from 'react-icons/ai';
export default function ProductItem({ product }) {
  return (
    <div className="  bg-white gap-y-1 flex flex-col items-center text-center relative justify-center p-3">
     <button className='absolute top-3 right-3 transition-colors w-8 h-8 flex items-center justify-center rounded-lg bg-white border border-gray-200 text-brandColor shadow-md hover:bg-brandColor hover:text-brandColorYellow hover:border-brandColorYellow'>
         <AiOutlinePlus  size={16} />
     </button>
      <img className="cursor-pointer"  src={product.image} alt={product.title} />
      <div className=" text-primaryBrandColor">₺{product.price}</div>
      <div className=" text-gray-900">{product.title}</div>
      <div className="text-gray-500 ">{product.alt}</div>
    </div>
  );
}
