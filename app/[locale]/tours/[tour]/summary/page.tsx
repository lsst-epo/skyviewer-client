import { FunctionComponent } from "react";
import Link from "next/link";
import ShareButtons from "@/components/organisms/ShareButtons";
import { getTourPoisData } from "@/services/api/tour";

const SummaryPage: FunctionComponent<TourProps> = async ({
  params: { tour },
}) => {
  const { title } = await getTourPoisData(tour);

  return (
    <div className="tour-summary-container">
      <div className="tour-summary">
        <div className="summary-header">
          <h2 className="summary-heading">Congratulations!</h2>
          <p>
            You have completed the {title} tour! You can share it with your
            friends
          </p>
          <ShareButtons download={false} showLabels={false} />
        </div>
        <div className="divider"></div>
        <div className="summary-links-container">
          <h3 className="summary-links-list-heading">Explore</h3>
          <ol className="summary-links-list">
            <li className="summary-link-item">
              <Link href="/#" className="summary-link">
                <div className="summary-link-text">
                  Classify galaxies as a part of a citizen science project
                </div>
              </Link>
            </li>
            <li className="summary-link-item">
              <Link href="/#" className="summary-link">
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

export default SummaryPage;
