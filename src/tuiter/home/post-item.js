import React from "react";

const PostItem = ({
  post = {
    avatarIcon: "nasa.jpg",
    banner: "paris.png",
    content:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Similique harum quas aperiam tenetur incidunt doloribus porro iure tempora, ipsa inventore unde nobis iste ducimus repudiandae facere sit minima animi nisi.",
    userName: "NASA",
    handle: "@nasa",
    linkPreview: true,
    linkTitle: "Countdown: Inspriration4 Mission to Space | Netflix",
    linkDescription:
      "From traning to launch, follow the journey of the first all-civilian mission to space.",
    linkURL: "https://www.netflix.com/title/81215567",
    numOfComments: "4.2k",
    numOfRetweets: "3.5k",
    numOfLikes: "37.5k",
  },
}) => {
  return (
    <div className="row mx-1 border rounded pt-2">
      <div className="col-2 px-0">
        <img
          src={`/images/avatar/${post.avatarIcon}`}
          className="rounded-circle mx-auto d-block"
          height={48}
          width={48}
        />
      </div>
      <div className="col-10 ps-0 pe-3">
        <div className="wd-text-content">
          <span className="fw-bold me-1">
            {post.userName}
            <i className="fas fa-check-circle mx-1"></i>
          </span>
          {post.handle} - 23h
        </div>
        <p>{post.content}</p>
        <img
          className="rounded-4 img-fluid"
          src={`/images/${post.banner}`}
          alt="post images"
        />
        <div
          className="py-2 btn-group d-flex justify-content-between"
          role="group"
          aria-label="Basic outlined example"
        >
          <button
            type="button"
            className="btn btn-outline-light border-0 text-muted"
          >
            <i className="bi bi-chat"></i> {post.numOfComments}
          </button>
          <button
            type="button"
            className="btn btn-outline-light border-0 text-muted"
          >
            <i className="bi bi-repeat"></i> {post.numOfRetweets}
          </button>
          <button
            type="button"
            className="btn btn-outline-light border-0 text-muted"
          >
            <i className="bi bi-heart"></i> {post.numOfLikes}
          </button>
          <button
            type="button"
            className="btn btn-outline-light border-0 text-muted"
          >
            <i className="bi bi-arrow-up-right-square"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
