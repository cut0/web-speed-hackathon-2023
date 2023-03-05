import { useQuery } from '@apollo/client';

import type { GetFeatureSectionsQueryResponse } from '../graphql/queries';
import { GetFeatureSectionsQuery } from '../graphql/queries';

export const useFeatures = () => {
  const featuresResult = useQuery<GetFeatureSectionsQueryResponse>(GetFeatureSectionsQuery, {
    fetchPolicy: 'cache-and-network',
  });

  const features = featuresResult.data?.features;

  return { features };
};
