export function CardProject({ name, description, image, isRightSide }) {
  return `
         <article class="project ${isRightSide ? 'r-side' : 'l-side'}" >
            <img
              class="project__image"
              src="${image}"
              alt="${name} project"
              id="${name}-project"
            />
            <div class="project__description" >
              <div class="description-content">
                <h3>${name}</h3>
                <p>${description}</p>
                <div class="buttons">
                  <button class="btn ${
                    isRightSide ? 'btn--initial-pink' : 'btn--initial'
                  } ">Ver código</button>
                  <button class="btn ${
                    isRightSide ? 'btn--soft-pink' : 'btn--soft-blue'
                  } ">Ver proyecto</button>
                </div>
              </div>
            </div>
          </article
  `;
}
