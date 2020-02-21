import React, { PureComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Category, Collection, Skeleton } from 'src/components/common';
import c from 'classnames';

import './CollectionHeading.scss';


class CollectionHeading extends PureComponent {
  render() {
    const { collection } = this.props;
    const isLoading = (collection.isLoading || collection.shouldLoad) && !collection.label;
    console.log(collection);
    return (
      <div className="CollectionHeading">
        <Skeleton
          type="p"
          width="100px"
          isLoading={isLoading}
        >
          <span className="bp3-text-muted">
            <Collection.Label collection={collection} label={false} />
            { collection.casefile && (
              <FormattedMessage id="collection.info.case" defaultMessage="Personal dataset" />
            )}
            { !collection.casefile && (
              <Category.Label collection={collection} />
            )}
          </span>
        </Skeleton>
        <Skeleton
          type="h1"
          width="200px"
          isLoading={isLoading}
        >
          <h1 itemProp="name" className="CollectionHeading__title">
            {collection.label}
          </h1>
        </Skeleton>
      </div>
    );
  }
}

export default CollectionHeading;
