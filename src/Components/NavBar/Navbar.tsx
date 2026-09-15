import { Link, useLocation } from 'react-router-dom'

interface NavBarProps {
    onToggleSidebar: () => void
}

export default function NavBar({ onToggleSidebar }: NavBarProps) {
    const location = useLocation();

    // Only show "Add Task" button if we are not on the tasks page
    const showAddTask = location.pathname !== '/tasks';

    return (
        <nav className='sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md'>
            <div className='mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center gap-3'>
                    <button
                        onClick={onToggleSidebar}
                        className='md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors'
                        aria-label="Toggle sidebar"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                    </button>
                    <Link to='/' className='flex items-center gap-2 transition-opacity hover:opacity-80'>
                        <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                        </div>
                        <span className='text-xl font-bold tracking-tight bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent'>TaskFlow</span>
                    </Link>
                </div>

                {showAddTask && (
                    <Link to='/tasks' className='inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                        <span className='hidden sm:inline'>Add Task</span>
                    </Link>
                )}
            </div>
        </nav>
    )
}
