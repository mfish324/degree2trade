import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Degree2Trade",
  description: "Privacy Policy for Degree2Trade - Learn how we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  const lastUpdated = "December 16, 2025";

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-surface-light bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="font-display text-xl font-bold text-primary">
            Degree2Trade
          </Link>
          <nav className="flex items-center gap-6 text-text-secondary text-sm">
            <Link href="/programs" className="hover:text-primary transition-colors hidden md:block">
              Programs
            </Link>
            <Link href="/library" className="hover:text-primary transition-colors hidden md:block">
              Career Library
            </Link>
            <Link href="/quiz" className="px-4 py-1.5 bg-primary hover:bg-primary-hover text-white rounded-lg transition-colors">
              Take Quiz
            </Link>
          </nav>
        </div>
      </header>

      {/* Content */}
      <main className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-text-muted mb-8">Last updated: {lastUpdated}</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-bold mb-4 text-text-primary">Introduction</h2>
              <p className="text-text-secondary mb-4">
                Degree2Trade (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website degree2trade.com (the &quot;Site&quot;).
              </p>
              <p className="text-text-secondary">
                Please read this Privacy Policy carefully. By using the Site, you agree to the collection and use of information in accordance with this policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-text-primary">Information We Collect</h2>

              <h3 className="text-lg font-semibold mb-2 text-text-primary">Information You Provide</h3>
              <p className="text-text-secondary mb-4">
                We may collect information you voluntarily provide when using our Site, including:
              </p>
              <ul className="list-disc list-inside text-text-secondary mb-4 space-y-2">
                <li>Quiz responses and career preferences</li>
                <li>Contact information if you reach out to us via email</li>
                <li>Any other information you choose to provide</li>
              </ul>

              <h3 className="text-lg font-semibold mb-2 text-text-primary">Automatically Collected Information</h3>
              <p className="text-text-secondary mb-4">
                When you visit our Site, we may automatically collect certain information, including:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2">
                <li>Device information (browser type, operating system)</li>
                <li>IP address and general location (city/region level)</li>
                <li>Pages visited and time spent on the Site</li>
                <li>Referring website or source</li>
                <li>Click patterns and user interactions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-text-primary">How We Use Your Information</h2>
              <p className="text-text-secondary mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2">
                <li>Provide personalized career recommendations based on your quiz responses</li>
                <li>Improve and optimize our Site and services</li>
                <li>Analyze usage patterns to enhance user experience</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Display relevant advertisements</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-text-primary">Cookies and Tracking Technologies</h2>
              <p className="text-text-secondary mb-4">
                We use cookies and similar tracking technologies to collect and track information about your browsing activity. These technologies help us:
              </p>
              <ul className="list-disc list-inside text-text-secondary mb-4 space-y-2">
                <li>Remember your preferences and settings</li>
                <li>Understand how you interact with our Site</li>
                <li>Deliver relevant advertisements</li>
                <li>Analyze Site traffic and trends</li>
              </ul>
              <p className="text-text-secondary">
                You can control cookies through your browser settings. However, disabling cookies may limit your ability to use certain features of our Site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-text-primary">Third-Party Services</h2>
              <p className="text-text-secondary mb-4">
                We may use third-party services that collect, monitor, and analyze information to improve our Site&apos;s functionality. These services include:
              </p>

              <h3 className="text-lg font-semibold mb-2 text-text-primary">Google Analytics</h3>
              <p className="text-text-secondary mb-4">
                We use Google Analytics to analyze Site usage. Google Analytics collects information such as how often users visit the Site, what pages they visit, and what other sites they used prior to coming to our Site. For more information, see Google&apos;s Privacy Policy at{" "}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  https://policies.google.com/privacy
                </a>.
              </p>

              <h3 className="text-lg font-semibold mb-2 text-text-primary">Google AdSense</h3>
              <p className="text-text-secondary mb-4">
                We use Google AdSense to display advertisements on our Site. Google AdSense uses cookies to serve ads based on your prior visits to our Site and other websites. You can opt out of personalized advertising by visiting{" "}
                <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Google Ads Settings
                </a>.
              </p>

              <h3 className="text-lg font-semibold mb-2 text-text-primary">Supabase</h3>
              <p className="text-text-secondary">
                We use Supabase as our database provider to store program information. No personally identifiable information is stored in our database from general Site usage.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-text-primary">Data Retention</h2>
              <p className="text-text-secondary">
                Quiz responses and preferences are stored locally in your browser and are not transmitted to our servers. Analytics data is retained according to the retention policies of our third-party analytics providers. We do not maintain long-term records of individual user data.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-text-primary">Data Security</h2>
              <p className="text-text-secondary">
                We implement appropriate technical and organizational security measures to protect your information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-text-primary">Your Privacy Rights</h2>
              <p className="text-text-secondary mb-4">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc list-inside text-text-secondary mb-4 space-y-2">
                <li>The right to access your personal information</li>
                <li>The right to correct inaccurate information</li>
                <li>The right to delete your personal information</li>
                <li>The right to opt out of certain data collection</li>
              </ul>
              <p className="text-text-secondary">
                To exercise these rights, please contact us at{" "}
                <a href="mailto:contact@degree2jobs.com" className="text-primary hover:underline">
                  contact@degree2jobs.com
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-text-primary">Children&apos;s Privacy</h2>
              <p className="text-text-secondary">
                Our Site is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-text-primary">Links to Other Websites</h2>
              <p className="text-text-secondary">
                Our Site contains links to external websites, including training programs, government resources, and educational content. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any website you visit.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-text-primary">Changes to This Privacy Policy</h2>
              <p className="text-text-secondary">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. Your continued use of the Site after any changes constitutes your acceptance of the new Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-text-primary">Contact Us</h2>
              <p className="text-text-secondary">
                If you have questions about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <p className="text-text-secondary mt-4">
                <strong className="text-text-primary">Email:</strong>{" "}
                <a href="mailto:contact@degree2jobs.com" className="text-primary hover:underline">
                  contact@degree2jobs.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-surface py-8 px-4 border-t border-surface-light">
        <div className="max-w-6xl mx-auto text-center text-text-muted text-sm">
          &copy; 2025 Degree2Trade. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
