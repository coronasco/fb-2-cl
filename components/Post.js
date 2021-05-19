import Image from "next/image";
import { ChatAltIcon, ShareIcon, ThumbUpIcon } from "@heroicons/react/outline";

function Post({ name, message, email, postImage, image, timestamp }) {
  return (
    <div className="flex flex-col">
      <div className="bg-white mb-5 rounded-t-xl">
        <div className="flex items-center space-x-2 p-5">
          <img
            src={image}
            width={40}
            height={40}
            className="rounded-full"
            alt="image"
          />
          <div>
            <p className="font-medium">{name}</p>

            <p className="text-xs text-gray-400">
              {new Date(timestamp?.toDate()).toLocaleString()}
            </p>
          </div>
        </div>
        <div className="p-5 pt-0">{message}</div>
        {postImage && (
          <div className="relative h-56 md:h-96 bg-white">
            <Image src={postImage} objectFit="cover" layout="fill" />
          </div>
        )}
        <div
          className="flex justify-between items-center rounded-b-xl bg-white
        text-gray-400 border-t border-gray-100"
        >
          <div className="inputIcon rounded-none">
            <ThumbUpIcon className="h-4" />
            <p className="text-xs sm:text-base">Like</p>
          </div>
          <div className="inputIcon rounded-none">
            <ChatAltIcon className="h-4" />
            <p className="text-xs sm:text-base">Comment</p>
          </div>
          <div className="inputIcon rounded-none">
            <ShareIcon className="h-4" />
            <p className="text-xs sm:text-base">Share</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
