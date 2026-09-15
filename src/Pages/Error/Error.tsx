import { Link } from 'react-router-dom'

export default function Error() {
    return (
        <section className="flex min-h-screen items-center justify-center bg-slate-50 dark:bg-slate-950 px-6 py-24 sm:py-32 lg:px-8 transition-colors">
            <div className="text-center">
                <p className="text-base font-semibold text-blue-600 dark:text-blue-400">404</p>
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                    Page not found
                </h1>
                <p className="mt-6 text-base leading-7 text-slate-600 dark:text-slate-400">
                    Sorry, we couldn't find the page you're looking for.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link
                        to="/"
                        className="rounded-xl bg-blue-600 dark:bg-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 dark:hover:bg-blue-600 hover:shadow-md hover:-translate-y-0.5 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:focus-visible:outline-blue-400 dark:focus-visible:outline-offset-slate-950"
                    >
                        Go back home
                    </Link>
                    <a href="#" className="text-sm font-semibold text-slate-900 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        Contact support <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </div>
        </section>
    )
}
