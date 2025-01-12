import { Dot, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  const posts = [
    {
      title: "Will AI take over Art?",
      image: "/assets/blog1.webp",
      author: "The Reformist",
      date: "May 29th, 2024",
      category: "Blog",
    },
    {
      title: "Cryptocurrency vs Tokens",
      image: "/assets/blog2.webp",
      author: "The Reformist",
      date: "May 29th, 2024",
      category: "Blog",
    },
    {
      title: "Cryptocurrency and Crypto asset",
      image: "/assets/blog3.webp",
      author: "The Reformist",
      date: "May 29th, 2024",
      category: "Blog",
    },
  ];
  return (
    <section className="bg-[#030516] pt-48 pb-28 px-4 md:px-12 xl:px-24 ">
      <div className="flex flex-col md:flex-row justify-between md:items-center">
        <h2 className="text-[30px] md:text-[36px] lg:text-[42px] leading-[1.3] mb-5 md:mb-0">
          Read our articles, news and product blog
        </h2>

        <div className="group relative z-30 w-fit">
          <div className="w-[144px] h-12 border border-dashed border-white rounded-full  group-hover:border-[#0066cc]"></div>
          <button className="absolute left-1 -top-1 lg:right-[90px] font-semibold text-black bg-white w-[144px] h-12 rounded-full group-hover:bg-[#154b81] group-hover:text-white transition ease-in-out flex items-center justify-center">
            Visit Blog
            <Play className="w-4 h-4 ml-2 group-hover:transition-none fill-black group-hover:fill-white" />
          </button>
        </div>
      </div>

      <div className="mt-10">
        <div className="flex flex-col lg:flex-row justify-center items-center space-x-10 w-full">
          {posts.map((post, index) => (
            <Link href="/blog/blog_id" key={index} className="w-full rounded-[20px] cursor-pointer">
              <div className="relative w-full h-60 ">
                <Image src={post.image} alt="blog_img" fill className="object-cover object-center rounded-[20px]" />
              </div>

              <div className="border-l px-5 mt-6">
                <p className="text-lg font-semibold">{post.category}</p>
                <div className="flex items-center -mt-2 text-[#a5a5a5]">
                  <p>{post.author}</p>
                  <span className="text-white"><Dot className="w-11 h-11 -ml-2 -mr-2 !fill-white" /></span>
                  <p>{post.date}</p>
                </div>

                <h3 className="font-semibold text-2xl mt-2">{post.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
