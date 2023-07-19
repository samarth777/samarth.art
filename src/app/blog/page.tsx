import BlogCard from "@/components/BlogCard";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import React from "react";

function Blog() {
  return (
    <div>
      <NavBar />
      <h1 className="text-4xl font-bold text-center">BLOGS</h1>
      <div className="h-screen flex flex-col justify-evenly items-center p-2">
        <BlogCard
          title="Blog 1"
          desc="This is the first blog post"
          link="/blog/1"
        />
        <BlogCard
          title="Blog 2"
          desc="This is the second blog post"
          link="/blog/2"
        />
      </div>
      <Footer />
    </div>
  );
}

export default Blog;
