import { Work } from "@defs/types";

export default function WorkCard({
  title,
  image,
  description,
  url,
  tags,
  category,
  basicAuth,
}: Work) {
  return (
    <div
      data-layout="WorkCard"
      className="h-full bg-white rounded-xl border border-green-200 overflow-hidden hover:-translate-y-1 hover:border-green-400 transition-all duration-200"
    >
      <div className="h-36 bg-green-100 border-b border-green-200 flex items-center justify-center relative">
        <span className="absolute top-2.5 left-2.5 text-[11px] font-medium bg-green-200 text-green-600 px-2.5 py-0.5 rounded-full">
          {category}
        </span>
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-top"
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src="/images/work-placeholder.svg"
            alt=""
            className="opacity-50"
          />
        )}
      </div>
      <div className="p-4">
        <h3 className="text-[15px] font-medium text-[#1a1a1a] mb-1.5">
          {title}
        </h3>
        <p className="text-xs text-gray-500 leading-relaxed mb-3">
          {description}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] px-2 py-0.5 rounded-full bg-green-100 text-green-500 border border-green-300"
            >
              {tag}
            </span>
          ))}
        </div>
        {basicAuth && (
          <div className="bg-white border border-[#eee] rounded-lg px-3 py-2 mb-3 text-[11px] text-gray-500 space-y-1">
            <div className="flex gap-2">
              <span className="text-gray-600 min-w-[60px]">ID</span>
              <span className="font-medium text-[#1a1a1a]">
                {basicAuth.user}
              </span>
            </div>
            <div className="flex gap-2">
              <span className="text-gray-600 min-w-[60px]">PW</span>
              <span className="font-medium text-[#1a1a1a]">
                {basicAuth.password}
              </span>
            </div>
          </div>
        )}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-medium text-green-500 hover:text-green-600 transition-colors"
        >
          サイトを見る →
        </a>
      </div>
    </div>
  );
}
