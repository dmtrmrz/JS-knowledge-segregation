// Function

const someProfile = {
  name: "Dzmitry",
  commentQty: 26,
  hasSignedAgreement: false,
};

const someInfo = ({ name, commentQty }) => {
  if (!commentQty) {
    return `User ${name} has no comments`;
  }
  return `User ${name} has ${commentQty} comments`;
};

// const someInfo = (uProfile) => {
//   const { name, commentQty } = uProfile;
//   if (!commentQty) {
//     return `User ${name} has no comments`;
//   }
//   return `User ${name} has ${commentQty} comments`;
// };

someInfo(someProfile); // 'User Dzmitry has 26 comments'
