import LeadForm from "./components/LeadForm";
import ArchMotif from "./components/ArchMotif";

const PHONE = "+91 87928 99027";
const PHONE_TEL = "+918792899027";
const WHATSAPP = "+91 88678 55125";
const WHATSAPP_LINK =
  "https://wa.me/918867855125?text=" +
  encodeURIComponent(
    "Hi, I'd like more details on Godrej Florenne (Soukya Road, Whitefield)."
  );
const EMAIL = "nfsestates.web@gmail.com";

const typologies = [
  {
    name: "4 Bed Optima",
    size: "3,725",
    price: "₹5.40 Cr* onwards",
    note: "The entry point into Florenne's rowhouse collection — four floors of formal living, dining and bedroom privacy.",
  },
  {
    name: "4 Bed Premia",
    size: "4,061",
    price: "On request",
    note: "Everything in the Optima plan, with an additional dedicated study space.",
  },
  {
    name: "4 Bed Luxe",
    size: "4,515",
    price: "On request",
    note: "Expanded living areas with multi-zone entertainment layouts across levels.",
  },
  {
    name: "5 Bed Luxe",
    size: "5,523",
    price: "On request",
    note: "The flagship configuration, built for multi-generational households.",
  },
];

const amenityGroups = [
  {
    title: "Clubhouse & indoor recreation",
    items: [
      "Grand multi-level clubhouse",
      "Resort-style pool with dedicated kids' pool",
      "Indoor games arcade — snooker, table tennis, carrom, chess",
      "Banquet hall with attached kitchen & party lawn",
      "Rooftop party deck and cafeteria",
      "Spa, steam & sauna, salon, dance/zumba floor",
      "Library, reading lounge and co-working spaces",
      "Mini-theatre for private screenings",
    ],
  },
  {
    title: "Fitness & wellness",
    items: [
      "Fully equipped gymnasium with a senior citizens' zone",
      "Dedicated yoga & meditation spaces",
      "Jogging tracks, walking paths and cycling loops",
    ],
  },
  {
    title: "Sports & outdoor",
    items: [
      "Lawn tennis and basketball courts",
      "Cricket practice net and multi-activity turf",
      "Amphitheatre for community gatherings",
      "Pet park",
      "75%+ open space — themed gardens, nature trails, urban farming",
    ],
  },
  {
    title: "Family & children",
    items: [
      "Outdoor play parks and toddlers' zones",
      "On-site creche",
      "Indoor play zone, ball pit and art studio",
    ],
  },
  {
    title: "Safety & infrastructure",
    items: [
      "24/7 security with gated entry and CCTV coverage",
      "Video door phone in every rowhouse",
      "Rainwater harvesting, STP and solar-powered common areas",
      "100% power backup for common areas",
      "EV charging points and car wash bays",
      "On-site medical emergency room",
    ],
  },
];

const locationGroups = [
  {
    title: "Workplaces",
    items: [
      ["ITPL (International Tech Park Bangalore)", "15–20 min"],
      ["EPIP Zone, Whitefield", "15 min"],
      ["Hoodi tech hubs", "25 min"],
      ["Bagmane Tech Park / ORR, Marathahalli", "30–35 min"],
    ],
  },
  {
    title: "Schools",
    items: [
      ["National Public School, Whitefield", "Nearby"],
      ["Global Indian International School", "Short drive"],
      ["The International School Bangalore", "Easily accessible"],
      ["Greenwood High International School", "Well within reach"],
    ],
  },
  {
    title: "Healthcare",
    items: [
      ["Manipal Hospital, Whitefield", "15 min"],
      ["Columbia Asia / Aster Whitefield", "Nearby"],
      ["Narayana Multispeciality, Hoodi", "Short commute"],
      ["Vydehi Hospital & Research Centre", "15–20 min"],
    ],
  },
  {
    title: "Retail & transit",
    items: [
      ["Nexus Shantiniketan Mall", "15–20 min"],
      ["Inorbit Mall, Whitefield", "15 min"],
      ["Whitefield Railway Station", "10–15 min"],
      ["Namma Metro — Kadugodi Station", "15 min"],
      ["Kempegowda International Airport", "60–75 min"],
    ],
  },
];

