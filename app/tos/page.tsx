import Image from "next/image";

export const metadata = {
  title: "Terms of Service — Pause",
  description: "Terms of service for Pause",
};

export default function Tos() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center overflow-hidden bg-[#FCF7ED] font-sans px-6 py-20">
      {/* Top left squiggle — bleeds off top and left */}
      <div className="fixed left-0 top-0 -translate-x-1/4 -translate-y-1/4">
        <Image
          src="/TLeftSquiggle.png"
          alt=""
          width={320}
          height={320}
          className="h-48 w-48 object-left-top object-contain md:h-64 md:w-64"
        />
      </div>

      {/* Bottom right squiggle — bleeds off bottom and right */}
      <div className="fixed bottom-0 right-0 translate-x-1/4 translate-y-1/4">
        <Image
          src="/BRightSquiggle.png"
          alt=""
          width={320}
          height={320}
          className="h-48 w-48 object-right-bottom object-contain md:h-64 md:w-64"
        />
      </div>

      <main className="relative z-10 w-full max-w-2xl">
        <h1 className="text-4xl font-semibold tracking-tight text-black md:text-5xl mb-2">
          Terms of Service
        </h1>
        <p
          className="text-black/70 mb-10"
          style={{ fontFamily: "var(--font-sofia-medium)" }}
        >
          Last updated: March 8, 2026
        </p>
        <div
          className="space-y-8 text-black/80"
          style={{ fontFamily: "var(--font-sofia-medium)" }}
        >
          <section>
            <h2 className="text-xl font-semibold text-black mb-3">
              Acceptance of Terms
            </h2>
            <p>
              By using Pause (the “App”), you agree to these Terms of Service. If
              you do not agree, you should not use the App.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">
              Description of the Service
            </h2>
            <p className="mb-3">
              Pause is a tool designed to help users reflect before making impulse
              purchases. The App provides prompts and features intended to support
              mindful decision-making.
            </p>
            <p>The App is provided for informational and personal use only.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">
              User Accounts
            </h2>
            <p className="mb-2">
              To use certain features, you must create an account using Apple Sign
              In.
            </p>
            <p>
              You are responsible for maintaining the confidentiality of your
              account and for all activity under your account.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">
              Acceptable Use
            </h2>
            <p className="mb-2">You agree not to use the App to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Violate any applicable laws</li>
              <li>Interfere with or disrupt the service</li>
              <li>Attempt to gain unauthorized access to the system</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">
              No Financial or Psychological Advice
            </h2>
            <p className="mb-2">
              Pause provides reflective prompts and tools, but it does not
              provide:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-2">
              <li>Financial advice</li>
              <li>Psychological counseling</li>
              <li>Professional services</li>
            </ul>
            <p>You are responsible for your own financial decisions.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">
              Service Availability
            </h2>
            <p>
              We strive to keep the App available and functioning, but we do not
              guarantee uninterrupted service. Features may change or be
              discontinued at any time.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">
              Account Termination
            </h2>
            <p className="mb-2">
              You may delete your account at any time within the App.
            </p>
            <p>
              We reserve the right to suspend or terminate accounts that violate
              these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">
              Limitation of Liability
            </h2>
            <p className="mb-2">
              To the maximum extent permitted by law, Pause is provided “as is”
              without warranties of any kind.
            </p>
            <p>
              We are not liable for any losses or damages resulting from the use
              of the App.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">
              Changes to These Terms
            </h2>
            <p>
              These Terms may be updated from time to time. Continued use of the
              App after changes means you accept the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">Contact</h2>
            <p>
              If you have questions about these Terms, contact:{" "}
              <a
                href="mailto:support@usepause.app"
                className="text-black underline hover:no-underline"
              >
                support@usepause.app
              </a>
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
