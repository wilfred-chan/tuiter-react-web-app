let post = {
  avatarIcon: "/public/images/avatar/nasa.jpg",
  banner: "/public/images/paris.png",
  content:
    "lorem ipsum dolor sit amet consectetur adipisicing elit. Similique harum quas aperiam tenetur incidunt doloribus porro iure tempora, ipsa inventore unde nobis iste ducimus repudiandae facere sit minima animi nisi.",
  userName: "NASA",
  handle: "@nasa",
};

const PostItem = (post) => {
  return `
    <div class="wd-bookmark">
    <div class="wd-avatar">
      <img
        src="${post.avatarIcon}"
        alt="profile pic 1"
        height="48px"
        width="48px"
      />
    </div>
    <div class="wd-content">
      <div class="wd-username">
        ${post.userName}
        <span>${post.handle}</span>
      </div>
      <div class="wd-paragraph">
      </div>
      <img
        class="wd-post-img"
        src="${post.banner}"
        alt="post images"
        width="504px"
        height="264px"
      />
      <div class="wd-post-img-textarea">
        <div class="wd-post-img-title">This is a Title</div>
        <div class="wd-post-img-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Similique harum quas aperiam tenetur incidunt doloribus porro
          iure tempora, ipsa inventore unde nobis iste ducimus repudiandae
          facere sit minima animi nisi.
        </div>
      </div>
      <div class="wd-buttons">
        <div>
          <a href="#"><i class="far fa-comment"></i></a>
        </div>
        <div>
          <a href="#"><i class="fas fa-retweet"></i> 9</a>
        </div>
        <div id="like">
          <a href="#"><i class="far fa-heart"></i> 37</a>
        </div>
        <div>
          <a href="#"><i class="fas fa-external-link-alt"></i></a>
        </div>
      </div>
    </div>
  </div>
  `;
};

$("#wd-test").append(PostItem(post));
