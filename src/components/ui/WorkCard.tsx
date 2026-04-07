import { Work } from "@lib/index";

export default function WorkCard({
  title,
  description,
  url,
  tags,
  category,
  imagePath,
  basicAuth,
}: Work) {
  return (
    <div className="bg-[#f7faf4] rounded-xl border border-[#c0dd97] overflow-hidden hover:-translate-y-1 hover:border-[#639922] transition-all duration-200">
      <div className="h-36 bg-[#eaf3de] border-b border-[#c0dd97] flex items-center justify-center relative">
        <span className="absolute top-2.5 left-2.5 text-[11px] font-medium bg-[#c0dd97] text-[#27500a] px-2.5 py-0.5 rounded-full">
          {category}
        </span>
        {imagePath ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imagePath}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            className="opacity-20"
          >
            <rect
              x="3"
              y="8"
              width="50"
              height="40"
              rx="5"
              stroke="#3B6D11"
              strokeWidth="2.5"
              fill="none"
            />
            <path d="M3 20h50" stroke="#3B6D11" strokeWidth="2" fill="none" />
            <circle cx="12" cy="14" r="2" fill="#3B6D11" />
            <circle cx="19" cy="14" r="2" fill="#3B6D11" />
            <rect x="10" y="28" width="36" height="4" rx="2" fill="#3B6D11" />
            <rect x="10" y="36" width="24" height="4" rx="2" fill="#3B6D11" />
          </svg>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-[15px] font-medium text-[#1a1a1a] mb-1.5">
          {title}
        </h3>
        <p className="text-xs text-[#666] leading-relaxed mb-3">
          {description}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] px-2 py-0.5 rounded-full bg-[#eaf3de] text-[#3b6d11] border border-[#97c459]"
            >
              {tag}
            </span>
          ))}
        </div>
        {basicAuth && (
          <div className="bg-white border border-[#eee] rounded-lg px-3 py-2 mb-3 text-[11px] text-[#666] space-y-1">
            <div className="flex gap-2">
              <span className="text-[#888] min-w-[60px]">ID</span>
              <span className="font-medium text-[#1a1a1a]">
                {basicAuth.user}
              </span>
            </div>
            <div className="flex gap-2">
              <span className="text-[#888] min-w-[60px]">PW</span>
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
          className="text-xs font-medium text-[#3b6d11] hover:text-[#27500a] transition-colors"
        >
          サイトを見る →
        </a>
      </div>
    </div>
  );
}
