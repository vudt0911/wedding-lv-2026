import HeroSection from "./components/HeroSection";
import CalendarSection from "./components/CalendarSection";
import BrideGroomIntroSection from "./components/BrideGroomIntroSection";
import InvitationSection from "./components/InvitationSection";
import GallerySection from "./components/GallerySection";
import MusicPlayer from "./components/MusicPlayer";
import BackToTopButton from "./components/ScrollToTop";
import Header from "./components/Header";

function App() {
  return (
    <div className="min-h-screen bg-slate-100">
      <Header />
      <main className="mx-auto flex max-w-md flex-col gap-12 px-4 pb-24 pt-20">
        <HeroSection />
        <CalendarSection />
        {/* <EventInfoSection /> */}
        <BrideGroomIntroSection />
        <GallerySection />
        <InvitationSection />
        {/* <RsvpSection /> */}
        {/* <GiftSection /> */}
      </main>
      <MusicPlayer />
      <BackToTopButton />
    </div>
  );
}

export default App;
