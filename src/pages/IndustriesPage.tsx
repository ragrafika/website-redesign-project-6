import Header from "@/components/layout/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import IndustriesSection from "@/components/sections/IndustriesSection";
import ContactSection from "@/components/sections/ContactSection";

const IndustriesPage = () => (
  <div className="min-h-screen">
    <Header />
    <main className="pt-24">
      <Breadcrumbs fullWidth items={[
          { label: "Главная", path: "/" },
          { label: "Сферы бизнеса" }
        ]} />
      <IndustriesSection />
    </main>
    <ContactSection />
    <Footer />
  </div>
);

export default IndustriesPage;
