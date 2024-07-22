import PropTypes from "prop-types";
import Buttonish from "@rubin-epo/epo-react-lib/Buttonish";
import useResizeObserver from "use-resize-observer";
import GuidedExperiences from "@/components/guidedExperiences";
import {
  useGuidedExpsCounts,
  getGuidedExpsData,
} from "@/lib/api/tourCategories";

export default function GuidedExperiencesPage({ guidedExps }) {
  // const guidedExps = useGuidedExpsData()?.data?.guidedExps;
  const guidedExpCounts = useGuidedExpsCounts(["tours", "astronomers"])?.counts;
  const { ref } = useResizeObserver({
    onResize: ({ height }) => {
      document.documentElement.style.setProperty(
        "--ge-nav-link-height",
        `${height}px`
      );
    },
  });

  return (
    <div className="guided-experiences-container">
      <GuidedExperiences
        guidedExperiences={guidedExps}
        counts={guidedExpCounts}
      />
      <div ref={ref} className="guided-experiences-nav-link-container">
        <Buttonish styleAs="tertiary" url="/" text="Back to main screen" />
      </div>
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
