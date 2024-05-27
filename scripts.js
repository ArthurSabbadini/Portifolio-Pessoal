document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('commentForm').addEventListener('submit', function(e) {
        e.preventDefault();
        let name = document.getElementById('commentName').value;
        let text = document.getElementById('commentText').value;
        if (name && text) {
            let commentSection = document.querySelector('.comment-section');
            let newComment = document.createElement('div');
            newComment.classList.add('comment');
            newComment.innerHTML = `<p><strong>${name}:</strong> ${text}</p>`;
            commentSection.appendChild(newComment);
            document.getElementById('commentName').value = '';
            document.getElementById('commentText').value = '';
        }
    });

    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Sua mensagem foi enviada com sucesso!');
        this.reset();
    });
});
