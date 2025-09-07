import { useState, useEffect } from "react";

export default function SellerDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  // Sample books data
  const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: "$12", stock: 34, status: "Active" },
    { title: "1984", author: "George Orwell", price: "$10", stock: 12, status: "Active" },
    { title: "Harry Potter", author: "J.K. Rowling", price: "$20", stock: 50, status: "Pending" },
    { title: "To Kill a Mockingbird", author: "Harper Lee", price: "$15", stock: 22, status: "Active" },
  ];

  // Filtered books
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-amber-100 to-amber-300 dark:bg-slate-900 transition-colors duration-300">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-20"
        } bg-white dark:bg-slate-800 shadow-lg transition-all duration-300 flex flex-col overflow-hidden`}
      >
        {/* Sidebar Header */}
        <div className="p-4 flex items-center justify-between">
          <h2
            className={`text-xl font-bold text-amber-600 transition-all duration-300 ${
              !sidebarOpen && "hidden"
            }`}
          >
            Seller
          </h2>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-gray-500 dark:text-gray-300 hover:text-amber-500"
          >
            ☰
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-6 space-y-2">
          {["Dashboard", "Add Book", "Orders", "Reports"].map((item) => (
            <a
              key={item}
              href="#"
              className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-amber-200 dark:hover:bg-slate-700 rounded-md transition"
            >
              <span className="text-lg">➤</span>
              <span
                className={`ml-3 whitespace-nowrap transition-all duration-300 ${
                  sidebarOpen ? "inline-block" : "hidden"
                }`}
              >
                {item}
              </span>
            </a>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
            Seller Dashboard
          </h1>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 
              focus:ring-2 focus:ring-amber-500 focus:outline-none transition
              hover:ring hover:ring-amber-500"
          />
        </header>

        {/* Stats */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow flex items-center space-x-4 hover:shadow-lg hover:scale-105 transition">
            <span className="text-2xl">📚</span>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-300">Books Listed</p>
              <h3 className="text-xl font-bold">48</h3>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow flex items-center space-x-4 hover:shadow-lg hover:scale-105 transition">
            <span className="text-2xl">🛒</span>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-300">Orders</p>
              <h3 className="text-xl font-bold">120</h3>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow flex items-center space-x-4 hover:shadow-lg hover:scale-105 transition">
            <span className="text-2xl">💰</span>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-300">Revenue</p>
              <h3 className="text-xl font-bold">$2,350</h3>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow flex items-center space-x-4 hover:shadow-lg hover:scale-105 transition">
            <span className="text-2xl">📈</span>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-300">Growth</p>
              <h3 className="text-xl font-bold text-emerald-500 dark:text-emerald-400">+12%</h3>
            </div>
          </div>
        </section>

        {/* Recent Books Table */}
        <section className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow">
          <h2 className="text-lg font-bold mb-4 text-gray-800 dark:text-gray-100">
            Recent Books Added
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-gray-600 dark:text-gray-300">
                  <th className="p-2">Title</th>
                  <th className="p-2">Author</th>
                  <th className="p-2">Price</th>
                  <th className="p-2">Stock</th>
                  <th className="p-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredBooks.length > 0 ? (
                  filteredBooks.map((book, i) => (
                    <tr
                      key={i}
                      className="border-t border-gray-200 dark:border-slate-700 hover:bg-amber-50 dark:hover:bg-slate-700 transition"
                    >
                      <td className="p-2">{book.title}</td>
                      <td className="p-2">{book.author}</td>
                      <td className="p-2">{book.price}</td>
                      <td className="p-2">{book.stock}</td>
                      <td
                        className={`p-2 ${
                          book.status === "Active"
                            ? "text-emerald-500 dark:text-emerald-400"
                            : "text-amber-600 dark:text-red-400"
                        }`}
                      >
                        {book.status}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="p-4 text-center text-gray-500 dark:text-gray-400">
                      No books found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>

        {/* Example Submit Button */}
        <div className="mt-6">
          <button className="px-6 py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg shadow transition">
            + Add New Book
          </button>
        </div>
      </main>
    </div>
  );
}
