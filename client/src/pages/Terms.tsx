import LegalPage from "./LegalPage";

export default function Terms() {
  return (
    <LegalPage
      title="Terms of Use"
      description="Terms for using the OpenClowAI portfolio and product demonstration."
      canonical="https://rintuchowdory.github.io/openclow-portfolio/terms/"
      eyebrow="LEGAL / TERMS"
    >
      <section>
        <h2>Demo status</h2>
        <p>
          OpenClowAI is presented as a portfolio and product demonstration. The
          signup flow does not create an account, send email, or provide a
          production AI service.
        </p>
      </section>
      <section>
        <h2>Acceptable use</h2>
        <p>
          Use this website lawfully and do not attempt to disrupt, reverse
          engineer, abuse, or misrepresent the site or its linked services.
        </p>
      </section>
      <section>
        <h2>Third-party services</h2>
        <p>
          Links and integrations may lead to GitHub, model providers, analytics
          services, or other third-party websites. Their availability and terms
          are controlled by those providers.
        </p>
      </section>
      <section>
        <h2>Content and availability</h2>
        <p>
          The site is provided as-is for demonstration purposes. Features, copy,
          designs, and routes may change without notice as the portfolio
          evolves.
        </p>
      </section>
      <section>
        <h2>Contact</h2>
        <p>
          Questions about the project can be sent through the contact page. The
          form opens a reviewable GitHub issue draft rather than sending a
          message directly.
        </p>
      </section>
    </LegalPage>
  );
}
