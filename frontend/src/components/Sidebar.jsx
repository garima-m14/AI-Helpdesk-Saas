
import { NavLink } from "react-router-dom";

import {
  LayoutDashboard,
  Ticket,
  Users,
  Bot,
  BarChart3,
  Settings,
  MessageSquare,
  Headphones,
  ChevronRight,
} from "lucide-react";

const navigation = [
  {
    title: "WORKSPACE",
    items: [
      { name: "Overview", path: "/dashboard", icon: LayoutDashboard },
      { name: "Tickets", path: "/tickets", icon: Ticket },
      { name: "Customers", path: "/customers", icon: Users },
    ],
  },
  {
    title: "MANAGEMENT",
    items: [
      { name: "AI Assistant", path: "/ai-assistant", icon: Bot },
      { name: "Analytics", path: "/analytics", icon: BarChart3 },
    ],
  },
];

function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 z-40 flex h-screen w-64 flex-col border-r border-slate-200 bg-white">

      {/* Logo */}
      <div className="flex h-20 items-center gap-3 border-b border-slate-100 px-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-200">
          <Headphones size={23} />
        </div>

        <div>
          <h1 className="text-xl font-bold tracking-tight text-slate-900">
            HelpDesk<span className="text-blue-600">AI</span>
          </h1>
          <p className="text-xs text-slate-400">
            Customer Support Platform
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto px-4 py-6">

        {navigation.map((section) => (
          <div key={section.title} className="mb-7">

            <p className="mb-3 px-3 text-[11px] font-bold tracking-widest text-slate-400">
              {section.title}
            </p>

            <div className="space-y-1">
              {section.items.map((item) => {
                const Icon = item.icon;

                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `group flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? "bg-blue-50 text-blue-600 shadow-sm"
                          : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <div className="flex items-center gap-3">
                          <Icon size={19} />
                          <span>{item.name}</span>
                        </div>

                        {isActive && (
                          <ChevronRight size={16} />
                        )}
                      </>
                    )}
                  </NavLink>
                );
              })}
            </div>
          </div>
        ))}

      </div>

      {/* Settings */}
      <div className="px-4 pb-3">
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium ${
              isActive
                ? "bg-blue-50 text-blue-600"
                : "text-slate-500 hover:bg-slate-50"
            }`
          }
        >
          <Settings size={19} />
          Settings
        </NavLink>
      </div>

      {/* User Profile */}
      <div className="border-t border-slate-100 p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700">
            VA
          </div>

          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-slate-800">
              Admin User
            </p>
            <p className="truncate text-xs text-slate-400">
              admin@helpdesk.ai
            </p>
          </div>
        </div>
      </div>

    </aside>
  );
}

export default Sidebar;
