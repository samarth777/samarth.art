function BlogCard({ title, desc, link }: { title: string, desc: string, link: string }) {
    return (
      <a
        href={link}
        className="flex flex-col items-center w-min-4xl bg-white border border-blue-400 hover:border-gray-100 rounded-lg shadow md:flex-row" style={{ backgroundColor: "rgba(0, 16, 17, 0.75)" }}
      >
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight">
            {title}
          </h5>
          <p className="mb-3 font-normal text-gray-200 dark:text-gray-100">
            {desc}
          </p>
        </div>
      </a>
    );
  }
  
  export default BlogCard;
  