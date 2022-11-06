const PostStats = ({ tuit }) => {
  return (
    <div
      className="py-2 btn-group d-flex"
      role="group"
      aria-label="Basic outlined example"
    >
      <button
        type="button"
        className="btn btn-outline-light border-0 text-muted"
      >
        <i className="bi bi-chat me-2"></i>
        {tuit.replies}
      </button>
      <button
        type="button"
        className="btn btn-outline-light border-0 text-muted"
      >
        <i className="bi bi-repeat me-2"></i>
        {tuit.retuits}
      </button>
      <button
        type="button"
        className="btn btn-outline-light border-0 text-muted"
      >
        {tuit.liked ? (
          <i class="bi bi-heart-fill me-2 text-danger"></i>
        ) : (
          <i className="bi bi-heart me-2"></i>
        )}
        {tuit.likes}
      </button>
      <button
        type="button"
        className="btn btn-outline-light border-0 text-muted"
      >
        <i className="bi bi-arrow-up-right-square"></i>
      </button>
    </div>
  );
};

export default PostStats;
