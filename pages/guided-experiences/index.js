import PropTypes from "prop-types";
import NavLink from "@/primitives/NavLink";
import GuidedExperiences from "@/components/guidedExperiences";
import IconComposer from "@/svg/IconComposer";
import {
  useGuidedExpsData,
  useGuidedExpsCounts,
  getGuidedExpsData,
} from "@/lib/api/tourCategories";

export default function GuidedExperiencesPage({ guidedExps }) {
  // eslint-disable-next-line no-console
  console.log(guidedExps);
  // const guidedExps = useGuidedExpsData()?.data?.guidedExps;
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

export async function getStaticProps() {
  const { guidedExps } = await getGuidedExpsData();

  return { props: { guidedExps } };
}

GuidedExperiencesPage.propTypes = {
  guidedExps: PropTypes.array,
};
