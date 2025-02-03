import Hero from "@/components/hero"
import DestinationHelp from "@/components/destination-help"
import Solutions from "@/components/solutions"
import Destinations from "@/components/destinations"
import NaturalBeauty from "@/components/natural-beauty"
import DiscussionForum from "@/components/discussion-forum"
import Articles from "@/components/articles"
import Travelbot from "@/components/travelbot"
import InteractiveMap from "@/components/interactive-map"
import FAQ from "@/components/faq"
import JoinCommunity from "@/components/join-community"
import Testimonials from "@/components/testimonials"

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

