import React from 'react';
import moment from 'moment';
import StarIcon from 'react-icons/lib/go/star';
import Tooltip from 'common/lib/components/Tooltip';

import { Container } from './elements';

function PatronStar({ subscriptionSince, ...props }) {
  return (
    <Tooltip
      content={`Patron since ${moment(subscriptionSince).format('MMM Y')}`}
    >
      <Container>
        <StarIcon {...props} />
      </Container>
    </Tooltip>
  );
}

export default PatronStar;
