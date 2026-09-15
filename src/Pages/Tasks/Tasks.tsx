import { useState } from 'react';
import TaskCard from '../../Components/TaskCard/TaskCard';
import type { Task } from '../../Types/Task/Task';

interface TasksProps {
    tasks: Task[]
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

export default function Tasks({ tasks, setTasks }: TasksProps) {
    const [showForm, setShowForm] = useState(false);
    const [title, setTitle] = useState("");

    const handleShowForm = () => {
        setShowForm((prev) => !prev);
    }

    const handleAddTask = (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        if (!title.trim()) return;
        
        const newTask: Task = {
            id: Date.now(),
            title: title.trim(),
            status: "pending",
        }
        setTasks([...tasks, newTask]);
        setTitle("");
        setShowForm(false);
    }

    const handleCompleteTask = (id: number) => {
        setTasks(tasks.map((task) => task.id === id ? { ...task, status: "completed" } : task))
    }

    const handleDeleteTask = (id: number) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    return (
        <section className="p-6 md:p-10 max-w-7xl mx-auto min-h-screen">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                        Tasks
                    </h1>
                    <p className="mt-2 text-lg text-slate-600">
                        Manage your tasks and stay organized.
                    </p>
                </div>

                <button
                    onClick={handleShowForm}
                    className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold text-white transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 ${showForm ? 'bg-slate-800 hover:bg-slate-700 focus:ring-slate-900' : 'bg-blue-600 hover:bg-blue-700 hover:-translate-y-0.5 focus:ring-blue-500'}`}
                >
                    {showForm ? (
                        <>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            Cancel
                        </>
                    ) : (
                        <>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                            Add New Task
                        </>
                    )}
                </button>
            </div>
            
            {showForm && (
                <div className="mt-8 animate-in fade-in slide-in-from-top-4 duration-300">
                    <form 
                        onSubmit={handleAddTask}
                        className="rounded-2xl border border-slate-200 bg-white/50 p-6 backdrop-blur-sm shadow-sm md:p-8"
                    >
                        <h2 className="text-xl font-bold text-slate-900 mb-6">
                            Create a New Task
                        </h2>
                        
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
                            <div className="flex-1 space-y-2">
                                <label htmlFor="task-title" className="text-sm font-medium text-slate-700">Task Title</label>
                                <input 
                                    id="task-title"
                                    type='text' 
                                    value={title} 
                                    onChange={(event) => setTitle(event.target.value)} 
                                    placeholder="e.g. Redesign the landing page" 
                                    className='w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all' 
                                    autoFocus
                                />
                            </div>
                            <button 
                                type="submit"
                                disabled={!title.trim()}
                                className='w-full sm:w-auto rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-md transition-all duration-200 hover:bg-blue-700 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed'
                            >
                                Save Task
                            </button>
                        </div>
                    </form>
                </div>
            )}
            
            <div className="mt-8">
                {tasks.length === 0 ? (
                    <div className="flex flex-col items-center justify-center rounded-3xl border-2 border-dashed border-slate-200 bg-slate-50 py-24 text-center">
                        <div className="rounded-full bg-blue-50 p-4 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900">No tasks yet</h3>
                        <p className="mt-2 text-slate-500 max-w-sm">Get started by creating a new task. Your tasks will appear here.</p>
                        <button onClick={handleShowForm} className="mt-6 font-semibold text-blue-600 hover:text-blue-700">
                            Create your first task &rarr;
                        </button>
                    </div>
                ) : (
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {tasks.map((task) => (
                            <TaskCard 
                                key={task.id} 
                                task={task} 
                                onComplete={handleCompleteTask} 
                                onDelete={handleDeleteTask} 
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}
