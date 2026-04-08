"use client";

import { useEffect, useState } from "react";

type Profile = {
  name: string;
  role: string;
  roleJa: string;
  bio: string;
};

type Props = {
  profile: Profile;
};

export default function HeroSection({ profile }: Props) {
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => setShowCursor((v) => !v), 530);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="flex items-center pb-20 w-full">
      <div className="max-w-4xl mx-auto w-full px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          {/* テキスト */}
          <div className="flex-1">
            <span className="inline-block text-xs font-medium bg-green-100 text-green-500 border border-green-300 px-3 py-1 rounded-full mb-4">
              {profile.role}
            </span>
            <h1 className="text-4xl font-medium text-green-600 mb-2 leading-tight">
              Welcome, I&apos;m {profile.name}
              <span
                className="inline-block w-0.5 h-9 bg-green-500 ml-1 align-middle"
                style={{
                  opacity: showCursor ? 1 : 0,
                  transition: "opacity 0.1s",
                }}
              />
            </h1>
            <p className="text-lg font-medium text-green-500 mb-4">
              {profile.roleJa}
            </p>
            <p className="text-sm text-[#555] leading-relaxed mb-7 max-w-sm">
              {profile.bio}
            </p>
            <div className="flex gap-3 flex-wrap">
              <a
                href="#works"
                className="bg-green-500 text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-green-600 transition-all"
              >
                Works を見る
              </a>
              <a
                href="#about"
                className="text-green-500 border border-green-500 text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-green-100 transition-all"
              >
                About me
              </a>
            </div>
          </div>

          {/* アバター */}
          <div className="hidden sm:flex w-40 h-40 rounded-full bg-green-200 border-2 border-green-300 items-center justify-center flex-shrink-0">
            <span className="text-5xl font-medium text-green-500">H</span>
          </div>
        </div>

        {/* スクロール誘導 */}
        <div className="mt-16 flex justify-center">
          <a
            href="#about"
            className="flex flex-col items-center gap-1 text-green-300 hover:text-green-400 transition-colors"
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
