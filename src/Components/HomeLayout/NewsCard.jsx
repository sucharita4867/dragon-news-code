import { FaEye, FaStar, FaShareAlt, FaRegBookmark } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const { title, author, thumbnail_url, details, rating, total_view, tags } =
    news;

  return (
    <div className="card bg-base-100 shadow-xl   hover:shadow-2xl transition-all duration-300">
      {/* -------- Author Info Section -------- */}
      <div className="flex items-center justify-between px-4 pt-4">
        {/* Author details */}
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-gray-800">{author.name}</h3>
            <p className="text-sm text-gray-500">
              {new Date(author.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>

        {/* Icons (Bookmark & Share) */}
        <div className="flex items-center gap-3 text-gray-500">
          <button className="hover:text-blue-600 transition">
            <FaRegBookmark size={18} />
          </button>
          <button className="hover:text-blue-600 transition">
            <FaShareAlt size={18} />
          </button>
        </div>
      </div>

      {/* -------- Thumbnail Image -------- */}
      <figure className="px-4 pt-3">
        <img
          src={thumbnail_url}
          alt={title}
          className="rounded-xl w-full h-48 object-cover"
        />
      </figure>

      {/* -------- Content Section -------- */}
      <div className="card-body px-4 pb-3">
        <h2 className="card-title text-lg font-bold text-gray-900">{title}</h2>
        <p className="text-sm text-gray-600 line-clamp-3">{details}</p>

        {/* Tags */}
        <div className="mt-2 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="badge badge-outline text-xs capitalize"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* -------- Footer Section -------- */}
        <div className="flex items-center justify-between mt-3 border-t pt-3">
          <div className="flex items-center gap-2 text-yellow-500">
            <FaStar /> <span>{rating.number}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <FaEye /> <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
