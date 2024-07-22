
document.addEventListener('DOMContentLoaded', (event) => {
  const modal = document.getElementById('myModal');
  const modalImg = document.getElementById('img01');
  const captionText = document.getElementById('caption');
  const modalText = document.getElementById('modal-text');
  const span = document.getElementsByClassName('close')[0];

  document.querySelectorAll('.fruit-img').forEach(img => {
    img.onclick = function() {
      modal.style.display = 'block';
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
      modalText.innerHTML = this.getAttribute('data-text');
    }
  });

  span.onclick = function() {
    modal.style.display = 'none';
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  }
});

