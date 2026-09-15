import type { Task } from "../../Types/Task/Task";

interface DashboardProps {
    tasks: Task[]
}

interface Stat {
    title: string;
    value: number;
    description: string;
    icon: React.ReactNode;
    color: string;
}

export default function Dashboard({ tasks }: DashboardProps) {
    const totalTasks = tasks.length
    const completedTasks = tasks.filter((task) => task.status === "completed").length
    const pendingTasks = tasks.filter((task) => task.status === "pending").length

    const stats: Stat[] = [
        {
            title: "Total Tasks",
            value: totalTasks,
            description: "All your tasks",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"></path><polyline points="14 2 14 8 20 8"></polyline><path d="M2 15h10"></path><path d="m9 18 3-3-3-3"></path></svg>,
            color: "from-blue-500 to-indigo-500",
        },
        {
            title: "Completed",
            value: completedTasks,
            description: "Tasks completed",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>,
            color: "from-emerald-500 to-teal-500",
        },
        {
            title: "Pending",
            value: pendingTasks,
            description: "Tasks remaining",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>,
            color: "from-amber-500 to-orange-500",
        },
    ]

    return (
        <section className="p-6 md:p-10 dark:bg-slate-950 transition-colors">
            <div>
                <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                    Dashboard
                </h1>
                <p className="mt-2 text-lg text-slate-600 dark:text-slate-400">
                    Welcome back! Here's an overview of your tasks.
                </p>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {stats.map((stat) => (
                    <div
                        key={stat.title}
                        className="group relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 shadow-sm dark:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-xl"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                    {stat.title}
                                </p>
                                <p className="mt-2 text-4xl font-extrabold text-slate-900 dark:text-white">
                                    {stat.value}
                                </p>
                            </div>
                            <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr ${stat.color} text-white shadow-lg`}>
                                {stat.icon}
                            </div>
                        </div>
                        <div className="mt-6 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                            <span className="flex h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-slate-600"></span>
                            {stat.description}
                        </div>

                        {/* Decorative background gradient */}
                        <div className={`absolute -right-4 -top-4 -z-10 h-24 w-24 rounded-full bg-gradient-to-tr ${stat.color} opacity-[0.08] blur-2xl transition-opacity duration-300 group-hover:opacity-[0.15]`}></div>
                    </div>
                ))}
            </div>

            <div className="mt-12 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-8 shadow-sm dark:shadow-lg transition-colors">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white">Task Progress</h2>
                    <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        {totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0}%
                    </span>
                </div>

                <div className="relative h-4 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                    <div
                        className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-1000 ease-out"
                        style={{ width: `${totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0}%` }}
                    ></div>
                </div>

                <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
                    {totalTasks === 0
                        ? "You don't have any tasks yet. Create some to see your progress!"
                        : completedTasks === totalTasks
                            ? "Awesome! You've completed all your tasks!"
                            : `You have completed ${completedTasks} out of ${totalTasks} tasks. Keep it up!`
                    }
                </p>
            </div>
        </section>
    )
}
