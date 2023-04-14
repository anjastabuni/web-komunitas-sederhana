document.getElementById("dynamic-gallery-demo-load-more").addEventListener("click", () => {
  const newItems = [
    {
      src: "assets/images/about.jpeg",
      thumb: "assets/images/about.jpeg",
      subHtml: "<h4>Image 4 title</h4><p>Image 4 descriptions.</p>",
    },
    {
      src: "assets/images/about.jpeg",
      thumb: "assets/images/about.jpeg",
      subHtml: "<h4>Image 5 title</h4><p>Image 5 descriptions.</p>",
    },
  ];
  const updatedDynamicElements = [...dynamicEl, ...newItems];
  dynamicGallery.refresh(updatedDynamicElements);

  // To open gallery after updating slides,
  dynamicGallery.openGallery();
});
