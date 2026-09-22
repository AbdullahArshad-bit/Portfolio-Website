/**
 * ==========================================================================
 * ABDULLAH ARSHAD PORTFOLIO — JAVASCRIPT ENGINE
 * Fast, lightweight, zero-bloat interactive logic
 * ==========================================================================
 */

const projects = [
  {
    id: "pms",
    category: "enterprise",
    title: "TheMyriad Property Management System",
    categoryLabel: "Enterprise PropTech & ERP",
    role: "Backend & Systems Engineer",
    summary: "Large-scale property management platform managing 1,000+ residents in Dubai. Built and optimized C# / ASP.NET MVC modules, automated housekeeping state transitions, and reconciled financial General Ledger (GL) journal vouchers.",
    heroImg: "assets/projects/pms/hero.png",
    gallery: [
      "assets/projects/pms/hero.png",
      "assets/projects/pms/screen1.png"
    ],
    liveUrl: "https://themyriad.com/",
    liveUrlLabel: "View Official Property (Dubai) ↗",
    // Clean developer skills extracted from the work done
    skills: ["C#", "ASP.NET Core", "ASP.NET MVC", "SQL Server", "Entity Framework Core", "Stored Procedures", "Query Optimization", "LINQ", "REST APIs"],
    keyHighlights: [
      "Engineered automated Housekeeping status ('Clean', 'Dirty', 'Inspected') triggers on resident check-in, check-out, and room inspections.",
      "Optimized data retrieval pipelines using SQL Server Stored Procedures, reducing query execution times by up to 40%.",
      "Resolved complex financial transaction discrepancies between Invoicing and the General Ledger (GL) reporting engine.",
      "Designed secure APIs and services supporting 500+ daily concurrent requests without server thread starvation."
    ]
  },
  {
    id: "clientpulse",
    category: "web",
    title: "ClientPulse — Project Management & CRM",
    categoryLabel: "Full Stack Web Application",
    role: "Full Stack Engineer",
    summary: "Comprehensive project management system and client portal designed for team velocity tracking, milestone monitoring, and streamlined client communications.",
    heroImg: "assets/projects/clientpulse/hero.webp",
    gallery: [
      "assets/projects/clientpulse/hero.webp",
      "assets/projects/clientpulse/screen1.webp",
      "assets/projects/clientpulse/screen2.webp"
    ],
    // Verified skills extracted from Capture.PNG
    skills: ["JavaScript", "PHP", "MySQL", "MongoDB", "CSS3", "Git", "REST APIs", "CRM Architecture"],
    keyHighlights: [
      "Designed and implemented full-featured project workspaces with Kanban progress boards and sprint velocity trackers.",
      "Built cross-database architecture pairing relational MySQL for transactions and MongoDB for activity logging.",
      "Engineered custom chatbot workflows and AI-assisted summaries to streamline client inquiries and project status updates.",
      "Collaborated on responsive UI components ensuring smooth accessibility across desktop, tablet, and mobile browsers."
    ]
  },
  {
    id: "onelifetale",
    category: "ai",
    title: "Onelifetale — AI Storytelling & Voice Synthesis",
    categoryLabel: "AI & Mobile Platform",
    role: "Mobile & Backend Developer",
    summary: "Generative AI storytelling mobile application that builds personalized books, dynamic branching story paths, and realistic voice narration from short audio samples.",
    heroImg: "assets/projects/onelifetale/hero.webp",
    gallery: [
      "assets/projects/onelifetale/hero.webp",
      "assets/projects/onelifetale/screen1.webp",
      "assets/projects/onelifetale/screen2.webp",
      "assets/projects/onelifetale/screen3.webp"
    ],
    // Verified skills extracted from Capture.PNG
    skills: ["React Native", "Node.js", "Generative AI", "Voice Cloning API", "Cross-Platform", "Cloud Media"],
    keyHighlights: [
      "Integrated Generative AI APIs to create full books, generate custom cover art, and compose branching interactive narratives.",
      "Implemented realistic AI Voice Capture enabling users to clone a loved one's voice for personalized story narration.",
      "Engineered cross-platform mobile application utilizing React Native and Node.js backend services.",
      "Built media processing pipelines handling audio uploads, text-to-speech rendering, and cloud storage."
    ]
  },
  {
    id: "traveliya",
    category: "web",
    title: "Traveliya — Travel Booking Platform",
    categoryLabel: "Travel & Booking Web App",
    role: "Full Stack Developer",
    summary: "Curated destination discovery and reservation booking portal featuring interactive destination guides, custom travel itinerary planning, and secure checkout workflows.",
    heroImg: "assets/projects/traveliya/hero.webp",
    gallery: [
      "assets/projects/traveliya/hero.webp",
      "assets/projects/traveliya/screen1.webp",
      "assets/projects/traveliya/screen2.webp"
    ],
    // Verified skills extracted from Capture.PNG
    skills: ["Laravel", "Bootstrap", "jQuery", "PHP", "HTML5", "CSS3", "MySQL", "Booking Engine"],
    keyHighlights: [
      "Engineered reservation engine with real-time availability checking and automated invoice generation.",
      "Developed responsive frontend interfaces with custom destination cards, filtering systems, and dynamic maps.",
      "Structured relational database schemas in MySQL ensuring fast query execution on high-traffic tourism seasons.",
      "Implemented clean MVC architectural separation using the Laravel framework."
    ]
  },
  {
    id: "xtraffic",
    category: "crypto",
    title: "Xtraffic — Crypto Advertising & Analytics",
    categoryLabel: "Web3 Advertising & Analytics",
    role: "Frontend & UI Developer",
    summary: "High-conversion crypto advertising platform showcasing campaign marketing funnels, real-time ad network analytics, and audience targeting workflows.",
    heroImg: "assets/projects/xtraffic/hero.webp",
    gallery: [
      "assets/projects/xtraffic/hero.webp",
      "assets/projects/xtraffic/screen1.webp",
      "assets/projects/xtraffic/screen2.webp",
      "assets/projects/xtraffic/screen3.webp",
      "assets/projects/xtraffic/screen4.webp"
    ],
    // Verified skills extracted from Capture.PNG
    skills: ["JavaScript", "HTML5", "CSS3", "Analytics Dashboard", "Web3 Marketing", "Responsive UI"],
    keyHighlights: [
      "Crafted sleek dark-themed Web3 user interfaces with gradient accents and micro-animations.",
      "Engineered interactive analytics dashboards presenting campaign impressions, click-through rates, and conversions.",
      "Designed step-by-step advertising onboarding roadmap guiding projects from token launch to campaign delivery.",
      "Optimized layout for high mobile and desktop rendering speeds with zero visual layout shift."
    ]
  },
  {
    id: "internship",
    category: "enterprise",
    title: "Internship Management Portal",
    categoryLabel: "Enterprise HR Tech",
    role: "Backend & Full Stack Engineer",
    summary: "Enterprise applicant and internship tracking platform separating concerns into an ASP.NET Core REST API backend and a responsive web application.",
    heroImg: "assets/projects/internship/hero.jpg",
    gallery: [
      "assets/projects/internship/hero.jpg",
      "assets/projects/internship/screen1.jpg"
    ],
    skills: ["C#", "ASP.NET Core API", "SQL Server", "Bootstrap", "JavaScript", "RBAC", "Clean Architecture"],
    keyHighlights: [
      "Implemented granular Role-Based Access Control (RBAC) protecting endpoints for applicants, mentors, and administrators.",
      "Built clean, decoupled RESTful APIs using ASP.NET Core following Clean Architecture principles.",
      "Streamlined the student application lifecycle from submission through interview scheduling and offer letters.",
      "Structured comprehensive database migrations and relation schemas in SQL Server."
    ]
  }
];

