import NavLink from "@/primitives/NavLink";
import GuidedExperiences from "@/components/guidedExperiences";
import IconComposer from "@/svg/IconComposer";
import TEST_EXPERIENCES from "@/fixtures/placeholderExperiences";

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
