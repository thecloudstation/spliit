import { Button } from '@/components/ui/button'
import { Github } from 'lucide-react'
import Link from 'next/link'

// FIX for https://github.com/vercel/next.js/issues/58615
// export const dynamic = 'force-dynamic'

export default function HomePage() {
  return (
<<<<<<< HEAD
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950">
=======
    <main className="min-h-screen ">
>>>>>>> 927bb41 (change colors)
      <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-r from-teal-500 to-cyan-500 text-white">
        <div className="container flex flex-col items-center text-center max-w-screen-md mx-auto px-4">
          <h1 className="text-4xl sm:text-4xl md:text-4xl lg:text-4xl font-bold leading-none mb-4">
            Welcome to <strong>Spliit</strong> <br /> Deployed on{' '}
            <strong>Cloud-Station.io</strong>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed mb-8">
            Easily share expenses with friends and family. Deploy your own
            instance of Spliit with Cloud-Station.io and start managing your
            group expenses effortlessly.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Button
              asChild
              className="bg-cyan-600 text-white hover:bg-cyan-700"
            >
              <Link href="/groups">Go to Groups</Link>
            </Button>
            <Button
              asChild
              variant="secondary"
<<<<<<< HEAD
              className="bg-transparent border-white hover:bg-background hover:text-cyan-600"
=======
              className="bg-transparent border-white hover:bg-white hover:text-cyan-600"
>>>>>>> 927bb41 (change colors)
            >
              <Link href="https://github.com/spliit-app/spliit">
                <Github className="w-4 h-4 mr-2" />
                Spliit
              </Link>
            </Button>
            <Button
              asChild
              variant="secondary"
<<<<<<< HEAD
              className="bg-transparent border-white hover:bg-background hover:text-cyan-600"
=======
              className="bg-transparent border-white hover:bg-white hover:text-cyan-600"
>>>>>>> 927bb41 (change colors)
            >
              <Link href="https://github.com/thecloudstation/spliit">
                <Github className="w-4 h-4 mr-2" />
                CloudStation
              </Link>
            </Button>
          </div>
<<<<<<< HEAD
          <div className="bg-background text-cyan-600 p-6 rounded-lg shadow-md max-w-2xl mx-auto">
=======
          <div className="bg-white text-cyan-600 p-6 rounded-lg shadow-md max-w-2xl mx-auto">
>>>>>>> 927bb41 (change colors)
            <h2 className="text-2xl font-bold mb-4">
              Deploy on Cloud-Station.io
            </h2>
            <p className="leading-relaxed mb-4">
              To deploy Spliit on Cloud-Station.io, follow these steps:
            </p>
            <ol className="list-decimal list-inside text-left space-y-2">
              <li>
                Navigate to the Cloud-Station{' '}
                <Link
                  href="https://www.cloud-station.io/dashboard/project"
                  className="text-cyan-600 underline"
                >
                  Dashboard
                </Link>
                .
              </li>
              <li>Create a new project.</li>
              <li>
                Click on <strong>Add New</strong> and select{' '}
                <strong>Template</strong>.
              </li>
              <li>
                Choose the template <strong>Spliit</strong>.
              </li>
              <li>
                Choose a subdomain for your app, e.g.,{' '}
                <code className="bg-gray-200 p-1 rounded">myspliit</code>, and
                click <strong>Deploy</strong>.
              </li>
            </ol>
          </div>
        </div>
      </section>
<<<<<<< HEAD
      <section className="py-16 bg-background">
        <div className="container max-w-screen-lg mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Key Features</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="p-4 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-md">
=======
      <section className="py-16 ">
        <div className="container max-w-screen-lg mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Key Features</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="p-4 rounded-lg dark:border bg-card shadow-md">
>>>>>>> 927bb41 (change colors)
              <h3 className="text-xl font-semibold mb-2">
                Create and Manage Groups
              </h3>
              <p className="leading-relaxed">
                Easily create groups and share them with your friends and
                family.
              </p>
            </div>
<<<<<<< HEAD
            <div className="p-4 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-md">
=======
            <div className="p-4 rounded-lg dark:border bg-card shadow-md">
>>>>>>> 927bb41 (change colors)
              <h3 className="text-xl font-semibold mb-2">Track Expenses</h3>
              <p className="leading-relaxed">
                Keep track of expenses with detailed descriptions and
                categories.
              </p>
            </div>
<<<<<<< HEAD
            <div className="p-4 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-md">
=======
            <div className="p-4 rounded-lg dark:border bg-card shadow-md">
>>>>>>> 927bb41 (change colors)
              <h3 className="text-xl font-semibold mb-2">
                View Balances and Reimbursements
              </h3>
              <p className="leading-relaxed">
                Easily view group balances and manage reimbursements.
              </p>
            </div>
<<<<<<< HEAD
            <div className="p-4 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-md">
=======
            <div className="p-4 rounded-lg dark:border bg-card shadow-md">
>>>>>>> 927bb41 (change colors)
              <h3 className="text-xl font-semibold mb-2">
                Progressive Web App
              </h3>
              <p className="leading-relaxed">
                Use Spliit as a mobile app for a seamless experience.
              </p>
            </div>
          </div>
        </div>
      </section>
<<<<<<< HEAD
      <section className="py-16 bg-gray-50 dark:bg-gray-950">
=======
      <section className="py-16 bg-card">
>>>>>>> 927bb41 (change colors)
        <div className="container max-w-screen-lg mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Why Choose Cloud-Station.io?
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="p-4 bg-background rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">High Performance</h3>
              <p className="leading-relaxed">
                Experience fast and reliable performance for your applications.
              </p>
            </div>
            <div className="p-4 bg-background rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">
                Scalable Infrastructure
              </h3>
              <p className="leading-relaxed">
                Scale your applications effortlessly with our robust
                infrastructure.
              </p>
            </div>
            <div className="p-4 bg-background rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">
                Your Data, Your Control
              </h3>
              <p className="leading-relaxed">
                We prioritize your data privacy and security. Your data remains
                yours and under your control.
              </p>
            </div>
            <div className="p-4 bg-background rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">
                Default Region: Europe
              </h3>
              <p className="leading-relaxed">
                Deployments are in Europe by default. Additional regions will be
                available soon, giving you more choices.
              </p>
            </div>
          </div>
        </div>
      </section>
<<<<<<< HEAD
      <section className="py-16 bg-background">
=======
      <section className="py-16">
>>>>>>> 927bb41 (change colors)
        <div className="container max-w-screen-lg mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Support and Resources</h2>
          <p className="leading-relaxed mb-8">
            Need help? Check out our support resources:
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild className="bg-cyan-600 text-white">
              <Link href="https://documentation.cloud-station.io/s/ce6e8846-8aec-4337-a850-5188b6dc6d6e">
                Documentation
              </Link>
            </Button>
            <Button asChild className="bg-cyan-600 text-white">
              <Link href="https://join.slack.com/t/cloudstationio/shared_invite/zt-20kougo40-Kd1196QzZ7bwUA0oPfZORA">
                Support
              </Link>
            </Button>
            <Button asChild className="bg-cyan-600 text-white">
              <Link href="https://blog.cloud-station.io/">Blog</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
