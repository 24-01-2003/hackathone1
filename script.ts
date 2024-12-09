const form = document.getElementById('resumeForm') as HTMLFormElement;
const pictureInput = document.getElementById('picture') as HTMLInputElement;
const previewImage = document.getElementById('previewImage') as HTMLImageElement;

pictureInput.addEventListener('change', (event: Event) => {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            if (typeof reader.result === 'string') {
                previewImage.src = reader.result;
            }
        };
        reader.readAsDataURL(file);
    }
});

form.addEventListener('submit', (event: Event) => {
    event.preventDefault();
    const formData = new FormData(form);
    console.log('Form submitted:', Object.fromEntries(formData.entries()));
    alert('Resume generated successfully!');
});
