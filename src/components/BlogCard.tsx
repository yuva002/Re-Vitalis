"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";
import { Calendar, Clock, ExternalLink, ImageIcon } from "lucide-react";
import type { BlogPost } from "@/lib/blogData";

interface BlogCardProps {
  post: BlogPost;
  index: number;
  /** Resolved `/blog1.jpg` … `/blog12.jpg` from parent (stable per post). */
  imageSrc: string;
}

export function BlogCard({ post, index, imageSrc }: BlogCardProps) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <a
        href={post.externalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="relative overflow-hidden rounded-[22px] border border-[#C8A96E]/20 bg-[#0f4842]/80 shadow-[0_28px_70px_rgba(0,0,0,0.38)] backdrop-blur-xl transition-all duration-500 hover:scale-[1.02] hover:border-[#C8A96E]/40 hover:shadow-[0_32px_90px_rgba(200,169,110,0.25)]">
          {/* Featured Image */}
          <div className="relative h-56 w-full overflow-hidden bg-[#134f49]">
            {imageFailed ? (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#0f4842] to-[#134f49] text-[#C8A96E]/50">
                <ImageIcon className="h-10 w-10" aria-hidden />
              </div>
            ) : (
              <Image
                src={imageSrc}
                alt={post.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                priority={index < 6}
                onError={() => setImageFailed(true)}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f4842] via-transparent to-transparent opacity-60" />
            
            {/* External Link Badge */}
            <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full border border-[#C8A96E]/30 bg-[#0f4842]/95 px-2.5 py-1 text-[10px] font-[560] tracking-[0.08em] text-[#E2C98A] backdrop-blur-xl">
              <ExternalLink className="h-3 w-3" />
              <span>EXTERNAL</span>
            </div>

            {/* Category Badge */}
            <div className="absolute bottom-3 left-3 rounded-full border border-[#C8A96E]/25 bg-[#0f4842]/92 px-3 py-1.5 text-[10px] font-[600] tracking-[0.16em] text-[#C8A96E] backdrop-blur-xl">
              {post.category}
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Title */}
            <h3 className="mb-3 text-[20px] font-[700] leading-[1.3] tracking-[-0.01em] text-[#F6EDD9] transition-colors duration-300 group-hover:text-[#E2C98A]">
              {post.title}
            </h3>

            {/* Excerpt */}
            <p className="mb-4 line-clamp-3 text-[14px] leading-[1.7] text-[#C2BDB5]">
              {post.excerpt}
            </p>

            {/* Metadata */}
            <div className="flex flex-wrap items-center gap-4 border-t border-[#C8A96E]/15 pt-4 text-[11px] text-[#888078]">
              <div className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-[#C8A96E]" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 text-[#C8A96E]" />
                <span>{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
              </div>
              {post.source && (
                <div className="ml-auto text-[10px] tracking-[0.08em] text-[#C8A96E]/70">
                  via {post.source}
                </div>
              )}
            </div>

            {/* Read More Link with Arrow */}
            <div className="mt-4 flex items-center gap-2 text-[12px] font-[600] tracking-[0.08em] text-[#E2C98A] transition-transform duration-300 group-hover:translate-x-1">
              <span>READ ARTICLE</span>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>
      </a>
    </motion.article>
  );
}
