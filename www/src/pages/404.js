import React from 'react';

export default function PageNotFound({ location }) {
  return (
    <div>
      <p>We couldn't find what you were looking for.</p>
      <p>
        Please contact the owner of the site that linked you to the original URL
        and let them know their link is broken.
      </p>
    </div>
  );
}
