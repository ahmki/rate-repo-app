import RepositoryListContainer from "../../components/RepositoryListContainer";
import { render } from '@testing-library/react-native';

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {

      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      };

      const { getAllByTestId } = render(
        <RepositoryListContainer repositories={repositories}/>
      )

      const fullNames = getAllByTestId('repoFullName');
      const descriptions = getAllByTestId('repoDesc');
      const languages = getAllByTestId('repoLang');

      for (let i = 0; i < repositories.edges.length; i++) {
        expect(fullNames[i]).toHaveTextContent(repositories.edges[i].node.fullName);
        expect(descriptions[i]).toHaveTextContent(repositories.edges[i].node.description);
        expect(languages[i]).toHaveTextContent(repositories.edges[i].node.language);
      }
      
      const counts = getAllByTestId('repoCountItem');

      /* Could be made into a loop with extra work */
      expect(counts[0]).toHaveTextContent('21.9k');
      expect(counts[1]).toHaveTextContent('1.62k');
      expect(counts[2]).toHaveTextContent('3');
      expect(counts[3]).toHaveTextContent('88');
      expect(counts[4]).toHaveTextContent('1.76k');
      expect(counts[5]).toHaveTextContent('69');
      expect(counts[6]).toHaveTextContent('3');
      expect(counts[7]).toHaveTextContent('72');


    });
  });
});