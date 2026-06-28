import { Link } from "@tanstack/react-router";
import type { Post } from "@/data/posts";

export function PostCard({ post }: { post: Post }) {
  return (
    <article className="group">
      <Link
        to="/post/$slug"
        params={{ slug: post.slug }}
        className="block overflow-hidden rounded-lg bg-card border border-border transition hover:-translate-y-1"
        style={{ boxShadow: "var(--shadow-card)" }}
      >
        <div className="aspect-[4/3] overflow-hidden bg-muted">
          <img
            src={post.image}
            alt={post.title}
            loading="lazy"
            width={800}
            height={600}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
        </div>
        <div className="p-5">
          <div className="flex items-center gap-2 text-xs text-primary font-bold mb-2">
            <span>{post.category}</span>
            <span className="text-muted-foreground font-normal">· {post.readingTime}</span>
          </div>
          <h3 className="font-serif text-xl leading-snug mb-2 group-hover:text-primary transition-colors">
            {post.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-7 line-clamp-2">{post.excerpt}</p>
          <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
            <span>{post.author}</span>
            <span>{post.date}</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
