import LegalPage from "./LegalPage";

export default function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="How OpenClowAI handles privacy, analytics, and external services."
      canonical="https://rintuchowdory.github.io/openclow-portfolio/privacy/"
      eyebrow="LEGAL / PRIVACY"
    >
      <section>
        <h2>What this site is</h2>
        <p>
          OpenClowAI is a public portfolio and product concept site. The signup
          form is a demonstration only; it does not create an account or store
          passwords.
        </p>
      </section>
      <section>
        <h2>Analytics</h2>
        <p>
          This site uses Plausible Analytics in a privacy-oriented configuration
          to understand aggregate visits and page performance. Plausible is
          designed to work without advertising cookies or cross-site tracking.
          The site does not sell personal information.
        </p>
      </section>
      <section>
        <h2>External services</h2>
        <p>
          The site loads IBM Plex fonts from Google Fonts, Plausible’s analytics
          script, and links to GitHub. Those services may receive standard
          technical request data when your browser connects to them. Review
          their own privacy policies for details.
        </p>
      </section>
      <section>
        <h2>Contact submissions</h2>
        <p>
          The contact page prepares a GitHub issue draft in your browser.
          Nothing is submitted automatically by OpenClowAI; you review and
          submit the draft on GitHub yourself.
        </p>
      </section>
      <section>
        <h2>Changes</h2>
        <p>
          This policy may be updated when the site adds new services or
          functionality. The effective date above indicates the latest revision.
        </p>
      </section>
    </LegalPage>
  );
}