document.addEventListener("DOMContentLoaded", () => {
  renderProjectsList("all");
  initFilterChips();
  initModal();
  initLightbox();
  initCopyEmail();
  initContactForm();
});

// Render Projects List
function renderProjectsList(category) {
  const container = document.getElementById("projectsContainer");
  if (!container) return;

  const filtered = category === "all" 
    ? projects 
    : projects.filter(p => p.category === category);

  container.innerHTML = filtered.map(p => `
    <article class="project-item" data-id="${p.id}">
      <div class="project-thumb-wrap">
        <img 
          src="${p.heroImg}" 
          alt="${p.title}" 
          class="project-thumb" 
          loading="lazy" 
          width="400" 
          height="250"
        />
      </div>
      <div class="project-content">
        <div class="project-meta">
          <span class="project-category">${p.categoryLabel}</span>
          <span class="mono" style="font-size: 0.78rem; color: var(--text-muted);">${p.role}</span>
        </div>
        <h3 class="project-name">${p.title}</h3>
        <p class="project-desc">${p.summary}</p>
        <div class="project-tags">
          ${p.skills.slice(0, 5).map(s => `<span class="tech-badge">${s}</span>`).join("")}
          ${p.skills.length > 5 ? `<span class="tech-badge">+${p.skills.length - 5}</span>` : ""}
        </div>
      </div>
    </article>
  `).join("");

  document.querySelectorAll(".project-item").forEach(item => {
    item.addEventListener("click", () => {
      const id = item.getAttribute("data-id");
      openModal(id);
    });
  });
}

// Filter Chips
function initFilterChips() {
  const chips = document.querySelectorAll(".filter-chip");
  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      chips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      const cat = chip.getAttribute("data-category");
      renderProjectsList(cat);
    });
  });
}

