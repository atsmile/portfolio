"use client";

import { useEffect, useState } from "react";
import { profile } from "@data/profile";

export default function HeroSection() {
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => setShowCursor((v) => !v), 530);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="flex items-center pb-20 w-full">
      <div className="max-w-4xl mx-auto w-full px-6">
        <div className="flex items-center justify-between gap-8">
          <div className="flex-1">
            <span className="inline-block text-xs font-medium bg-[#eaf3de] text-[#3b6d11] border border-[#97c459] px-3 py-1 rounded-full mb-4">
              {profile.role}
            </span>
            <h1 className="text-4xl font-medium text-[#27500a] mb-2 leading-tight">
              Hi, I&apos;m {profile.name}
              <span
                className="inline-block w-0.5 h-9 bg-[#3b6d11] ml-1 align-middle"
                style={{
                  opacity: showCursor ? 1 : 0,
                  transition: "opacity 0.1s",
                }}
              />
            </h1>
            <p className="text-lg font-medium text-[#3b6d11] mb-4">
              {profile.roleJa}
            </p>
            <p className="text-sm text-[#555] leading-relaxed mb-7 max-w-sm">
              {profile.bio}
            </p>
            <div className="flex gap-3 flex-wrap">
              <a
                href="#works"
                className="bg-[#3b6d11] text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-[#27500a] transition-all"
              >
                Works を見る
              </a>

              <a
                href="#about"
                className="text-[#3b6d11] border border-[#3b6d11] text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-[#eaf3de] transition-all"
              >
                About me
              </a>
            </div>
          </div>

          {/* アバター */}
          <div className="w-40 h-40 rounded-full bg-[#c0dd97] border-2 border-[#97c459] flex items-center justify-center flex-shrink-0">
            <span className="text-5xl font-medium text-[#3b6d11]">H</span>
          </div>
        </div>

        {/* スクロール誘導 */}
        <div className="mt-16 flex justify-center">
          <a
            href="#about"
            className="flex flex-col items-center gap-1 text-[#97c459] hover:text-[#639922] transition-colors"
          >
            <span className="text-[11px] tracking-widest uppercase">
              scroll
            </span>
            <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
              <path
                d="M8 2v14M2 10l6 6 6-6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
