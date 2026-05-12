const items = [
  {
    name: "Budget Tracking",
    category: "Finance",
    description: "I like keeping track of spending and saving to stay organized."
  },
  {
    name: "Stock Research",
    category: "Finance",
    description: "I enjoy looking at daily stock movement and reading financial news while also acting upon stocks reaching a low."
  },
  {
    name: "Computer Repair",
    category: "Technology",
    description: "I am interested in learning how computers work and how to build and fix them."
  },
  {
    name: "CompTIA A+ Study",
    category: "Technology",
    description: "I am currently studying for my CompTIA A+ certification."
  },
  {
    name: "Soccer",
    category: "Sports",
    description: "I enjoy playing and watching soccer during my free time."
  },
  {
    name: "Strategy Games",
    category: "Sports",
    description: "I like games that require planning, thinking ahead, and strategy."
  }
];

function renderItems(list) {
  const container = document.getElementById("container");
  const count = document.getElementById("count");

  container.innerHTML = "";

  for (let i = 0; i < list.length; i++) {
    const card = document.createElement("div");
    card.className = "item-card";

    card.innerHTML =
      "<h3>" + list[i].name + "</h3>" +
      "<p><strong>Category:</strong> " + list[i].category + "</p>" +
      "<p>" + list[i].description + "</p>";

    container.appendChild(card);
  }

  count.textContent = list.length + " items shown";
}

function filterItems(value) {
  switch (value) {
    case "":
    case "All":
      renderItems(items);
      break;

    case "Finance":
      const financeItems = [];
      for (let i = 0; i < items.length; i++) {
        if (items[i].category === "Finance") {
          financeItems.push(items[i]);
        }
      }
      renderItems(financeItems);
      break;

    case "Technology":
      const techItems = [];
      for (let i = 0; i < items.length; i++) {
        if (items[i].category === "Technology") {
          techItems.push(items[i]);
        }
      }
      renderItems(techItems);
      break;

    case "Sports":
      const sportsItems = [];
      for (let i = 0; i < items.length; i++) {
        if (items[i].category === "Sports") {
          sportsItems.push(items[i]);
        }
      }
      renderItems(sportsItems);
      break;

    default:
      renderItems(items);
      break;
  }
}

function trackNav(label) {
  gtag('event', 'nav_click', {
    event_category: 'Navigation',
    event_label: label
  });
}

function trackRoomClick() {
  gtag('event', 'room_click', {
    event_category: 'Engagement',
    event_label: 'Soccer Page Room Image'
  });
}

filterItems("");