export default function Home() {
  return (
    <>
      {/* ---------------------------------------------------------- HEADER */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "rgba(243,239,228,0.9)",
          backdropFilter: "blur(6px)",
          borderBottom: "1px solid var(--line)",
        }}
      >
        <div
          className="wrap"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 76,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.3rem",
              letterSpacing: "0.02em",
            }}
          >
            Florenne
          </span>
          <nav
            aria-label="Primary"
            style={{ display: "flex", gap: 28, fontSize: "0.92rem" }}
            className="nav-links"
          >
            <a href="#residences">Residences</a>
            <a href="#amenities">Amenities</a>
            <a href="#location">Location</a>
            <a href="#enquire" className="btn btn-primary" style={{ padding: "10px 20px" }}>
              Enquire
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* -------------------------------------------------------- HERO */}
        <section style={{ overflow: "hidden", background: "var(--stone)" }}>
          <div
            className="wrap hero-grid"
            style={{
              paddingTop: "clamp(48px, 8vw, 96px)",
              paddingBottom: "clamp(48px, 8vw, 96px)",
              minHeight: "min(88vh, 780px)",
            }}
          >
            <div>
              <p className="eyebrow">Godrej Properties · Soukya Road, Whitefield</p>
              <h1
                style={{
                  fontSize: "clamp(2.4rem, 5vw, 4rem)",
                  lineHeight: 1.04,
                  marginTop: 14,
                }}
              >
                Godrej Florenne
              </h1>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
                  color: "var(--ink-soft)",
                  marginTop: 18,
                  maxWidth: 480,
                }}
              >
                218 independent rowhouses on 20 acres, drawn from the
                proportions of French Renaissance architecture — a private
                garden and rooftop terrace with every home.
              </p>
              <div style={{ display: "flex", gap: 16, marginTop: 36, flexWrap: "wrap" }}>
                <a href="#enquire" className="btn btn-primary">
                  Request site visit
                </a>
                <a href="#residences" className="btn btn-outline-dark">
                  View residences
                </a>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "clamp(20px, 4vw, 48px)",
                  marginTop: 56,
                  flexWrap: "wrap",
                }}
              >
                {[
                  ["20", "Acres"],
                  ["218", "Rowhouses"],
                  ["G+3", "Levels"],
                  ["₹5.40 Cr*", "Onwards"],
                ].map(([n, l]) => (
                  <div key={l}>
                    <div
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.7rem",
                        color: "var(--chateau)",
                      }}
                    >
                      {n}
                    </div>
                    <div style={{ fontSize: "0.82rem", color: "var(--ink-soft)" }}>
                      {l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="hero-motif">
              <ArchMotif />
            </div>
          </div>
        </section>

        <hr className="hairline" />

        {/* --------------------------------------------------- OVERVIEW */}
        <section style={{ padding: "clamp(48px, 7vw, 88px) 0" }}>
          <div className="wrap overview-grid">
            <div>
              <p className="eyebrow">The design</p>
              <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", marginTop: 10 }}>
                A château vernacular,{" "}
                <span style={{ fontStyle: "italic", color: "var(--brass)" }}>
                  built at eleven homes an acre
                </span>
              </h2>
            </div>
            <div style={{ color: "var(--ink-soft)", fontSize: "1.05rem" }}>
              <p>
                Designed by architect Hafeez Contractor, Florenne takes its
                cues from French Renaissance estates — steep rooflines,
                symmetrical facades and generous stone detailing — and sets
                them at a density of roughly eleven homes per acre. Each of
                the 218 independent rowhouses rises across four levels, with
                a private ground-floor garden and a rooftop terrace unique to
                every unit.
              </p>
              <dl
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                  gap: 24,
                  marginTop: 32,
                  paddingTop: 28,
                  borderTop: "1px solid var(--line)",
                }}
              >
                {[
                  ["Developer", "Godrej Properties Limited"],
                  ["Architect", "Hafeez Contractor"],
                  ["Land parcel", "20 acres"],
                  ["Configuration", "4 & 5 BHK rowhouses"],
                  ["Structure", "G + 3 levels"],
                  ["Parking", "Dedicated multi-car, covered"],
                ].map(([k, v]) => (
                  <div key={k}>
                    <dt
                      style={{
                        fontSize: "0.78rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        color: "var(--brass)",
                        marginBottom: 4,
                      }}
                    >
                      {k}
                    </dt>
                    <dd style={{ margin: 0, color: "var(--ink)" }}>{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <hr className="hairline" />

        {/* -------------------------------------------------- RESIDENCES */}
        <section id="residences" style={{ padding: "clamp(48px, 7vw, 88px) 0" }}>
          <div className="wrap">
            <p className="eyebrow">Residences</p>
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", marginTop: 10, maxWidth: 640 }}>
              Four floor plans, one proportion system
            </h2>
            <p style={{ color: "var(--ink-soft)", marginTop: 14, maxWidth: 640 }}>
              Lower levels are laid out for formal living, dining and a
              modular kitchen; upper levels are held for bedroom privacy and
              study zones. Sizes run from 3,725 to 5,523 sq. ft.
            </p>

            <div
              style={{
                marginTop: 44,
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: 0,
                border: "1px solid var(--line)",
                borderRadius: 2,
                overflow: "hidden",
              }}
            >
              {typologies.map((t, i) => (
                <div
                  key={t.name}
                  style={{
                    padding: "32px 28px",
                    borderLeft: i === 0 ? "none" : "1px solid var(--line)",
                    background: i % 2 === 1 ? "var(--stone-deep)" : "transparent",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "2.1rem",
                      color: "var(--chateau)",
                    }}
                  >
                    {t.size}
                    <span style={{ fontSize: "1rem", color: "var(--ink-soft)" }}>
                      {" "}
                      sq.ft
                    </span>
                  </div>
                  <h3 style={{ fontSize: "1.1rem", marginTop: 10 }}>{t.name}</h3>
                  <p
                    style={{
                      fontSize: "0.92rem",
                      color: "var(--ink-soft)",
                      marginTop: 10,
                      minHeight: 66,
                    }}
                  >
                    {t.note}
                  </p>
                  <p
                    style={{
                      marginTop: 14,
                      fontWeight: 600,
                      color: "var(--brass)",
                      fontSize: "0.95rem",
                    }}
                  >
                    {t.price}
                  </p>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: 40,
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: 24,
              }}
            >
              {[
                [
                  "Private outdoor space",
                  "A ground-level garden and a rooftop terrace come with every rowhouse — no shared walls to the sky.",
                ],
                [
                  "Vertical living",
                  "Four floors separate formal entertaining from bedroom privacy, with dedicated study zones on select plans.",
                ],
                [
                  "Covered parking",
                  "Dedicated multi-car covered parking for every home, with additional visitor bays across the community.",
                ],
              ].map(([h, b]) => (
                <div key={h}>
                  <h4 style={{ fontSize: "1rem" }}>{h}</h4>
                  <p style={{ fontSize: "0.92rem", color: "var(--ink-soft)", marginTop: 8 }}>
                    {b}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <hr className="hairline" />

        {/* --------------------------------------------------- AMENITIES */}
        <section
          id="amenities"
          style={{
            padding: "clamp(48px, 7vw, 88px) 0",
            background: "var(--chateau-deep)",
            color: "var(--stone)",
          }}
        >
          <div className="wrap">
            <p className="eyebrow" style={{ color: "var(--brass-light)" }}>
              Community & lifestyle
            </p>
            <h2
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                marginTop: 10,
                color: "var(--stone)",
                maxWidth: 640,
              }}
            >
              Over 75% open space, built for every generation of the family
            </h2>

            <div
              style={{
                marginTop: 48,
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "40px 32px",
              }}
            >
              {amenityGroups.map((g) => (
                <div key={g.title}>
                  <h3
                    style={{
                      fontSize: "1.02rem",
                      color: "var(--brass-light)",
                      paddingBottom: 12,
                      borderBottom: "1px solid var(--line-on-dark)",
                    }}
                  >
                    {g.title}
                  </h3>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: "16px 0 0",
                      display: "flex",
                      flexDirection: "column",
                      gap: 10,
                    }}
                  >
                    {g.items.map((item) => (
                      <li
                        key={item}
                        style={{
                          fontSize: "0.9rem",
                          color: "rgba(243,239,228,0.85)",
                          paddingLeft: 16,
                          position: "relative",
                        }}
                      >
                        <span
                          aria-hidden="true"
                          style={{
                            position: "absolute",
                            left: 0,
                            top: "0.6em",
                            width: 6,
                            height: 1,
                            background: "var(--brass-light)",
                          }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------- LOCATION */}
        <section id="location" style={{ padding: "clamp(48px, 7vw, 88px) 0" }}>
          <div className="wrap">
            <p className="eyebrow">Location</p>
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", marginTop: 10, maxWidth: 640 }}>
              Soukya Road, at the edge of Whitefield&rsquo;s tech corridor
            </h2>
            <p style={{ color: "var(--ink-soft)", marginTop: 14, maxWidth: 640 }}>
              Direct access to Soukya Road, Whitefield Main Road, Old Madras
              Road (NH 75) and the Satellite Town Ring Road, with Kempegowda
              International Airport roughly 60&ndash;75 minutes away via NH 648.
            </p>

            <div
              style={{
                marginTop: 44,
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: 36,
              }}
            >
              {locationGroups.map((g) => (
                <div key={g.title}>
                  <h3
                    style={{
                      fontSize: "1rem",
                      color: "var(--chateau)",
                      paddingBottom: 12,
                      borderBottom: "2px solid var(--brass)",
                    }}
                  >
                    {g.title}
                  </h3>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: "16px 0 0",
                      display: "flex",
                      flexDirection: "column",
                      gap: 12,
                    }}
                  >
                    {g.items.map(([name, time]) => (
                      <li
                        key={name}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          gap: 12,
                          fontSize: "0.9rem",
                          borderBottom: "1px solid var(--line)",
                          paddingBottom: 10,
                        }}
                      >
                        <span style={{ color: "var(--ink)" }}>{name}</span>
                        <span
                          style={{
                            color: "var(--brass)",
                            fontWeight: 600,
                            whiteSpace: "nowrap",
                          }}
                        >
                          {time}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <hr className="hairline" />

        {/* ------------------------------------------------------- STATUS */}
        <section style={{ padding: "clamp(40px, 6vw, 64px) 0" }}>
          <div
            className="wrap"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 28,
              fontSize: "0.9rem",
              color: "var(--ink-soft)",
            }}
          >
            <div>
              <h4 style={{ fontSize: "0.95rem", color: "var(--ink)" }}>Project status</h4>
              <p style={{ marginTop: 8 }}>New launch</p>
            </div>
            <div>
              <h4 style={{ fontSize: "0.95rem", color: "var(--ink)" }}>RERA — Phase 1</h4>
              <p style={{ marginTop: 8 }}>PR/150926/008942 · Possession Oct 8, 2030</p>
            </div>
            <div>
              <h4 style={{ fontSize: "0.95rem", color: "var(--ink)" }}>RERA — Phase 2</h4>
              <p style={{ marginTop: 8 }}>PR/150926/008943 · Possession Oct 8, 2031</p>
            </div>
          </div>
        </section>

        <hr className="hairline" />

        {/* ------------------------------------------------------- ENQUIRE */}
        <section
          id="enquire"
          style={{ padding: "clamp(48px, 7vw, 96px) 0", background: "var(--stone-deep)" }}
        >
          <div className="wrap enquire-grid">
            <div>
              <p className="eyebrow">Enquire</p>
              <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", marginTop: 10 }}>
                Book a site visit
              </h2>
              <p style={{ color: "var(--ink-soft)", marginTop: 14, maxWidth: 420 }}>
                Share a few details and our team will get back to you with
                floor plans, pricing and availability for Godrej Florenne.
              </p>

              <address
                style={{
                  fontStyle: "normal",
                  marginTop: 36,
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                  fontSize: "0.95rem",
                }}
              >
                <a href={`tel:${PHONE_TEL}`} style={{ textDecoration: "none" }}>
                  Call — {PHONE}
                </a>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  WhatsApp — {WHATSAPP}
                </a>
                <a href={`mailto:${EMAIL}`} style={{ textDecoration: "none" }}>
                  Email — {EMAIL}
                </a>
              </address>
            </div>

            <LeadForm whatsappNumber="918867855125" />
          </div>
        </section>
      </main>

      {/* ------------------------------------------------------- FOOTER */}
      <footer
        style={{
          background: "var(--chateau-deep)",
          color: "rgba(243,239,228,0.7)",
          padding: "32px 0",
          fontSize: "0.82rem",
        }}
      >
        <div
          className="wrap"
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <span>© {new Date().getFullYear()} Godrej Florenne. All rights reserved.</span>
          <span>
            *Prices are indicative and subject to change. This is not an
            official Godrej Properties website. RERA: PR/150926/008942,
            PR/150926/008943.
          </span>
        </div>
      </footer>
    </>
  );
}
