import { FaEye, FaStar, FaRegStar, FaShareAlt, FaRegBookmark } from "react-icons/fa";
import { useState } from "react";

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    thumbnail_url,
    details,
    rating,
    total_view,
    tags,
  } = news;

  // state for Read More toggle
  const [isExpanded, setIsExpanded] = useState(false);
  const shortText = details.slice(0, 160) + "...";

  // star rating rendering
  const totalStars = 5;
  const filledStars = Math.round(rating.number);

  return (
    <div className="card bg-base-100 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300">
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

        <p className="text-sm text-gray-600">
          {isExpanded ? details : shortText}
          {!isExpanded && (
            <button
              onClick={() => setIsExpanded(true)}
              className="text-blue-600 font-semibold hover:underline ml-1"
            >
              Read More
            </button>
          )}
        </p>

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
          <div className="flex items-center gap-1 text-yellow-500">
            {[...Array(totalStars)].map((_, i) =>
              i < filledStars ? (
                <FaStar key={i} />
              ) : (
                <FaRegStar key={i} className="text-gray-400" />
              )
            )}
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
