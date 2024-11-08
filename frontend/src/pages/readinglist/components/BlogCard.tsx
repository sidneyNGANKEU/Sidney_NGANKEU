import { useNavigate } from "react-router-dom";
import { timeDiff } from "../../../utils/relativeTime";

export const BlogCard = ({ blogData }: any): JSX.Element => {
  const navigate = useNavigate();

  const viewBlogOnClick = () => {
    navigate(`/blog/view/${blogData.blog}/${blogData.blog_slug}`);
  };

  const isVideo = blogData.blog_details.type === "video";

  return (
    <div className="flex flex-col items-center gap-y-2 p-1 rounded-md border-[1.5px] border-slate-200 shadow-md shadow-slate-300 w-full hover:scale-105 duration-300">
      <h2 onClick={viewBlogOnClick} className="p-2 font-bold text-sm sm:text-md text-center overflow-ellipsis whitespace-nowrap overflow-hidden cursor-pointer w-full">
        {blogData.blog_details.title}
      </h2>

      <div className="flex justify-between items-center w-full">
        <div className="flex justify-between items-center gap-x-2 p-2">
          {/* Conditionally render video or image */}
          {isVideo ? (
            <video src={blogData.blog_details.content_url} controls className="w-full" />
          ) : (
            <img src={blogData.blog_details.content_url} alt="blog-content" className="w-full rounded-md" />
          )}
          <p className="text-sm p-2">@ {blogData.blog_details.author_username}</p>
        </div>
        <p className="p-2 text-[0.6rem] sm:text-[0.7rem]">{timeDiff(new Date(blogData.blog_details.created_at).valueOf())}</p>
      </div>
    </div>
  );
};
