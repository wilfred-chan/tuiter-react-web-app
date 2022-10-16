let post = {
  topic: "Web Development",
  userName: "ReactJS",
  time: "2h",
  image: "/public/images/post/react-js-logo.png",
  title:
    "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
};

const PostSummaryItem = (post) => {
  return `
  <div class="card row rounded-0">
    <div class="card-body">
      <div class="card-body-text">
        <img
          src="${post.image}"
          class="rounded-4 float-end"
          alt="${post.userName}"
          style="width: 100px; height: 100px;"
        />
        <h6 class="card-subtitle text-muted mb-2">${post.topic}</h6>
        <h5 class="card-title fw-bold">
          ${post.userName}<i class="fas fa-check-circle mx-2"></i
          ><span class="text-muted fw-normal">- 2h</span>
        </h5>
        <p class="card-text fw-bold">
            ${post.title}
        </p>
      </div>
    </div>
  </div>`;
};

$("#wd-test").append(PostSummaryItem(post));
