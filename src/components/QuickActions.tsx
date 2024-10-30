import React from 'react'
import { Plus, MessageSquare, Calendar, Clock } from 'lucide-react'

export default function QuickActions() {
  const actions = [
    { icon: Plus, label: 'Post Job', color: 'bg-indigo-500' },
    { icon: MessageSquare, label: 'Chat', color: 'bg-green-500', badge: 2 },
    { icon: Calendar, label: 'Schedule', color: 'bg-purple-500' },
    { icon: Clock, label: 'History', color: 'bg-blue-500' },
  ]

  return (
    <div className="grid grid-cols-4 gap-4 mb-8">
      {actions.map(({ icon: Icon, label, color, badge }) => (
        <button
          key={label}
          className="relative flex flex-col items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
        >
          <div className={`p-3 ${color} rounded-xl text-white mb-2 relative`}>
            <Icon className="h-6 w-6" />
            {badge && (
              <span className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                {badge}
              </span>
            )}
          </div>
          <span className="text-sm font-medium text-gray-700">{label}</span>
          {/* {badge && (
            <span className="absolute top-2 right-2 h-5 w-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
              {badge}
            </span>
          )} */}
        </button>
      ))}
    </div>
  )
}
