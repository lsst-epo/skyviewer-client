import { FC } from "react";
import { redirect } from 'next/navigation'

const ToursPage: FC<RootProps> = async ({ params: { locale } }) => {

  // This page is currently unused, so we'll redirect until we decide what we want displayed here.
  redirect('/guided-experiences');
};

export default ToursPage;
