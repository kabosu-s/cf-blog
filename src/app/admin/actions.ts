"use server";

import { createPost } from "@/server/repositories/post.repository";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function submitPost(formData: FormData) {
  const title = formData.get("title") as string;
  const slug = formData.get("slug") as string;
  const content = formData.get("content") as string;
  const published = formData.get("published") === "on";

  if (!title || !slug || !content) {
    throw new Error("Missing required fields");
  }

  await createPost({
    title,
    slug,
    content,
    published,
  });

  revalidatePath("/");
  redirect("/");
}
