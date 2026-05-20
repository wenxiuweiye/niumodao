// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/blogs'
  }),
  schema: z.object({
    title: z.string(),
    
    // 👇 方案 A：兼容字符串 + Date 对象（推荐）
    date: z.union([
      z.date(),
      z.string().transform((str) => new Date(str))
    ]),
    
    // 👇 方案 B：更宽松，允许任何能转 Date 的值
    // date: z.preprocess((val) => {
    //   if (val instanceof Date) return val;
    //   if (typeof val === 'string') return new Date(val);
    //   if (typeof val === 'object' && val?.value) return new Date(val.value);
    //   return val;
    // }, z.date()),
  }),
});

export const collections = { posts };