import Hero from "./components/hero"
import DestinationHelp from "./components/tawarantourjateng"
import Solutions from "./components/solusi-tourjateng"
import Destinations from "./components/data-statistik"
import NaturalBeauty from "./components/galeri-destinasi"
import DiscussionForum from "./components/forum-diskusi"
import Articles from "./components/artikel"
import Travelbot from "./components/travelbot"
import InteractiveMap from "./components/interactive-map"
import FAQ from "./components/faq"
import JoinCommunity from "./components/join-community"
import Testimonials from "./components/testimonials"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <DestinationHelp />
      <Solutions />
      <Destinations />
      <NaturalBeauty />
      <DiscussionForum />
      <Articles />
      <Travelbot />
      <InteractiveMap />
      <FAQ />
      <Testimonials />
      <JoinCommunity />
    </main>
  )
}