// Modal
function openModal(id) {
  const project = projects.find(p => p.id === id);
  if (!project) return;

  const modal = document.getElementById("projectModal");
  const body = document.getElementById("modalBody");

  body.innerHTML = `
    <div style="margin-bottom: 1.25rem;">
      <span class="project-category" style="font-size: 0.85rem;">${project.categoryLabel}</span>
      <h2 style="font-size: clamp(1.5rem, 3vw, 2rem); margin: 0.4rem 0 0.75rem;">${project.title}</h2>
      <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6;">${project.summary}</p>
      
      ${project.liveUrl ? `
        <div style="display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap; margin-top: 1rem;">
          <a href="${project.liveUrl}" target="_blank" rel="noopener" class="btn btn-primary btn-sm" style="display: inline-flex; align-items: center; gap: 0.4rem; text-decoration: none;">
            <span>🌐</span> ${project.liveUrlLabel || "Visit Live Site ↗"}
          </a>
          <span style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-muted); background: rgba(255, 255, 255, 0.04); padding: 0.35rem 0.75rem; border-radius: var(--radius-full); border: 1px solid var(--border);">
            🔒 Internal PMS Deployed under Client NDA
          </span>
        </div>
      ` : `
        <div style="margin-top: 1rem;">
          <span style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-muted); background: rgba(255, 255, 255, 0.04); padding: 0.35rem 0.75rem; border-radius: var(--radius-full); border: 1px solid var(--border); display: inline-flex; align-items: center; gap: 0.4rem;">
            🔒 Proprietary Client Project · Code Protected under NDA
          </span>
        </div>
      `}
    </div>

    <!-- Tech Stack (Clean Badges, NO raw white screenshots!) -->
    <div style="margin: 1.25rem 0;">
      <h4 style="font-size: 0.85rem; text-transform: uppercase; color: var(--text-muted); font-family: var(--font-mono); margin-bottom: 0.6rem;">Technologies Used</h4>
      <div style="display: flex; flex-wrap: wrap; gap: 0.45rem;">
        ${project.skills.map(s => `<span class="tech-badge" style="font-size: 0.82rem; padding: 0.3rem 0.75rem;">${s}</span>`).join("")}
      </div>
    </div>

    <!-- Key Highlights / Architecture -->
    <div style="margin: 1.5rem 0;">
      <h4 style="font-size: 0.85rem; text-transform: uppercase; color: var(--text-muted); font-family: var(--font-mono); margin-bottom: 0.6rem;">Key Technical Contributions</h4>
      <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.6rem;">
        ${project.keyHighlights.map(h => `
          <li style="display: flex; gap: 0.6rem; font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6;">
            <span style="color: var(--accent); font-weight: bold;">▹</span>
            <span>${h}</span>
          </li>
        `).join("")}
      </ul>
    </div>

    <!-- Screenshots Gallery -->
    <div style="margin-top: 1.5rem;">
      <h4 style="font-size: 0.85rem; text-transform: uppercase; color: var(--text-muted); font-family: var(--font-mono); margin-bottom: 0.75rem;">Project Gallery</h4>
      <div class="modal-img-grid">
        ${project.gallery.map(img => `
          <div class="modal-img-wrap" style="position: relative; overflow: hidden; border-radius: var(--radius-sm);">
            <img src="${img}" alt="${project.title}" class="modal-img gallery-trigger-img" data-full-img="${img}" loading="lazy" title="Click to view full image" />
          </div>
        `).join("")}
      </div>
    </div>
  `;

  // Attach Lightbox triggers to gallery images
  modal.querySelectorAll(".gallery-trigger-img").forEach(imgEl => {
    imgEl.addEventListener("click", (e) => {
      e.stopPropagation();
      const src = imgEl.getAttribute("data-full-img") || imgEl.getAttribute("src");
      if (window.openLightbox) {
        window.openLightbox(src);
      }
    });
  });

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

// Image Lightbox (In-tab image preview with top-right close X)
function initLightbox() {
  const lightbox = document.getElementById("imageLightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const closeBtn = document.getElementById("lightboxClose");
  if (!lightbox || !lightboxImg) return;

  function closeLightbox() {
    lightbox.classList.remove("active");
    setTimeout(() => {
      lightboxImg.src = "";
    }, 200);
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      closeLightbox();
    });
  }

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox || e.target.id === "lightboxContent") {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox.classList.contains("active")) {
      e.stopPropagation();
      closeLightbox();
    }
  });

  window.openLightbox = function(src) {
    lightboxImg.src = src;
    lightbox.classList.add("active");
  };
}

function initModal() {
  const modal = document.getElementById("projectModal");
  const closeBtn = document.getElementById("modalClose");

  if (!modal || !closeBtn) return;

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
      document.body.style.overflow = "auto";
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      modal.classList.remove("active");
      document.body.style.overflow = "auto";
    }
  });
}

