document.getElementById('upload-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const fileInput = document.getElementById('video');
    const file = fileInput.files[0];

    if (!file) {
        alert('Please select a video file.');
        return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
        // Make a POST request to your server or directly to an API
        // Note: This URL should be replaced with your API endpoint
        const response = await fetch('https://example.com/api/upload', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            const data = await response.json();
            document.getElementById('subtitles').textContent = data.subtitles || 'No subtitles found.';
        } else {
            document.getElementById('subtitles').textContent = 'Error processing video.';
        }
    } catch (error) {
        document.getElementById('subtitles').textContent = 'An error occurred: ' + error.message;
    }
});
