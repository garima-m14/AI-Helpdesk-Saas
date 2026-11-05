
import {
  Ticket,
  Clock,
  CheckCircle,
  Bot,
  ArrowUpRight,
  MoreHorizontal,
  Users,
  TrendingUp,
} from "lucide-react";

// Dashboard Statistics
const stats = [
  {
    title: "Total Tickets",
    value: "2,450",
    change: "+12.5%",
    icon: Ticket,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Open Tickets",
    value: "184",
    change: "+8.2%",
    icon: Clock,
    color: "bg-orange-50 text-orange-600",
  },
  {
    title: "Resolved Tickets",
    value: "1,890",
    change: "+18.4%",
    icon: CheckCircle,
    color: "bg-green-50 text-green-600",
  },
  {
    title: "AI Resolutions",
    value: "76.8%",
    change: "+5.6%",
    icon: Bot,
    color: "bg-purple-50 text-purple-600",
  },
];

// Sample Tickets
const tickets = [
  {
    id: "#TK-1024",
    customer: "Olivia Martin",
    subject: "Unable to access my account",
    priority: "High",
    status: "Open",
    time: "10 min ago",
  },
  {
    id: "#TK-1023",
    customer: "James Wilson",
    subject: "Payment failed during checkout",
    priority: "Medium",
    status: "In Progress",
    time: "25 min ago",
  },
  {
    id: "#TK-1022",
    customer: "Sophia Brown",
    subject: "Need help with subscription",
    priority: "Low",
    status: "Resolved",
    time: "1 hour ago",
  },
  {
    id: "#TK-1021",
    customer: "Noah Davis",
    subject: "Product delivery issue",
    priority: "High",
    status: "Open",
    time: "2 hours ago",
  },
];

// Weekly Chart Data
const weeklyData = [
  { day: "Mon", value: 45 },
  { day: "Tue", value: 70 },
  { day: "Wed", value: 55 },
  { day: "Thu", value: 90 },
  { day: "Fri", value: 65 },
  { day: "Sat", value: 80 },
  { day: "Sun", value: 100 },
];