// Copy Email
function initCopyEmail() {
  const btn = document.getElementById("copyEmailBtn");
  if (!btn) return;

  btn.addEventListener("click", () => {
    const email = "abdullaharshad6756@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      showToast("Email copied: " + email);
    }).catch(() => {
      showToast("Email: " + email);
    });
  });
}

function showToast(msg) {
  let toast = document.getElementById("toastNotice");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toastNotice";
    toast.className = "toast-notice";
    document.body.appendChild(toast);
  }
  toast.innerText = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3000);
}

// Helper to escape HTML in user inputs
function escapeHtml(text) {
  const div = document.createElement("div");
  div.innerText = text;
  return div.innerHTML;
}

// Contact Form with Interactive Feedback & Direct WhatsApp Integration
function initContactForm() {
  const form = document.getElementById("contactForm");
  const statusBox = document.getElementById("formStatus");
  const submitBtn = document.getElementById("submitBtn");
  const whatsappDirectBtn = document.getElementById("whatsappDirectBtn");

  if (!form) return;

  // Direct WhatsApp Send button using whatever is currently typed in the form
  if (whatsappDirectBtn) {
    whatsappDirectBtn.addEventListener("click", () => {
      const name = document.getElementById("nameInput")?.value.trim() || "";
      const email = document.getElementById("emailInput")?.value.trim() || "";
      const msg = document.getElementById("msgInput")?.value.trim() || "";

      let text = "Hi Abdullah, I am reaching out from your portfolio.";
      if (name) text += `\nName: ${name}`;
      if (email) text += `\nEmail: ${email}`;
      if (msg) text += `\nMessage: ${msg}`;

      const waUrl = `https://wa.me/923326665102?text=${encodeURIComponent(text)}`;
      window.open(waUrl, "_blank");
    });
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("nameInput")?.value.trim() || "";
    const email = document.getElementById("emailInput")?.value.trim() || "";
    const message = document.getElementById("msgInput")?.value.trim() || "";

    if (!name || !email) {
      if (statusBox) {
        statusBox.style.display = "block";
        statusBox.innerHTML = `
          <div style="background: rgba(239, 68, 68, 0.15); border: 1px solid rgba(239, 68, 68, 0.35); padding: 0.75rem 1rem; border-radius: 8px; margin-bottom: 1rem; color: #f87171; font-size: 0.88rem;">
            Please enter your name and email address.
          </div>
        `;
      }
      return;
    }

    // Visual button state
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerText = "Sending Message...";
      submitBtn.style.opacity = "0.7";
    }

    // WhatsApp quick link with prefilled text
    const waText = `Hi Abdullah,\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;
    const waUrl = `https://wa.me/923326665102?text=${encodeURIComponent(waText)}`;

    // Netlify AJAX submission with local fallback
    const formData = new FormData(form);
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    }).catch(err => {
      console.log("Local/Offline preview mode:", err);
    }).finally(() => {
      // Show prominent confirmation box right inside the card
      if (statusBox) {
        statusBox.style.display = "block";
        statusBox.innerHTML = `
          <div style="background: rgba(16, 185, 129, 0.15); border: 1px solid rgba(16, 185, 129, 0.4); padding: 1.1rem 1.25rem; border-radius: 10px; margin-bottom: 1.25rem; color: #ffffff;">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.4rem; color: #34d399; font-weight: 700; font-size: 1rem;">
              <span>✓</span> Message Sent Successfully!
            </div>
            <p style="font-size: 0.88rem; color: #cbd5e1; line-height: 1.5; margin-bottom: 0.75rem;">
              Thank you, <strong>${escapeHtml(name)}</strong>. Your inquiry has been forwarded to <strong>abdullaharshad6756@gmail.com</strong>. Abdullah will review and respond to <strong>${escapeHtml(email)}</strong> shortly.
            </p>
            <div style="border-top: 1px solid rgba(255, 255, 255, 0.1); padding-top: 0.6rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem;">
              <span style="font-size: 0.8rem; color: var(--text-muted);">Want an instant direct response?</span>
              <a href="${waUrl}" target="_blank" rel="noopener" style="font-size: 0.82rem; font-weight: 600; color: #38bdf8; text-decoration: underline;">
                Send directly on WhatsApp ↗
              </a>
            </div>
          </div>
        `;
      }

      // Clear the form fields
      document.getElementById("nameInput").value = "";
      document.getElementById("emailInput").value = "";
      document.getElementById("msgInput").value = "";

      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerText = "Send Another Message →";
        submitBtn.style.opacity = "1";
      }

      showToast("✓ Message received! Thank you, " + name);
    });
  });
}
