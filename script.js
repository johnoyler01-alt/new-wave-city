document.addEventListener("DOMContentLoaded", () => {
  // 1. Mobile Menu Toggle Logic
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      // Toggles the 'active' class on the nav-links, which the CSS uses to slide the menu in/out
      navLinks.classList.toggle("active");
    });

    // Close menu when a link is clicked (good for single-page navigation)
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        // Check if the menu is currently open (active)
        if (navLinks.classList.contains("active")) {
          navLinks.classList.remove("active");
        }
      });
    });
  }

  // 2. Event Data and Generation Logic
  const eventsData = [
    {
      date: "OCT 28",
      day: "SAT",
      title: "DEPECHE MODE Night",
      details: "Music by: DJ Skander",
      status: "Tickets Available",
      link: "#",
    },
    {
      date: "NOV 4",
      day: "FRI",
      title: "The Cure vs. Siouxsie & the Banshees",
      details: "Music by: Guest DJ: SynthLord",
      status: "Almost Sold Out!",
      link: "#",
    },
    {
      date: "NOV 11",
      day: "SAT",
      title: "80s New Wave & Post-Punk",
      details: "Music by: Resident DJ: NewWaveGod",
      status: "General Admission",
      link: "#",
    },
    {
      date: "DEC 2",
      day: "SAT",
      title: "90s Goth & Industrial Throwback",
      details: "Music by: DJ Deadbeat",
      status: "Tickets Available",
      link: "#",
    },
  ];

  const eventsContainer = document.getElementById("events-container");

  if (eventsContainer) {
    eventsData.forEach((event) => {
      const isSoldOut = event.status.toLowerCase().includes("sold out");
      const buttonText = isSoldOut ? "Sold Out" : "Get Tickets";
      const buttonClass = isSoldOut
        ? "cta-event-button cta-sold-out"
        : "cta-event-button";

      const eventCard = document.createElement("div");
      eventCard.classList.add("event-card");

      // Generate the HTML structure for the event card
      eventCard.innerHTML = `
                <div class="event-date-box">
                    <span class="event-month-day">${event.date}</span>
                    <span class="event-day-name">${event.day}</span>
                </div>
                <div class="event-details">
                    <h3 class="event-title">${event.title}</h3>
                    <p class="event-music">${event.details}</p>
                    <p class="event-status">${event.status}</p>
                </div>
                <div class="event-actions">
                    <a href="${event.link}" class="${buttonClass}">${buttonText}</a>
                </div>
            `;
      // Add the new card to the events section
      eventsContainer.appendChild(eventCard);
    });
  }
});
