import Navbar from "./Navbar";
import Footer from "./Footer";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-20 pb-16">{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;
