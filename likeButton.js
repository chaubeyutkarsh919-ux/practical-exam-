export function attachLikeButton() {
  const likeButton = document.getElementById('like-button');
  if (!likeButton) {
    return;
  }

  likeButton.addEventListener('click', () => {
    alert('Thanks for liking the student scoreboard!');
  });
}
