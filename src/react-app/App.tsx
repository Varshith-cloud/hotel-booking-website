import { BrowserRouter as Router, Routes, Route } from "react-router";
import Header from "@/react-app/components/Header";
import Footer from "@/react-app/components/Footer";
import HomePage from "@/react-app/pages/Home";
import AboutPage from "@/react-app/pages/About";
import RoomsPage from "@/react-app/pages/Rooms";
import RoomDetailsPage from "@/react-app/pages/RoomDetails";
import AmenitiesPage from "@/react-app/pages/Amenities";
import GalleryPage from "@/react-app/pages/Gallery";
import LocationPage from "@/react-app/pages/Location";
import FAQsPage from "@/react-app/pages/FAQs";
import PoliciesPage from "@/react-app/pages/Policies";
import ContactPage from "@/react-app/pages/Contact";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/rooms" element={<RoomsPage />} />
            <Route path="/rooms/:slug" element={<RoomDetailsPage />} />
            <Route path="/amenities" element={<AmenitiesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/location" element={<LocationPage />} />
            <Route path="/faqs" element={<FAQsPage />} />
            <Route path="/policies" element={<PoliciesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
