import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <section className="relative flex min-h-[calc(100vh-64px)] items-center justify-center overflow-hidden px-6 py-24 sm:py-32 lg:px-8 dark:bg-slate-950 transition-colors">
            {/* Background Blob Effects */}
            <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 dark:opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
            </div>

            <div className="mx-auto max-w-2xl text-center">
                <div className="mb-8 flex justify-center">
                    <span className="relative rounded-full px-3 py-1 text-sm leading-6 text-blue-600 dark:text-blue-400 ring-1 ring-blue-600/20 dark:ring-blue-600/50 bg-blue-50/50 dark:bg-blue-900/20 backdrop-blur-sm hover:ring-blue-600/30 dark:hover:ring-blue-600/60 transition-all cursor-pointer">
                        Announcing our new redesign. <a href="#" className="font-semibold text-blue-600 dark:text-blue-400"><span className="absolute inset-0" aria-hidden="true"></span>Read more <span aria-hidden="true">&rarr;</span></a>
                    </span>
                </div>

                <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-slate-900 dark:from-slate-100 via-slate-800 dark:via-slate-200 to-slate-900 dark:to-slate-100">
                    Manage your tasks with ease
                </h1>

                <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
                    Organize your tasks, track your progress, and stay productive
                    with a simple, stunning, and powerful dashboard designed for modern teams.
                </p>

                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link
                        to="/dashboard"
                        className="rounded-xl bg-blue-600 dark:bg-blue-700 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 dark:shadow-blue-900/40 transition-all duration-300 hover:bg-blue-700 dark:hover:bg-blue-600 hover:shadow-xl hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:focus-visible:outline-blue-400"
                    >
                        Get Started
                    </Link>

                    <Link
                        to="/tasks"
                        className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm px-8 py-3.5 text-sm font-semibold text-slate-900 dark:text-slate-100 shadow-sm transition-all duration-300 hover:bg-white dark:hover:bg-slate-800 hover:shadow-md hover:-translate-y-1"
                    >
                        View Demo
                    </Link>
                </div>
            </div>

            <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
                <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 dark:opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
            </div>
        </section>
    )
}
