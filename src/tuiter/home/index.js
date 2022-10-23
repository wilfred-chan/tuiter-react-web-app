import PostItem from "./post-item";
import posts from "./posts.json";

const HomeComponent = () => {
  return (
    <div>
      {posts.map((post) => (
        <PostItem post={post} />
      ))}
    </div>
  );
};

export default HomeComponent;
