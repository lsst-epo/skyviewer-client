import NavLink from "@/primitives/NavLink";
import GuidedExperiences from "@/components/guidedExperiences";
import IconComposer from "@/svg/IconComposer";
// import TEST_EXPERIENCES from "@/fixtures/placeholderExperiences";
import {
  useGuidedExpsData,
  useGuidedExpsCounts,
} from "@/lib/api/guidedExperiences";

export default function GuidedExperiencesPage() {
  const guidedExps = useGuidedExpsData()?.data?.guidedExps;
  const guidedExpCounts = useGuidedExpsCounts(["tours", "astronomers"])?.counts;

  return (
    <div className="guided-experiences-container">
      <GuidedExperiences
        guidedExperiences={guidedExps}
        counts={guidedExpCounts}
      />
      <NavLink
        url="/"
        text="Back to main screen"
        iconBefore
        icon={<IconComposer icon="ArrowLeft" />}
      />
    </div>
  );
}
