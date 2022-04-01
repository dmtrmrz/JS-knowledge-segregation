const newPost = (post, addedAt = Date()) => ({
  ...post,
  addedAt,
});
const firstPost = {
  id: 1,
  author: "Dzmitry",
};

console.log(newPost(firstPost));
