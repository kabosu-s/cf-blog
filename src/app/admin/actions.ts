"use server";

import { z } from "zod";
import { createPost } from "@/server/repositories/post.repository";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const postFormSchema = z.object({
  title: z.string().min(1, "Title is required"),
  slug: z
    .string()
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug must be URL-safe"),
  content: z.string().min(1, "Content is required"),
  published: z.boolean(),
});

export async function submitPost(formData: FormData) {
  const parseResult = postFormSchema.safeParse({
    title: formData.get("title"),
    slug: formData.get("slug"),
    content: formData.get("content"),
    published: formData.get("published") === "on",
  });

  if (!parseResult.success) {
    throw new Error(parseResult.error.message);
  }

  const { title, slug, content, published } = parseResult.data;

  await createPost({
    title,
    slug,
    content,
    published,
  });

  revalidatePath("/");
  redirect("/");
}
