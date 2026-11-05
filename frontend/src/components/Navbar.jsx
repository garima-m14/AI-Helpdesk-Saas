
import { Search, Bell, Plus, ChevronDown } from "lucide-react";

function Navbar() {
  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-slate-200 bg-white/95 px-5 backdrop-blur-md md:px-8">

      {/* Page Title */}
      <div>
        <h2 className="text-lg font-bold text-slate-900">
          Welcome to HelpDesk AI
        </h2>
        <p className="text-xs text-slate-400">
          Manage your customer support workspace
        </p>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-3">

        {/* Search */}
        <div className="hidden items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 sm:flex">
          <Search size={18} className="text-slate-400" />
          <input
            type="text"
            placeholder="Search anything..."
            className="w-36 bg-transparent text-sm outline-none placeholder:text-slate-400 lg:w-52"
          />
          <span className="rounded border border-slate-200 bg-white px-1.5 py-0.5 text-xs text-slate-400">
            /
          </span>
        </div>

        {/* Notifications */}
        <button
          type="button"
          aria-label="Notifications"
          className="relative rounded-xl p-2.5 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
        >
          <Bell size={20} />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full border-2 border-white bg-red-500" />
        </button>

        {/* New Ticket */}
        <button
          type="button"
          className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
        >
          <Plus size={17} />
          <span className="hidden sm:inline">New Ticket</span>
        </button>

        {/* Profile */}
        <button
          type="button"
          className="hidden items-center gap-2 rounded-xl border border-slate-200 p-1.5 sm:flex"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 text-sm font-bold text-blue-700">
            VA
          </div>
          <ChevronDown size={15} className="text-slate-400" />
        </button>

      </div>
    </header>
  );
}

export default Navbar;
