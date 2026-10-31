import Header from "@/components/layout/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import IndustriesSection from "@/components/sections/IndustriesSection";
import ContactSection from "@/components/sections/ContactSection";

const IndustriesPage = () => (
  <div className="min-h-screen">
    <Header />
    <main className="pt-24">
      <div className="container mx-auto px-4">
        <Breadcrumbs items={[
          { label: "Главная", path: "/" },
          { label: "Сферы бизнеса" }
        ]} />
      </div>
      <IndustriesSection />
    </main>
    <ContactSection />
    <Footer />
  </div>
);

export default IndustriesPage;
