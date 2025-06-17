const intro = document.querySelector('.intro');
const toggleIntro = document.getElementById('toggleIntro');
const card = document.getElementById('profileCard');
const blog = document.getElementById('blog');
const toggleBlog = document.getElementById('toggleBlog');

let introVisible = true;  // Mặc định intro mở
let blogVisible = false;

// Hiện mặc định phần intro ngay khi load trang
window.addEventListener('DOMContentLoaded', () => {
  intro.classList.add('show');
});

toggleIntro.addEventListener('click', () => {
  introVisible = !introVisible;
  intro.classList.toggle('show', introVisible);
  card.classList.toggle('move-left', introVisible);
  if (introVisible) {
    blog.classList.remove('show');
    blogVisible = false;
  }
});

toggleBlog.addEventListener('click', () => {
  blogVisible = !blogVisible;
  blog.classList.toggle('show', blogVisible);
  card.classList.toggle('move-left', blogVisible);
  if (blogVisible) {
    intro.classList.remove('show');
    introVisible = false;
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.intro, .blog').forEach(section => {
  observer.observe(section);
});
