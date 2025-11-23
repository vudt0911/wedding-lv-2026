import HeroSection from "./components/HeroSection";
import EventInfoSection from "./components/EventInfoSection";
import CalendarSection from "./components/CalendarSection";
import BrideGroomIntroSection from "./components/BrideGroomIntroSection";
import GallerySection from "./components/GallerySection";
import RsvpSection from "./components/RsvpSection";
import GiftSection from "./components/GiftSection";
import MusicPlayer from "./components/MusicPlayer";
import BackToTopButton from "./components/ScrollToTop";
import Header from "./components/Header";

function App() {
  return (
    <div className="min-h-screen bg-slate-100">
      <Header />
      <main className="mx-auto flex max-w-md flex-col gap-6 px-4 pb-24 pt-20">
        <HeroSection />
        <EventInfoSection />
        <CalendarSection />
        <BrideGroomIntroSection />
        <GallerySection />
        <RsvpSection />
        <GiftSection />
      </main>
      <MusicPlayer />
      <BackToTopButton />
    </div>
  );
}

export default App;
