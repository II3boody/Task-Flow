interface TaskCardProps {
    task: {
        id: number,
        title: string,
        status: "pending" | "completed",
    }
    onComplete: (id: number) => void;
    onDelete: (id: number) => void
}

export default function TaskCard({ task, onComplete, onDelete }: TaskCardProps) {
    const isCompleted = task.status === "completed";

    return (
        <div className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border bg-white p-6 transition-all duration-300 hover:shadow-xl ${isCompleted ? 'border-green-200 bg-green-50/30' : 'border-slate-200 hover:-translate-y-1 hover:border-blue-300'}`}>
            
            {/* Status Indicator Bar */}
            <div className={`absolute top-0 left-0 h-1 w-full transition-colors duration-300 ${isCompleted ? 'bg-green-500' : 'bg-blue-500 group-hover:bg-blue-600'}`}></div>
            
            <div>
                <div className="flex items-center justify-between mb-4">
                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${isCompleted ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                        {isCompleted ? 'Completed' : 'Pending'}
                    </span>
                    <button 
                        onClick={() => onDelete(task.id)} 
                        className="text-slate-400 opacity-0 transition-all duration-200 hover:text-red-600 group-hover:opacity-100 focus:opacity-100"
                        title="Delete task"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path></svg>
                    </button>
                </div>
                <h3 className={`text-lg font-semibold tracking-tight transition-colors duration-300 ${isCompleted ? 'text-slate-400 line-through' : 'text-slate-800'}`}>
                    {task.title}
                </h3>
            </div>
            
            <div className="mt-6 flex items-center">
                {!isCompleted && (
                    <button
                        onClick={() => onComplete(task.id)}
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-50 px-4 py-2.5 text-sm font-semibold text-blue-700 transition-all duration-200 hover:bg-blue-600 hover:text-white"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        Mark as Complete
                    </button>
                )}
                {isCompleted && (
                    <div className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-50 px-4 py-2.5 text-sm font-semibold text-green-700 cursor-default">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                        Done
                    </div>
                )}
            </div>
        </div>
    )
}