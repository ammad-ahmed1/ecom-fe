import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function Layout({ children, showSidebar = false }) {
  return (
    <div className="flex flex-col h-screen">
      <Header />

      <div className="flex flex-1">
        {/* Sidebar (optional) */}
        {showSidebar && <Sidebar />}

        <main className={`flex-1 p-4 ${showSidebar ? "ml-0" : "w-full"}`}>
          {children}
        </main>
      </div>

      <Footer />
    </div>
  );
}
