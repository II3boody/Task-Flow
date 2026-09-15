import { NavLink } from 'react-router-dom'

export default function Sidebar() {
    const active = 'group flex items-center gap-3 rounded-xl bg-blue-50 px-4 py-3 font-semibold text-blue-700 transition-all';
    const nonActive = 'group flex items-center gap-3 rounded-xl px-4 py-3 font-medium text-slate-600 transition-all hover:bg-slate-100 hover:text-slate-900';

    return (
        <aside className='hidden w-64 flex-col border-r border-slate-200 bg-white md:flex'>
            <div className='flex-1 overflow-y-auto p-4'>
                <h2 className='mb-4 px-4 text-xs font-bold uppercase tracking-wider text-slate-400'>Menu</h2>
                <nav className='space-y-1.5'>
                    <NavLink to='/dashboard' className={({ isActive }) => isActive ? active : nonActive}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-75 transition-opacity group-hover:opacity-100"><rect x="3" y="3" width="7" height="9"></rect><rect x="14" y="3" width="7" height="5"></rect><rect x="14" y="12" width="7" height="9"></rect><rect x="3" y="16" width="7" height="5"></rect></svg>
                        Dashboard
                    </NavLink>
                    <NavLink to='/tasks' className={({ isActive }) => isActive ? active : nonActive}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-75 transition-opacity group-hover:opacity-100"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                        Tasks
                    </NavLink>
                </nav>
            </div>
            <div className="p-4 border-t border-slate-100">
                <div className="flex items-center gap-3 px-4 py-2">

                </div>
            </div>
        </aside>
    )
}