function Dashboard() {
  return (
    <div className="w-full min-w-0 space-y-7">

      {/* Page Heading */}
      <section className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Overview
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Monitor your customer support performance.
          </p>
        </div>

        <select
          className="rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-600 outline-none focus:border-blue-500"
          defaultValue="7"
        >
          <option value="7">Last 7 days</option>
          <option value="30">Last 30 days</option>
          <option value="90">Last 90 days</option>
        </select>
      </section>

      {/* Statistics Cards */}
      <section className="grid w-full min-w-0 grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="min-w-0 rounded-xl border border-slate-200 bg-white p-5 transition-shadow hover:shadow-md"
            >
              <div className="flex items-center justify-between gap-2">
                <p className="text-sm font-medium text-slate-500">
                  {stat.title}
                </p>

                <div className={`shrink-0 rounded-lg p-2.5 ${stat.color}`}>
                  <Icon size={21} />
                </div>
              </div>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900">
                {stat.value}
              </h2>

              <p className="mt-2 flex items-center gap-1 text-xs font-semibold text-green-600">
                <ArrowUpRight size={15} />
                {stat.change}

                <span className="font-normal text-slate-400">
                  vs last week
                </span>
              </p>
            </div>
          );
        })}
      </section>

      {/* Analytics Section */}
      <section className="grid w-full min-w-0 grid-cols-1 gap-5 xl:grid-cols-3">

        {/* Weekly Ticket Analytics */}
        <div className="min-w-0 rounded-xl border border-slate-200 bg-white p-5 sm:p-6 xl:col-span-2">

          <div className="mb-7 flex items-center justify-between">
            <div>
              <h3 className="font-bold text-slate-900">
                Ticket Analytics
              </h3>

              <p className="mt-1 text-xs text-slate-400">
                Weekly ticket activity
              </p>
            </div>

            <button
              type="button"
              aria-label="More chart options"
              className="rounded-lg p-2 text-slate-400 hover:bg-slate-100"
            >
              <MoreHorizontal size={21} />
            </button>
          </div>

          {/* Bar Chart */}
          <div className="flex h-48 min-w-0 items-end justify-around gap-2 border-b border-slate-100 px-2 sm:gap-4">

            {weeklyData.map((item) => (
              <div
                key={item.day}
                className="flex h-full min-w-0 flex-1 flex-col items-center justify-end gap-2"
              >
                <div className="flex h-full w-full items-end justify-center">
                  <div
                    title={`${item.value} tickets`}
                    style={{ height: `${item.value}%` }}
                    className="w-full max-w-10 rounded-t-md bg-blue-500 transition-all duration-300 hover:bg-blue-700"
                  />
                </div>

                <span className="text-xs text-slate-400">
                  {item.day}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-5 flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-sm bg-blue-500" />
            <span className="text-xs text-slate-500">
              Total tickets received
            </span>
          </div>
        </div>

        {/* AI Performance */}
        <div className="min-w-0 rounded-xl border border-slate-200 bg-white p-5 sm:p-6">

          <div>
            <h3 className="font-bold text-slate-900">
              AI Performance
            </h3>

            <p className="mt-1 text-xs text-slate-400">
              Automated ticket resolution
            </p>
          </div>

          {/* Circular Progress */}
          <div className="my-8 flex justify-center">
            <div
              className="flex h-36 w-36 items-center justify-center rounded-full"
              style={{
                background:
                  "conic-gradient(#2563eb 0% 76.8%, #dbeafe 76.8% 100%)",
              }}
            >
              <div className="flex h-28 w-28 flex-col items-center justify-center rounded-full bg-white">
                <p className="text-3xl font-bold text-slate-900">
                  76.8%
                </p>

                <p className="text-xs text-slate-400">
                  Resolved
                </p>
              </div>
            </div>
          </div>

          {/* AI Statistics */}
          <div className="space-y-4">

            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-blue-600" />
                <span className="text-slate-500">
                  AI Resolved
                </span>
              </div>

              <span className="font-semibold text-slate-800">
                76.8%
              </span>
            </div>

            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-blue-100" />
                <span className="text-slate-500">
                  Human Support
                </span>
              </div>

              <span className="font-semibold text-slate-800">
                23.2%
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* Recent Tickets Table */}
      <section className="w-full min-w-0 overflow-hidden rounded-xl border border-slate-200 bg-white">

        {/* Table Heading */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-5 sm:p-6">
          <div>
            <h3 className="font-bold text-slate-900">
              Recent Tickets
            </h3>

            <p className="mt-1 text-xs text-slate-400">
              Latest customer support requests
            </p>
          </div>

          <button
            type="button"
            className="text-sm font-semibold text-blue-600 hover:text-blue-700"
          >
            View all tickets
          </button>
        </div>

        {/* Responsive Table */}
        <div className="w-full overflow-x-auto">
          <table className="w-full min-w-[750px] border-collapse text-left text-sm">

            <thead className="bg-slate-50 text-slate-500">
              <tr>
                <th className="px-5 py-4 font-medium">Ticket ID</th>
                <th className="px-5 py-4 font-medium">Customer</th>
                <th className="px-5 py-4 font-medium">Subject</th>
                <th className="px-5 py-4 font-medium">Priority</th>
                <th className="px-5 py-4 font-medium">Status</th>
                <th className="px-5 py-4 font-medium">Created</th>
              </tr>
            </thead>

            <tbody>
              {tickets.map((ticket) => (
                <tr
                  key={ticket.id}
                  className="border-t border-slate-100 transition hover:bg-slate-50"
                >
                  <td className="whitespace-nowrap px-5 py-4 font-semibold text-blue-600">
                    {ticket.id}
                  </td>

                  <td className="whitespace-nowrap px-5 py-4 font-medium text-slate-700">
                    {ticket.customer}
                  </td>

                  <td className="whitespace-nowrap px-5 py-4 text-slate-500">
                    {ticket.subject}
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={`whitespace-nowrap rounded-md px-2.5 py-1 text-xs font-medium ${
                        ticket.priority === "High"
                          ? "bg-red-50 text-red-600"
                          : ticket.priority === "Medium"
                          ? "bg-orange-50 text-orange-600"
                          : "bg-green-50 text-green-600"
                      }`}
                    >
                      {ticket.priority}
                    </span>
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={`whitespace-nowrap rounded-md px-2.5 py-1 text-xs font-medium ${
                        ticket.status === "Open"
                          ? "bg-blue-50 text-blue-600"
                          : ticket.status === "In Progress"
                          ? "bg-orange-50 text-orange-600"
                          : "bg-green-50 text-green-600"
                      }`}
                    >
                      {ticket.status}
                    </span>
                  </td>

                  <td className="whitespace-nowrap px-5 py-4 text-slate-400">
                    {ticket.time}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Table Footer */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 px-5 py-4 text-xs text-slate-400">
          <span>Showing 4 sample tickets</span>
          <span>Updated just now</span>
        </div>
      </section>

      {/* Bottom Summary */}
      <section className="grid grid-cols-1 gap-5 sm:grid-cols-2">

        <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5">
          <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
            <Users size={23} />
          </div>

          <div>
            <p className="text-sm text-slate-500">
              Active Customers
            </p>
            <h3 className="mt-1 text-xl font-bold text-slate-900">
              1,240
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5">
          <div className="rounded-xl bg-green-50 p-3 text-green-600">
            <TrendingUp size={23} />
          </div>

          <div>
            <p className="text-sm text-slate-500">
              Customer Satisfaction
            </p>
            <h3 className="mt-1 text-xl font-bold text-slate-900">
              94.5%
            </h3>
          </div>
        </div>

      </section>

    </div>
  );
}

export default Dashboard;
