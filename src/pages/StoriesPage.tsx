import Header from "@/components/layout/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import StoriesSection from "@/components/sections/StoriesSection";
import ContactSection from "@/components/sections/ContactSection";

const StoriesPage = () => (
  <div className="min-h-screen">
    <Header />
    <main className="pt-24">
      <Breadcrumbs fullWidth items={[
          { label: "Главная", path: "/" },
          { label: "Истории вывесок" }
        ]} />
      <StoriesSection standalone />
    </main>
    <ContactSection />
    <Footer />
  </div>
);

export default StoriesPage;
