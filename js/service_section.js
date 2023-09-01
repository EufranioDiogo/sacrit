const serviceItens = {
  Networking: [
    {
      id: "service-item-1",
      title: "Roteamento",
      icon: "../assets/icons/clarity_router-solid.svg",
      activeIcon: "../assets/icons/clarity_router-solid.svg",
      description:
        "Temos a melhor solução de roteamento para a sua empresa, usando os mais diferentes e vendors.",
      image: "../assets/images/pexels-jah-nomad-17220238.jpg",
    },
    {
      id: "service-item-2",
      title: "Switching",
      icon: "../assets/icons/mi_switch.svg",
      activeIcon: "../assets/icons/mi_switch.svg",
      description:
        "lorem lorem lorem lorem ipsum dolor sit amet, consectetur adip",
      image: "../assets/images/pexels-brett-sayles-4339335.jpg",
    },
  ],
  "Data Center": [
    {
      id: "service-item-3",
      title: "Servidores",
      icon: "../assets/icons/bi_hdd-network-fill.svg",
      activeIcon: "../assets/icons/bi_hdd-network-fill.svg",
      description:
        "lorem lorem lorem lorem ipsum dolor sit amet, consectetur adip",
      image: "../assets/images/pexels-jah-nomad-17220238.jpg",
    },
    {
      id: "service-item-4",
      title: "Armazenamento",
      icon: "../assets/icons/mdi_storage.svg",
      activeIcon: "../assets/icons/mdi_storage.svg",
      description:
        "lorem lorem lorem lorem ipsum dolor sit amet, consectetur adip",
      image: "../assets/images/pexels-brett-sayles-4597280.jpg",
    },
  ],
  Networking1: [
    {
      id: "service-item-1",
      title: "Roteamento",
      icon: "../assets/icons/clarity_router-solid.svg",
      activeIcon: "../assets/icons/clarity_router-solid.svg",
      description:
        "Temos a melhor solução de roteamento para a sua empresa, usando os mais diferentes e vendors.",
      image: "../assets/images/pexels-jah-nomad-17220238.jpg",
    },
    {
      id: "service-item-2",
      title: "Switching",
      icon: "../assets/icons/mi_switch.svg",
      activeIcon: "../assets/icons/mi_switch.svg",
      description:
        "lorem lorem lorem lorem ipsum dolor sit amet, consectetur adip",
      image: "../assets/images/pexels-brett-sayles-4339335.jpg",
    },
  ],
  "Data Center1": [
    {
      id: "service-item-3",
      title: "Servidores",
      icon: "../assets/icons/bi_hdd-network-fill.svg",
      activeIcon: "../assets/icons/bi_hdd-network-fill.svg",
      description:
        "lorem lorem lorem lorem ipsum dolor sit amet, consectetur adip",
      image: "../assets/images/pexels-jah-nomad-17220238.jpg",
    },
    {
      id: "service-item-4",
      title: "Armazenamento",
      icon: "../assets/icons/mdi_storage.svg",
      activeIcon: "../assets/icons/mdi_storage.svg",
      description:
        "lorem lorem lorem lorem ipsum dolor sit amet, consectetur adip",
      image: "../assets/images/pexels-brett-sayles-4597280.jpg",
    },
  ],
};

const keysServiceItens = Object.keys(serviceItens);
let actualStart = 0;
let actualEnd = 0;

const createElement = ({ id, title, icon, activeIcon, description, image }) => {
  const li = document.createElement("li");
  li.id = id.toString();
  li.className = "inner-section-2--service-item inner-section-2--service-item";
  li.addEventListener("mouseenter", (ev) => {
    ev.stopPropagation();
    document.querySelector(
      ".inner-section-2-container--left"
    ).style.backgroundImage = `url('${image}')`;
  });
  li.addEventListener("mouseleave", (ev) => {
    ev.stopPropagation();
  });

  const div = document.createElement("div");

  div.className = "inner-section-2--service-item--container";

  const imageElement = document.createElement("img");

  imageElement.className = "inner-section-2--service-item--img";
  imageElement.src = icon;
  imageElement.alt = "Icone " + title;

  const span = document.createElement("span");

  span.className = "inner-section-2--service-item--text";

  span.innerText = title;

  div.appendChild(imageElement);
  div.appendChild(span);

  li.appendChild(div);

  li.addEventListener("mouseover", (ev) => {
    ev.stopPropagation();
    ev.target.classList.toggle("inner-section-2--service-item_active");
    document.querySelector(
      ".inner-section-2-container--left"
    ).style.backgroundImage = image;
    imageElement.src = activeIcon;
    document.querySelector(
      ".inner-section-2-container--left--content-container-title"
    ).innerText = title;
    document.querySelector(
      ".inner-section-2-container--left--content-container-description"
    ).innerText = description;
  });
  li.addEventListener("mouseleave", (ev) => {
    ev.stopPropagation();
    ev.target.classList.toggle("inner-section-2--service-item_active");
    imageElement.src = icon;
    document.querySelector(
      ".inner-section-2-container--left--content-container-title"
    ).innerText = title;
    document.querySelector(
      ".inner-section-2-container--left--content-container-description"
    ).innerText = description;
  });

  return li;
};

const createSection = ({ start = 0, end = 0 }) => {
  end =
    end == 0
      ? keysServiceItens.length >= 2
        ? 2
        : keysServiceItens.length
      : end;
  actualStart = end;

  const sectionsContainer = document.querySelector(
    ".inner-section-2-container--control-container"
  );

  sectionsContainer.innerHTML = '';

  for (let i = start; i < end; i++) {
    const key = keysServiceItens[i];
    const section = document.createElement("div");
    section.className = "inner-section-2-container-control-container--itens";

    const heading3 = document.createElement("h3");
    heading3.innerText = key;
    heading3.className = "heading-3";

    const serviceItensListElement = document.createElement("ul");
    serviceItensListElement.className = "inner-section-2-service-itens-list";

    services = serviceItens[key];

    for (let service of services) {
      serviceItensListElement.appendChild(createElement(service));
    }

    section.appendChild(heading3);
    section.appendChild(serviceItensListElement);

    sectionsContainer.appendChild(section);
  }
};

let showAll = false;
const moreButton = document.querySelector(".inner-section-2--see-more-itens");

moreButton.addEventListener("click", () => {
  if (showAll == true) {
    actualStart = 0;
    moreButton.innerText = "Mais";
    showAll = false;
    createSection({start: 0, end: 0});
  } else {
    createSection({
      start: 0,
      end:
        actualStart + 2 >= keysServiceItens.length
          ? keysServiceItens.length
          : actualStart + 2,
    });

    if (actualStart >= keysServiceItens.length) {
      moreButton.innerText = "Ocultar";
      showAll = true;
    }
  }
});

createSection({});
