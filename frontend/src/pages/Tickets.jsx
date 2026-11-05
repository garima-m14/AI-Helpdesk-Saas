
import { useState } from "react";
import {
  Search,
  Plus,
  Filter,
  Download,
  MessageSquare,
  Clock,
  CheckCircle,
  AlertCircle,
  MoreHorizontal,
  X,
} from "lucide-react";

const initialTickets = [
  {
    id: "TK-1024",
    customer: "Olivia Martin",
    email: "olivia@gmail.com",
    subject: "Unable to access my account",
    priority: "High",
    status: "Open",
    date: "Nov 04, 2026",
  },
  {
    id: "TK-1023",
    customer: "James Wilson",
    email: "james@gmail.com",
    subject: "Payment failed during checkout",
    priority: "Medium",
    status: "In Progress",
    date: "Nov 04, 2026",
  },
  {
    id: "TK-1022",
    customer: "Sophia Brown",
    email: "sophia@gmail.com",
    subject: "Need help with subscription",
    priority: "Low",
    status: "Resolved",
    date: "Nov 03, 2026",
  },
  {
    id: "TK-1021",
    customer: "Noah Davis",
    email: "noah@gmail.com",
    subject: "Product delivery issue",
    priority: "High",
    status: "Open",
    date: "Nov 03, 2026",
  },
  {
    id: "TK-1020",
    customer: "Emma Wilson",
    email: "emma@gmail.com",
    subject: "Refund request for order",
    priority: "Medium",
    status: "In Progress",
    date: "Nov 02, 2026",
  },
  {
    id: "TK-1019",
    customer: "Liam Johnson",
    email: "liam@gmail.com",
    subject: "Unable to update profile",
    priority: "Low",
    status: "Resolved",
    date: "Nov 02, 2026",
  },
];

