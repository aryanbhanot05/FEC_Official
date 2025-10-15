import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  const lastUpdated = "October 15, 2024";

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="gradient-earth py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-center">Privacy Policy</h1>
              <p className="text-center text-muted-foreground">Last updated: {lastUpdated}</p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Introduction</h2>
                <p className="text-muted-foreground">
                  Foundation of the Energy Collective ("FEC," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
                <p className="text-muted-foreground mb-4">We may collect the following types of information:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>Personal Information:</strong> Name, email address, phone number, and mailing address when you contact us, sign up for newsletters, make donations, or participate in our programs</li>
                  <li><strong>Payment Information:</strong> Credit card or other payment details when you make donations or purchases (processed securely through third-party payment processors)</li>
                  <li><strong>Usage Data:</strong> Information about how you interact with our website, including IP address, browser type, pages visited, and time spent on pages</li>
                  <li><strong>Cookies:</strong> Small data files stored on your device to enhance your browsing experience and analyze website traffic</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
                <p className="text-muted-foreground mb-4">We use collected information for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>To provide and maintain our services and programs</li>
                  <li>To process donations and issue tax receipts</li>
                  <li>To send newsletters, updates, and information about our initiatives</li>
                  <li>To respond to inquiries and provide customer support</li>
                  <li>To improve our website and user experience</li>
                  <li>To comply with legal obligations and prevent fraud</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Information Sharing</h2>
                <p className="text-muted-foreground mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share information with:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Service providers who assist in operating our website and conducting our activities</li>
                  <li>Professional advisors such as lawyers and accountants</li>
                  <li>Government agencies when required by law</li>
                  <li>Partner organizations for collaborative projects (with your consent)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Data Security</h2>
                <p className="text-muted-foreground">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
                <p className="text-muted-foreground mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Access, update, or delete your personal information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Disable cookies through your browser settings</li>
                  <li>Request information about how your data is used</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Cookies</h2>
                <p className="text-muted-foreground">
                  We use cookies to enhance your experience on our website. You can choose to disable cookies through your browser settings, though this may affect certain features of the website.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Third-Party Links</h2>
                <p className="text-muted-foreground">
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites and encourage you to review their privacy policies.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Changes to This Policy</h2>
                <p className="text-muted-foreground">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <p className="text-muted-foreground mb-4">
                  If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-card p-6 rounded-xl border border-border">
                  <p className="text-muted-foreground">
                    <strong>Foundation of the Energy Collective</strong><br />
                    123 Energy Way<br />
                    Calgary, AB T2P 1K4<br />
                    Email: <a href="mailto:privacy@feccanada.org" className="text-accent hover:underline">privacy@feccanada.org</a><br />
                    Phone: <a href="tel:+14035551234" className="text-accent hover:underline">(403) 555-1234</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
