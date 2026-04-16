import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GutChecks Red Flags & Safety Account Deletion',
  description:
    'Request deletion of your GutChecks Red Flags & Safety account and associated personal data.',
}

export default function DeleteAccountPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-white text-slate-900">
      <section className="mx-auto max-w-4xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-12 text-white sm:px-10">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-100">
              Account Deletion
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
              GutChecks Red Flags &amp; Safety Account Deletion
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-blue-50 sm:text-lg">
              Request deletion of your <strong>GutChecks Red Flags &amp; Safety</strong>{' '}
              account and associated personal data. This page is provided for users of
              the <strong>GutChecks Red Flags &amp; Safety</strong> app published by{' '}
              <strong>Justice Asibe</strong>.
            </p>
          </div>

          <div className="px-6 py-10 sm:px-10">
            <div className="grid gap-6">
              <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h2 className="text-xl font-semibold text-slate-900">
                  How to Request Account Deletion
                </h2>
                <p className="mt-3 text-slate-700">
                  To request deletion of your account, please email{' '}
                  <a
                    href="mailto:support@mygutcheck.org?subject=Account%20Deletion%20Request%20-%20GutChecks%20Red%20Flags%20%26%20Safety"
                    className="font-semibold text-blue-600 underline underline-offset-4"
                  >
                    support@mygutcheck.org
                  </a>
                  .
                </p>
                <div className="mt-4 rounded-xl bg-white p-4 ring-1 ring-slate-200">
                  <p className="text-sm font-medium text-slate-500">Recommended subject line</p>
                  <p className="mt-1 font-semibold text-slate-900">
                    Account Deletion Request - GutChecks Red Flags &amp; Safety
                  </p>
                </div>
                <div className="mt-4">
                  <p className="font-medium text-slate-900">Please include:</p>
                  <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-700">
                    <li>Your full name</li>
                    <li>The email address or phone number associated with your account</li>
                    <li>Any additional details that may help us identify your account</li>
                  </ul>
                </div>
              </section>

              <section className="rounded-2xl border border-slate-200 p-6">
                <h2 className="text-xl font-semibold text-slate-900">
                  What Happens When You Request Deletion
                </h2>
                <p className="mt-3 text-slate-700">
                  Once we verify your request, we will begin the account deletion
                  process for your <strong>GutChecks Red Flags &amp; Safety</strong>{' '}
                  account. We may contact you if we need additional information to
                  confirm your identity before deleting your account.
                </p>
              </section>

              <section className="rounded-2xl border border-slate-200 p-6">
                <h2 className="text-xl font-semibold text-slate-900">What Data Will Be Deleted</h2>
                <p className="mt-3 text-slate-700">
                  When your account deletion request is completed, we will delete or
                  de-identify the personal data associated with your account, including:
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-700">
                  <li>Account profile information</li>
                  <li>App usage data linked to your account</li>
                  <li>User-submitted content, where applicable</li>
                  <li>
                    Other personal information associated with your account, unless
                    retention is required by law
                  </li>
                </ul>
              </section>

              <section className="rounded-2xl border border-slate-200 p-6">
                <h2 className="text-xl font-semibold text-slate-900">What Data May Be Retained</h2>
                <p className="mt-3 text-slate-700">
                  We may retain limited information when required for:
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-700">
                  <li>Legal compliance</li>
                  <li>Fraud prevention</li>
                  <li>Dispute resolution</li>
                  <li>Enforcement of our legal terms and obligations</li>
                </ul>
                <p className="mt-3 text-slate-700">
                  Any retained data will be kept only for as long as necessary to satisfy
                  those purposes. Where retention is required by law or regulatory
                  obligation, we will retain only the minimum necessary data for the
                  required period.
                </p>
              </section>

              <section className="grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 p-6">
                  <h2 className="text-xl font-semibold text-slate-900">
                    How Long Deletion Takes
                  </h2>
                  <p className="mt-3 text-slate-700">
                    We aim to process verified account deletion requests within 30 days.
                  </p>
                </div>

                <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
                  <h2 className="text-xl font-semibold text-slate-900">How to Contact Support</h2>
                  <p className="mt-3 text-slate-700">
                    If you have questions about account deletion or your data, please
                    contact{' '}
                    <a
                      href="mailto:support@mygutcheck.org"
                      className="font-semibold text-blue-600 underline underline-offset-4"
                    >
                      support@mygutcheck.org
                    </a>
                    .
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
