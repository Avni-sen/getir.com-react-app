
export default function Category({ categories: { title, id, image } }) {
  return (
    <a href="#" className="flex flex-col gap-y-2 items-center justify-center
    text-center p-4 group transition hover:bg-purple-50">
        <img src={image} alt={title}
        className="w-12 h-12 rounded border-gray-200"/>
        <span className="text-sm font-semibold text-gray-700
         group-hover:text-brandColor tracking-tighter">
             {title}
        </span>
    </a>
  );
}
