document.addEventListener("DOMContentLoaded", function () {
    fetch('project.json')
        .then(response => response.json())
        .then(data => {
            const projectsContainer = document.querySelector('.projects .content');
            
            data.forEach(project => {
                const projectCard = document.createElement('div');
                projectCard.classList.add('project-card');

                projectCard.innerHTML = `
                    <div class="project-image">
                        <img src="${project.image}" alt="${project.title}">
                    </div>
                    <div class="project-info">
                        <p class="project-category">${project.description}</p>
                        <strong class="project-title">
                            <span>${project.title}</span>
                            <a href="${project.file}" class="more-details">More details</a>
                        </strong>
                    </div>
                `;

                projectsContainer.appendChild(projectCard);
            });
        })
        .catch(error => console.error('Error loading projects:', error));
});