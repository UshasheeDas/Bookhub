'use client';
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const menuVariants = {
  hidden: { x: "100%" },
  visible: { x: 0, transition: { duration: 0.3 } },
  exit: { x: "100%", transition: { duration: 0.3 } },
};

const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    image: "https://images.unsplash.com/photo-1544937950-fa07a98d237f?w=500"
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=500"
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500"
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6cf7?w=500"
  },
  {
    id: 5,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=500"
  },
  {
    id: 6,
    title: "Harry Potter",
    author: "J.K. Rowling",
    image: "https://images.unsplash.com/photo-1544937950-fa07a98d237f?w=500"
  }
];

export default function BookhubLanding() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const themeClasses = darkMode ? {
    bg: "bg-slate-900",
    text: "text-slate-200",
    headerBg: "bg-slate-800",
    headerText: "text-white",
    cardBg: "bg-slate-700",
    shadow: "shadow-2xl",
    heroBg: "bg-slate-800",
    sectionBg: "bg-slate-800",
    buttonBg: "bg-emerald-600",
    buttonHover: "hover:bg-emerald-500",
    textPrimary: "text-emerald-400",
    textSecondary: "text-slate-400",
    border: "border-slate-600",
    backdrop: "backdrop-blur-sm bg-slate-900/50"
  } : {
    bg: "bg-amber-50",
    text: "text-gray-800",
    headerBg: "bg-amber-200",
    headerText: "text-gray-900",
    cardBg: "bg-white",
    shadow: "shadow-md",
    heroBg: "bg-amber-50",
    sectionBg: "bg-amber-100",
    buttonBg: "bg-emerald-600",
    buttonHover: "hover:bg-emerald-700",
    textPrimary: "text-gray-900",
    textSecondary: "text-gray-600",
    border: "border-gray-300",
    backdrop: "backdrop-blur-sm bg-amber-50/50"
  };

  return (
    <div className={`font-sans ${themeClasses.bg} ${themeClasses.text} min-h-screen transition-colors duration-500`}>
      {/* Navbar */}
      <header className={`flex justify-between items-center px-4 md:px-8 py-4 ${themeClasses.shadow} ${themeClasses.headerBg} transition-colors duration-500 sticky top-0 z-50 backdrop-blur-md bg-opacity-80`}>
        <h1 className={`text-xl md:text-3xl font-bold ${themeClasses.headerText}`}>Bookhub</h1>
        <nav className="hidden lg:flex space-x-4 md:space-x-8 items-center flex-grow justify-center">
          <a href="/" className={`${themeClasses.headerText} hover:text-emerald-600 transition-colors duration-300 font-medium`}>Home</a>
          <a href="/categories" className={`${themeClasses.headerText} hover:text-emerald-600 transition-colors duration-300 font-medium`}>Categories</a>
          <a href="/about-us" className={`${themeClasses.headerText} hover:text-emerald-600 transition-colors duration-300 font-medium`}>About us</a>
          <a href="/donate" className={`${themeClasses.headerText} hover:text-emerald-600 transition-colors duration-300 font-medium`}>Donate</a>
          <a href="/contact-us" className={`${themeClasses.headerText} hover:text-emerald-600 transition-colors duration-300 font-medium`}>Contact us</a>
        </nav>
        <div className="flex items-center space-x-2 md:space-x-4">
          {/* Search Bar */}
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search books..."
              className={`pl-10 pr-4 py-2 rounded-full border ${themeClasses.border} focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300 w-32 md:w-48 text-sm ${themeClasses.cardBg} ${themeClasses.text}`}
            />
            <svg className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${themeClasses.textSecondary}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </div>
          {/* Mobile Search Button */}
          <button onClick={() => setIsMenuOpen(true)} className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors duration-300">
            <svg className={`w-5 h-5 ${themeClasses.textSecondary}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </button>
          <div className="flex items-center space-x-2 hidden sm:flex">
            <a href="/login" className={`text-sm font-bold px-4 md:px-6 py-2 rounded-full transition duration-300 ${themeClasses.headerText} ${darkMode ? 'hover:bg-slate-700' : 'hover:bg-amber-100'}`}>
              Log In
            </a>
            <a href="/signup" className={`text-white px-4 md:px-6 py-2 rounded-full font-bold ${themeClasses.buttonBg} ${themeClasses.buttonHover} transition duration-300`}>
              Sign Up
            </a>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full ${themeClasses.cardBg} ${themeClasses.shadow} transition-colors duration-500`}
          >
            {darkMode ? (
              <svg className="w-5 h-5 md:w-6 md:h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 11a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm-6 0a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm4 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM4 10a1 1 0 011 1h1a1 1 0 110-2H5a1 1 0 01-1 1zm12-1a1 1 0 011 1h1a1 1 0 110-2h-1a1 1 0 01-1 1zM7.07 7.07a1 1 0 011.414 0L9.5 8.5a1 1 0 01-1.414 1.414L7.07 8.5a1 1 0 010-1.414zm7.07 7.07a1 1 0 011.414 0l1.414 1.414a1 1 0 01-1.414 1.414l-1.414-1.414a1 1 0 010-1.414zM10 18a8 8 0 100-16 8 8 0 000 16z"></path></svg>
            ) : (
              <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-800" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
            )}
          </button>
        </div>
        {/* Mobile Menu Button */}
        <button onClick={() => setIsMenuOpen(true)} className="lg:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors duration-300">
          <svg className={`w-6 h-6 ${themeClasses.textSecondary}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
      </header>

      {/* Mobile Menu Sidebar */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className={`fixed top-0 right-0 h-full w-full max-w-sm ${themeClasses.bg} p-6 z-50 lg:hidden transform ${themeClasses.backdrop}`}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className={`text-2xl font-bold ${themeClasses.headerText}`}>Menu</h2>
              <button onClick={() => setIsMenuOpen(false)} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-slate-700">
                <svg className={`w-6 h-6 ${themeClasses.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>
            <nav className="flex flex-col space-y-6">
              <div className="relative mb-4">
                <input
                  type="text"
                  placeholder="Search books..."
                  className={`w-full pl-10 pr-4 py-3 rounded-full border ${themeClasses.border} focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300 text-sm ${themeClasses.cardBg} ${themeClasses.text}`}
                />
                <svg className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${themeClasses.textSecondary}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </div>
              <a href="/" onClick={() => setIsMenuOpen(false)} className={`text-lg font-medium py-3 border-b ${themeClasses.border} ${themeClasses.text}`}>Home</a>
              <a href="/categories" onClick={() => setIsMenuOpen(false)} className={`text-lg font-medium py-3 border-b ${themeClasses.border} ${themeClasses.text}`}>Categories</a>
              <a href="/about-us" onClick={() => setIsMenuOpen(false)} className={`text-lg font-medium py-3 border-b ${themeClasses.border} ${themeClasses.text}`}>About us</a>
              <a href="/donate" onClick={() => setIsMenuOpen(false)} className={`text-lg font-medium py-3 border-b ${themeClasses.border} ${themeClasses.text}`}>Donate</a>
              <a href="/contact-us" onClick={() => setIsMenuOpen(false)} className={`text-lg font-medium py-3 border-b ${themeClasses.border} ${themeClasses.text}`}>Contact us</a>
              <div className="pt-4 flex flex-col space-y-4">
                <a href="/login" className={`text-sm font-bold text-center px-4 py-3 rounded-full transition duration-300 ${themeClasses.text} ${darkMode ? 'hover:bg-slate-700' : 'hover:bg-amber-100'}`}>
                  Log In
                </a>
                <a href="/signup" className={`text-white text-center px-4 py-3 rounded-full font-bold ${themeClasses.buttonBg} ${themeClasses.buttonHover} transition duration-300`}>
                  Sign Up
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="container mx-auto max-w-7xl px-4 mt-8 md:mt-12">
        {/* Hero Section */}
        <section className={`relative flex flex-col-reverse md:flex-row items-center justify-between py-8 md:py-16 rounded-lg shadow-md overflow-hidden ${themeClasses.heroBg} transition-colors duration-500`}>
          <motion.div
            className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left p-4 md:p-8 z-10 relative"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className={`text-3xl md:text-5xl font-extrabold leading-tight mb-2 md:mb-4 ${themeClasses.textPrimary}`}>
              Discover your next <br className="hidden md:block" />favorite book here!
            </motion.h2>
            <motion.p variants={itemVariants} className={`text-sm md:text-lg mb-4 md:mb-8 ${themeClasses.textSecondary}`}>
              “A room without books is like a body without a soul.”
            </motion.p>
            <motion.button variants={itemVariants} className={`${themeClasses.buttonBg} text-white px-6 md:px-8 py-2 md:py-3 rounded-full font-bold ${themeClasses.buttonHover} transition duration-300 shadow-lg hover:shadow-xl`}>
              Shop Now
            </motion.button>
          </motion.div>
          <motion.div
            className="md:w-1/2 flex justify-center mt-8 md:mt-0 z-10 relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
          >
            <div className={`${darkMode ? 'bg-emerald-700' : 'bg-emerald-500'} w-48 h-48 md:w-80 md:h-80 rounded-full flex items-center justify-center animate-pulse-slow overflow-hidden`}>
              <img src="/icon.png" alt="Bookhub Logo" className="w-full h-full object-cover rounded-full" />
            </div>
          </motion.div>
        </section>

        ---

        {/* Trending Books */}
        <section className="py-8 md:py-16">
          <h3 className={`text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center ${themeClasses.textPrimary}`}>Trending Books</h3>
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {books.map((book) => (
              <motion.div
                key={book.id}
                className={`group relative ${themeClasses.cardBg} rounded-lg ${themeClasses.shadow} overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer`}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-full h-48 overflow-hidden relative">
                  <img src={book.image} alt={book.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" loading="lazy" />
                  {/* Hover Buttons */}
                  <div className="absolute inset-x-0 bottom-4 flex items-center justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white text-gray-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-emerald-600 hover:text-white">❤️ Wishlist</button>
                    <button className="bg-white text-gray-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-emerald-600 hover:text-white">🛒 Cart</button>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className={`font-semibold text-sm md:text-base ${themeClasses.textPrimary}`}>{book.title}</h4>
                  <p className={`text-xs md:text-sm ${themeClasses.textSecondary}`}>{book.author}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        ---

        {/* Top Sellers */}
        <section className={`py-8 md:py-16 ${themeClasses.sectionBg} rounded-xl transition-colors duration-500`}>
          <h3 className={`text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center ${themeClasses.textPrimary}`}>Top Sellers</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
            {books.map((book) => (
              <div
                key={book.id}
                className={`group relative ${themeClasses.cardBg} rounded-lg ${themeClasses.shadow} overflow-hidden transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-xl`}
              >
                <div className="w-full h-48 overflow-hidden relative">
                  <img src={book.image} alt={book.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" loading="lazy" />
                  <div className="absolute inset-x-0 bottom-4 flex items-center justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white text-gray-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-emerald-600 hover:text-white">❤️ Wishlist</button>
                    <button className="bg-white text-gray-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-emerald-600 hover:text-white">🛒 Cart</button>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className={`font-semibold text-sm md:text-base ${themeClasses.textPrimary}`}>{book.title}</h4>
                  <p className={`text-xs md:text-sm ${themeClasses.textSecondary}`}>{book.author}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        ---

        {/* What our readers say... */}
        <section className="py-8 md:py-16">
          <h3 className={`text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center ${themeClasses.textPrimary}`}>What Our Readers Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className={`p-6 md:p-8 ${themeClasses.cardBg} rounded-lg ${themeClasses.shadow} hover:shadow-xl transition-shadow duration-300`}>
                <p className={`italic mb-2 md:mb-4 text-sm md:text-base ${themeClasses.textSecondary}`}>“This is an amazing bookstore with a fantastic collection. I found my favorite novel here and the delivery was incredibly fast!”</p>
                <p className={`font-semibold text-sm md:text-base ${themeClasses.textPrimary}`}>— Satisfied Reader</p>
              </div>
            ))}
          </div>
        </section>

        ---

        {/* Contact section */}
        <section className="py-8 md:py-16">
          <div className={`p-6 md:p-10 ${themeClasses.cardBg} rounded-lg ${themeClasses.shadow} grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10`}>
            <div className="flex flex-col justify-between">
              <div>
                <h4 className={`text-lg md:text-xl font-bold mb-2 md:mb-4 ${themeClasses.textPrimary}`}>Contact Us</h4>
                <p className={`mb-1 md:mb-2 text-sm md:text-base ${themeClasses.textSecondary}`}>123 Bookworm Lane, Reading City, 54321</p>
                <p className={`mb-1 md:mb-2 text-sm md:text-base ${themeClasses.textSecondary}`}>contact@bookhub.com</p>
                <p className={`mb-1 md:mb-2 text-sm md:text-base ${themeClasses.textSecondary}`}>+1 (123) 456-7890</p>
              </div>
            </div>
            <div>
              <h4 className={`text-lg md:text-xl font-bold mb-2 md:mb-4 ${themeClasses.textPrimary}`}>Join Our Newsletter</h4>
              <p className={`mb-2 md:mb-4 text-sm md:text-base ${themeClasses.textSecondary}`}>Stay up-to-date with new releases and special offers.</p>
              <form className="flex flex-col sm:flex-row">
                <input type="email" placeholder="Enter your email" className={`flex-grow rounded-full sm:rounded-l-full sm:rounded-r-none border ${themeClasses.border} px-4 py-2 focus:outline-none ${themeClasses.cardBg} ${themeClasses.text} mb-2 sm:mb-0`} />
                <button type="submit" className={`${themeClasses.buttonBg} text-white rounded-full sm:rounded-r-full sm:rounded-l-none px-6 py-2 font-bold ${themeClasses.buttonHover} transition duration-300`}>Subscribe</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={`${themeClasses.headerBg} ${themeClasses.textSecondary} py-6 text-center shadow-inner mt-4 md:mt-8 transition-colors duration-500`}>
        <p className="text-sm md:text-base">© 2024 Bookhub. All rights reserved.</p>
      </footer>
    </div>
  );
}