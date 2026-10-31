import Header from "@/components/layout/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import StoriesSection from "@/components/sections/StoriesSection";
import ContactSection from "@/components/sections/ContactSection";

const StoriesPage = () => (
  <div className="min-h-screen">
    <Header />
    <main className="pt-24">
      <div className="container mx-auto px-4">
        <Breadcrumbs items={[
          { label: "Главная", path: "/" },
          { label: "Истории вывесок" }
        ]} />
      </div>
      <StoriesSection standalone />
    </main>
    <ContactSection />
    <Footer />
  </div>
);

export default StoriesPage;
