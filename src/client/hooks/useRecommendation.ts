import { useQuery } from '@apollo/client';

import type { GetRecommendationsQueryResponse } from '../graphql/queries';
import { GetRecommendationsQuery } from '../graphql/queries';

export const useRecommendation = () => {
  const recommendationsResult = useQuery<GetRecommendationsQueryResponse>(GetRecommendationsQuery);

  const recommendations = recommendationsResult?.data?.recommendations;

  if (recommendations == null) {
    return { recommendation: undefined };
  }
  console.log(recommendations);

  const recommendation = recommendations[0];
  return { recommendation };
};
