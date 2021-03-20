export function CardReview({ name, review, avatar, isBgBlue }) {
  return `
            <article class="card-testimonial ${
              isBgBlue ? 'bg-soft-blue' : ''
            } ">
              <img
                class="image"
                src="${avatar}"
                alt="${name} avatar"
              />
              <div class="content">
                <div class="card-testimonial__content">
                  <h3>${name}</h3>
                  <p>${review}</p>
                </div>
              </div>
            </article>
    `;
}
