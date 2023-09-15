const slider = document.querySelector("#slider");

const slides = [
  {
    id: 1,
    title: "My slide 1",
    description: "Slide description 1",
    image:
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 2,
    title: "My slide 2",
    description: "Slide description 2",
    image:
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 3,
    title: "My slide 3",
    description: "Slide description 3",
    image:
      "https://images.unsplash.com/photo-1590362891991-f776e747a588?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
  },
  {
    id: 4,
    title: "My slide 4",
    description: "Slide description 4",
    image:
      "https://images.unsplash.com/photo-1502489597346-dad15683d4c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2148&q=80",
  },
  {
    id: 5,
    title: "My slide 5",
    description: "Slide description 5",
    image:
      "https://images.unsplash.com/photo-1610899600551-a30bf595959e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
  },
  {
    id: 6,
    title: "My slide 6",
    description: "Slide description 6",
    image:
      "https://images.unsplash.com/photo-1567807708938-79bb7cda5e23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=985&q=80",
  },
];

if (slides.length % 2 != 0) {
  alert("Number of slides must be even");
}

slider.style.width = `${slides.length * 350}px`;

slides.forEach((slide) => {
  slider.innerHTML += `
        <div class='slide'>
            <h1>${slide.title}</h1>
            <p>${slide.description}</p>
            <img src="${slide.image}">
        </div>
    `;
});
