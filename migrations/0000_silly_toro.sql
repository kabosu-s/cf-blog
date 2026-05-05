CREATE TABLE `post_tags` (
	`post_id` integer NOT NULL,
	`tag_id` integer NOT NULL,
	PRIMARY KEY (`post_id`, `tag_id`),
	FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE,
	FOREIGN KEY (`tag_id`) REFERENCES `tags` (`id`) ON DELETE CASCADE
);
--> statement-breakpoint
CREATE TABLE `posts` (
	`id` integer PRIMARY KEY NOT NULL,
	`slug` text NOT NULL UNIQUE,
	`title` text NOT NULL,
	`content` text NOT NULL,
	`published` integer NOT NULL,
	`created_at` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tags` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX idx_posts_slug ON posts(slug);
--> statement-breakpoint
CREATE INDEX idx_posts_published ON posts(published);
--> statement-breakpoint
CREATE INDEX idx_posts_created_at ON posts(created_at);
