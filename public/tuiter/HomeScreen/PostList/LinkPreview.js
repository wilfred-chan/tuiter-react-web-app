const LinkPreview = (post) => {
  return `
        <div class="link-preview border border-light rounded-3 p-3">
            <div class="text-white">${post.linkTitle}</div>
            <div class="text-muted">${post.linkDescription}</div>
            <div><a class="text-muted" href="${post.linkURL}">${post.linkURL}</a></div>
        </div>
    `;
};

export default LinkPreview;
