import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { useRouter } from "next/router";
import Link from "next/link";
import { withLayout } from "@moxy/next-layout";
import PrimaryLayout from "@/layouts/Primary";
import GuidedExperienceLayout from "@/layouts/GuidedExperience";
import IconComposer from "@/svg/IconComposer";
import ShareButtons from "@/components/ShareButtons";
import NavLink from "@/primitives/NavLink";
import LoadingSpinner from "@/primitives/LoadingSpinner";
import { getTourPoisData } from "@/lib/api/tour";
import { getToursPaths } from "@/lib/api/tours";

const DEFAULT_NEXT = { url: "/tours/", text: "Go to Tours" };
const DEFAULT_BACK = { url: "/tours/", text: "Back" };

const SummaryPage = ({ setLayoutState, tour }) => {
  const router = useRouter();
  const { pathname } = router;
  const [backLink, setBackLink] = useState(DEFAULT_BACK);
  const { slug, title, tourPois } = tour || {};

  useEffect(() => {
    setBackLink({
      url: `/tours/${slug}/tour?poi=${tourPois?.length}`,
      text: "Back",
    });
  }, [slug, tourPois]);

  useEffect(() => {
    setLayoutState({
      backLink,
      nextLink: DEFAULT_NEXT,
    });
  }, [setLayoutState, backLink]);

  if (!tour || Object.keys(tour).length === 0 || router.isFallback) {
    return <LoadingSpinner />;
  }

  return (
    <div className="tour-summary-container">
      <div className="tour-summary">
        <div className="summary-header">
          <h2 className="summary-heading">Congratulations!</h2>
          <p>
            You have completed the {title} tour! You can share it with your
            friends
          </p>
          <ShareButtons
            classes="share-buttons-horizontal"
            image={false}
            showLabels={false}
          />
        </div>
        <div className="divider"></div>
        <div className="summary-links-container">
          <h3 className="summary-links-list-heading">Explore</h3>
          <ol className="summary-links-list">
            <li className="summary-link-item">
              <Link href="/#" className="summary-link">
                <div className="summary-link-number">1</div>
                <div className="summary-link-text">
                  Classify galaxies as a part of a citizen science project
                </div>
              </Link>
            </li>
            <li className="summary-link-item">
              <Link href="/#" className="summary-link">
                <div className="summary-link-number">2</div>
                <div className="summary-link-text">
                  Read about new galaxies found by our astronomers
                </div>
              </Link>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const data = await getToursPaths();
  const toursPaths = data?.tours.map((tour) => {
    const { slug } = tour;
    return { params: { tour: slug } };
  });

  return {
    paths: toursPaths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { tour } = params;
  const data = await getTourPoisData(tour);

  return {
    props: data,
    revalidate: 30,
  };
}

SummaryPage.propTypes = {
  setLayoutState: PropTypes.func,
  tour: PropTypes.object,
};

const mapLayoutStateToLayoutTree = ({ nextLink, backLink }) => (
  <PrimaryLayout backgroundColor="secondary" closeUrl="/tours">
    <GuidedExperienceLayout
      desktopNextLink={nextLink}
      desktopBackLink={backLink}
      mobileNextLink={nextLink}
      mobileBackLink={backLink}
    />
  </PrimaryLayout>
);

export default withLayout(mapLayoutStateToLayoutTree, {
  mobileNextLink: DEFAULT_NEXT,
  mobileBackLink: DEFAULT_BACK,
  desktopNextLink: DEFAULT_NEXT,
  desktopBackLink: DEFAULT_BACK,
})(SummaryPage);