function Tickets() {
  const [tickets, setTickets] = useState(initialTickets);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState("All");
  const [showModal, setShowModal] = useState(false);

  const [newTicket, setNewTicket] = useState({
    customer: "",
    email: "",
    subject: "",
    priority: "Medium",
  });

  const filteredTickets = tickets.filter((ticket) => {
    const matchesSearch =
      ticket.id.toLowerCase().includes(search.toLowerCase()) ||
      ticket.customer.toLowerCase().includes(search.toLowerCase()) ||
      ticket.subject.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "All" || ticket.status === statusFilter;

    const matchesPriority =
      priorityFilter === "All" || ticket.priority === priorityFilter;

    return matchesSearch && matchesStatus && matchesPriority;
  });

  const openCount = tickets.filter(t => t.status === "Open").length;
  const progressCount = tickets.filter(t => t.status === "In Progress").length;
  const resolvedCount = tickets.filter(t => t.status === "Resolved").length;

  const handleCreateTicket = (e) => {
    e.preventDefault();

    const ticket = {
      ...newTicket,
      id: `TK-${1025 + tickets.length - initialTickets.length}`,
      status: "Open",
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
    };

    setTickets([ticket, ...tickets]);
    setNewTicket({
      customer: "",
      email: "",
      subject: "",
      priority: "Medium",
    });
    setShowModal(false);
  };

  const getStatusStyle = (status) => {
    if (status === "Open") return "bg-blue-50 text-blue-600";
    if (status === "In Progress") return "bg-orange-50 text-orange-600";
    return "bg-green-50 text-green-600";
  };

  const getPriorityStyle = (priority) => {
    if (priority === "High") return "bg-red-50 text-red-600";
    if (priority === "Medium") return "bg-orange-50 text-orange-600";
    return "bg-green-50 text-green-600";
  };

  return (
    <div className="w-full min-w-0 space-y-7">

      {/* Page Heading */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            Tickets
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Manage and track all customer support requests.
          </p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
        >
          <Plus size={18} />
          Create Ticket
        </button>
      </div>

      {/* Ticket Statistics */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">

        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-500">Open Tickets</p>
            <Clock className="text-blue-600" size={21} />
          </div>
          <h2 className="mt-3 text-2xl font-bold">{openCount}</h2>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-500">In Progress</p>
            <AlertCircle className="text-orange-500" size={21} />
          </div>
          <h2 className="mt-3 text-2xl font-bold">{progressCount}</h2>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-500">Resolved Tickets</p>
            <CheckCircle className="text-green-600" size={21} />
          </div>
          <h2 className="mt-3 text-2xl font-bold">{resolvedCount}</h2>
        </div>

      </div>

      {/* Tickets Table */}
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 p-5">

          <div className="relative min-w-0 flex-1 sm:max-w-sm">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              placeholder="Search tickets..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg border border-slate-200 py-2.5 pl-10 pr-4 text-sm outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3">

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-blue-500"
            >
              <option value="All">All Status</option>
              <option value="Open">Open</option>
              <option value="In Progress">In Progress</option>
              <option value="Resolved">Resolved</option>
            </select>

            <select
              value={priorityFilter}
              onChange={(e) => setPriorityFilter(e.target.value)}
              className="rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-blue-500"
            >
              <option value="All">All Priority</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>

            <button
              onClick={() => {
                setSearch("");
                setStatusFilter("All");
                setPriorityFilter("All");
              }}
              className="rounded-lg border border-slate-200 p-2.5 text-slate-500 hover:bg-slate-50"
              title="Reset filters"
            >
              <Filter size={18} />
            </button>

          </div>
        </div>

        {/* Table */}
        <div className="w-full overflow-x-auto">
          <table className="w-full min-w-[850px] text-left text-sm">

            <thead className="bg-slate-50 text-slate-500">
              <tr>
                <th className="px-5 py-4 font-medium">Ticket ID</th>
                <th className="px-5 py-4 font-medium">Customer</th>
                <th className="px-5 py-4 font-medium">Subject</th>
                <th className="px-5 py-4 font-medium">Priority</th>
                <th className="px-5 py-4 font-medium">Status</th>
                <th className="px-5 py-4 font-medium">Created</th>
                <th className="px-5 py-4 font-medium">Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredTickets.map((ticket) => (
                <tr
                  key={ticket.id}
                  className="border-t border-slate-100 hover:bg-slate-50"
                >
                  <td className="whitespace-nowrap px-5 py-4 font-semibold text-blue-600">
                    {ticket.id}
                  </td>

                  <td className="px-5 py-4">
                    <p className="font-medium text-slate-800">
                      {ticket.customer}
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      {ticket.email}
                    </p>
                  </td>

                  <td className="px-5 py-4 text-slate-600">
                    {ticket.subject}
                  </td>

                  <td className="px-5 py-4">
                    <span className={`rounded-md px-2.5 py-1 text-xs font-medium ${getPriorityStyle(ticket.priority)}`}>
                      {ticket.priority}
                    </span>
                  </td>

                  <td className="px-5 py-4">
                    <span className={`whitespace-nowrap rounded-md px-2.5 py-1 text-xs font-medium ${getStatusStyle(ticket.status)}`}>
                      {ticket.status}
                    </span>
                  </td>

                  <td className="whitespace-nowrap px-5 py-4 text-slate-500">
                    {ticket.date}
                  </td>

                  <td className="px-5 py-4">
                    <button
                      type="button"
                      aria-label={`More options for ${ticket.id}`}
                      className="rounded-lg p-2 text-slate-400 hover:bg-slate-100"
                    >
                      <MoreHorizontal size={19} />
                    </button>
                  </td>
                </tr>
              ))}

              {filteredTickets.length === 0 && (
                <tr>
                  <td colSpan="7" className="px-5 py-12 text-center">
                    <MessageSquare className="mx-auto mb-3 text-slate-300" size={30} />
                    <p className="font-medium text-slate-600">
                      No tickets found
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      Try changing your search or filters.
                    </p>
                  </td>
                </tr>
              )}

            </tbody>
          </table>
        </div>

        <div className="border-t border-slate-100 px-5 py-4 text-xs text-slate-400">
          Showing {filteredTickets.length} of {tickets.length} tickets
        </div>

      </div>

      {/* Create Ticket Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4">

          <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">

            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  Create New Ticket
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Add a new customer support request.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="rounded-lg p-2 text-slate-400 hover:bg-slate-100"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleCreateTicket} className="space-y-4">

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Customer Name
                </label>
                <input
                  required
                  value={newTicket.customer}
                  onChange={(e) => setNewTicket({
                    ...newTicket,
                    customer: e.target.value,
                  })}
                  placeholder="Enter customer name"
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Customer Email
                </label>
                <input
                  required
                  type="email"
                  value={newTicket.email}
                  onChange={(e) => setNewTicket({
                    ...newTicket,
                    email: e.target.value,
                  })}
                  placeholder="Enter customer email"
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Ticket Subject
                </label>
                <input
                  required
                  value={newTicket.subject}
                  onChange={(e) => setNewTicket({
                    ...newTicket,
                    subject: e.target.value,
                  })}
                  placeholder="Enter ticket subject"
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Priority
                </label>
                <select
                  value={newTicket.priority}
                  onChange={(e) => setNewTicket({
                    ...newTicket,
                    priority: e.target.value,
                  })}
                  className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500"
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </div>

              <div className="flex justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
                >
                  Create Ticket
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

    </div>
  );
}

export default Tickets;
