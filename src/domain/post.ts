import { Tag } from "./tag";

export type Post = {
  id: number;
  slug: string;
  title: string;
  content: string;
  published: boolean;
  created_at: string;
  tags: Tag[];
};