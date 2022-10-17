import LinkPreview from "./LinkPreview.js";

const PostItem = (post) => {
  return `
    <div class="post-item border border-light px-4 pt-4">
      <img
        src="${post.avatarIcon}"
        class="rounded-circle float-start"
        alt="profile pic"
        height="48px"
        width="48px"
      />
      <div class="ms-5 ps-3">
        <div class="wd-text-content">
          <span class="fw-bold text-white me-1">
              ${post.userName}<i class="fas fa-check-circle mx-1"></i>
          </span>
          ${post.handle} - 23h
        </div>
        <p class="text-white">
          ${post.content}
        </p>
        <img
          class="rounded-4 img-fluid"
          src="${post.banner}"
          alt="post images"
        />
        ${post.linkPreview ? LinkPreview(post) : ""}
        <div class="py-2 btn-group d-flex justify-content-between" role="group" aria-label="Basic outlined example">
          <button type="button" class="btn btn-outline-primary border-0 text-muted"><i class="far fa-comment"></i> 4.2k</button>
          <button type="button" class="btn btn-outline-primary border-0 text-muted"><i class="fas fa-retweet"></i> 3.5k</button>
          <button type="button" class="btn btn-outline-primary border-0 text-muted"><i class="far fa-heart"></i> 37.5k</button>
          <button type="button" class="btn btn-outline-primary border-0 text-muted"><i class="fas fa-external-link-alt"></i></button>
        </div>
      </div>
    </div>
  `;
};

export default PostItem;
