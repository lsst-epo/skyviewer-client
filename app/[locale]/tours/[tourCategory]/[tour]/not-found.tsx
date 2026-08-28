import Buttonish from "@rubin-epo/epo-react-lib/Buttonish";
import Cover from "@/components/molecules/Cover";

const TourNotFound = () => {
  return (
    <Cover className="tour-not-found">
      <h1>Tour not found</h1>
      <Buttonish url="/tours" text="Return to tours" />
    </Cover>
  );
};

export default TourNotFound;
