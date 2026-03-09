import Image from "next/image";

export const metadata = {
  title: "Privacy Policy — Pause",
  description: "Privacy policy for Pause",
};

export default function Privacy() {
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
          Privacy Policy
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
            <h2 className="text-xl font-semibold text-black mb-3">Overview</h2>
            <p className="mb-3">
              Pause (“the App”) is designed to help users pause and reflect
              before making impulse purchases. Your privacy is important to us,
              and we aim to collect as little personal data as possible.
            </p>
            <p>
              This Privacy Policy explains what information we collect, how we use
              it, and your rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">
              Information We Collect
            </h2>
            <h3 className="text-lg font-medium text-black mb-2">
              Account Information
            </h3>
            <p className="mb-4">
              When you sign in using Apple, we may receive:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Your Apple user ID (a unique identifier)</li>
              <li>Your email address (only if you choose to share it)</li>
              <li>Your name (only if provided by Apple)</li>
            </ul>
            <p className="mb-4">
              This information is used solely to create and manage your account.
            </p>
            <h3 className="text-lg font-medium text-black mb-2">
              App Usage Data
            </h3>
            <p className="mb-2">
              The app may store limited information necessary for its core
              functionality, such as:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>The date of your last recorded impulse event</li>
              <li>Basic account preferences</li>
              <li>Account creation date</li>
            </ul>
            <p>
              This information is stored securely using Supabase infrastructure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">
              Information We Do Not Collect
            </h2>
            <p className="mb-2">
              Pause is designed to minimize data collection. We do not collect:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-2">
              <li>Location data</li>
              <li>Contacts</li>
              <li>Photos or camera data</li>
              <li>Payment information</li>
              <li>Advertising identifiers</li>
              <li>Behavioral tracking across apps</li>
            </ul>
            <p>We do not sell your data.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">
              How Your Information Is Used
            </h2>
            <p className="mb-2">
              Your information is used only to:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-2">
              <li>Create and maintain your account</li>
              <li>Enable app features</li>
              <li>Provide authentication through Apple Sign In</li>
              <li>Maintain your progress within the app</li>
            </ul>
            <p>We do not use your information for advertising or profiling.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">
              Data Storage
            </h2>
            <p>
              Account data is stored securely using Supabase infrastructure.
              Reasonable measures are taken to protect your information from
              unauthorized access.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">
              Account Deletion
            </h2>
            <p className="mb-2">
              You may delete your account at any time from within the app.
            </p>
            <p className="mb-2">
              When you delete your account:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-2">
              <li>Your authentication record is removed</li>
              <li>Your profile data is deleted</li>
              <li>Associated data stored by the app is permanently removed</li>
            </ul>
            <p>This action cannot be undone.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">
              Third-Party Services
            </h2>
            <p className="mb-2">
              Pause relies on the following third-party services:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-2">
              <li>Apple Sign In (for authentication)</li>
              <li>Supabase (for secure backend infrastructure)</li>
            </ul>
            <p>
              These services may process data according to their own privacy
              policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">
              Children’s Privacy
            </h2>
            <p>
              Pause is not intended for children under the age of 13. We do not
              knowingly collect personal information from children.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">
              Changes to This Policy
            </h2>
            <p>
              This Privacy Policy may be updated from time to time. Updates will
              be reflected by revising the “Last updated” date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">Contact</h2>
            <p>
              If you have any questions about this Privacy Policy, you can
              contact:{" "}
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
