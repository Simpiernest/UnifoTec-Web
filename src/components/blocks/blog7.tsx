import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

interface Post {
  id: string;
  title: string;
  summary: string;
  label: string;
  author: string;
  published: string;
  url: string;
  image: string;
}

interface Blog7Props {
  tagline: string;
  heading: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  posts: Post[];
}

const Blog7 = ({
  tagline = "Latest Updates",
  heading = "Blog Posts",
  description = "Discover the latest trends, tips, and best practices in modern web development. From UI components to design systems, stay updated with our expert insights.",
  buttonText = "View all articles",
  buttonUrl = "https://shadcnblocks.com",
  posts = [],
}: Blog7Props) => {
  return (
    <section className="py-32">
      <div className="container mx-auto flex flex-col items-center gap-16 lg:px-16">
        <div className="text-center">
          <Badge variant="secondary" className="mb-6">
            {tagline}
          </Badge>
          <h2 className="mb-3 text-pretty text-3xl font-semibold md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl text-dark">
            {heading}
          </h2>
          <p className="mb-8 text-grey md:text-base lg:max-w-2xl lg:text-lg">
            {description}
          </p>
          <Button variant="link" className="w-full sm:w-auto text-primary" asChild>
            <a href={buttonUrl}>
              {buttonText}
              <ArrowRight className="ml-2 size-4" />
            </a>
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {posts.map((post) => (
            <Card key={post.id} className="grid grid-rows-[auto_auto_1fr_auto] overflow-hidden border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[16/9] w-full overflow-hidden">
                <a
                  href={post.url}
                  className="transition-opacity duration-200 fade-in hover:opacity-70"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                </a>
              </div>
              <CardHeader className="pb-2">
                <div className="mb-2">
                  <Badge variant="outline" className="text-[10px] uppercase tracking-wider text-primary border-primary/20">
                    {post.label}
                  </Badge>
                </div>
                <h3 className="text-lg font-bold hover:text-primary transition-colors md:text-xl text-dark leading-tight">
                  <a href={post.url}>
                    {post.title}
                  </a>
                </h3>
              </CardHeader>
              <CardContent className="pb-4">
                <p className="text-grey text-sm line-clamp-3">{post.summary}</p>
              </CardContent>
              <CardFooter className="pt-0">
                <div className="flex flex-col w-full gap-4">
                  <div className="flex items-center justify-between text-[11px] font-bold text-grey/60 uppercase tracking-tighter border-t border-gray-50 pt-4">
                    <span>{post.author}</span>
                    <span>{post.published}</span>
                  </div>
                  <a
                    href={post.url}
                    className="flex items-center text-primary font-bold text-sm hover:underline"
                  >
                    Read more
                    <ArrowRight className="ml-2 size-4" />
                  </a>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Blog7 };
