import {
  usePaginationState,
  useDataTableSortingState,
} from '@commercetools-uikit/hooks';
import { ContentNotification } from '@commercetools-uikit/notifications';
import Text from '@commercetools-uikit/text';

import { useProductFetcher } from '../../hooks/use-product-connector';
import { getErrorMessage } from '../../helpers';

const Welcome = () => {
  const { page, perPage } = usePaginationState();
  const tableSorting = useDataTableSortingState({ key: 'key', order: 'asc' });
  const { productsResult, error, loading } = useProductFetcher({
    page,
    perPage,
    tableSorting,
  });

  if (error) {
    return (
      <ContentNotification type="error">
        <Text.Body>{getErrorMessage(error)}</Text.Body>
      </ContentNotification>
    );
  }

  if (loading) {
    return <>Loading...</>;
  }

  const logMessage = () => {
    console.log('logging message on prod' + Math.floor(Math.random() * 1000));
  };

  const logError = () => {
    console.error('logging error on prod' + Math.floor(Math.random() * 1000));
  };

  return (
    <div>
      <h1>products prod</h1>;
      <button onClick={() => logMessage()}>Log Message</button>
      <button onClick={() => logError()}>Log Error</button>
      {productsResult.products.results.map((product) => {
        return (
          <div key={product.id}>
            <h1>{product.key}</h1>
            <p>{product.id}</p>
          </div>
        );
      })}
    </div>
  );
};
Welcome.displayName = 'Home';

export default Welcome;
