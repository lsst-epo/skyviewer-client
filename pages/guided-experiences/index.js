import NavLink from "@/primitives/NavLink";
import GuidedExperiences from "@/components/guidedExperiences";
import IconComposer from "@/svg/IconComposer";

const TEST_EXPERIENCES = [
  {
    id: "1",
    heading: "Astronomical Tours",
    url: "/tours",
    thumbnail: "https://placem.at/places?w=700&h=468&random=space&txt=0",
    count: 718,
  },
  {
    id: "2",
    heading: "Astronomers Hall of Fame",
    url: "/astronomers-hall-of-fame",
    thumbnail: "https://placem.at/places?w=700&h=468&random=astronomy&txt=0",
    count: 1,
  },
];

export default function GuidedExperiencesPage() {
  return (
    <div className="guided-experiences-container">
      <GuidedExperiences guidedExperiences={TEST_EXPERIENCES} />
      <NavLink
        url="/"
        text="Back to main screen"
        iconBefore
        icon={<IconComposer icon="ArrowLeft" />}
      />
    </div>
  );
}
