import React from 'react' 

function Work({ match }) {
    return (
      <div>
        <h3>{match.params.topicId} hi</h3>
      </div>
    );
  }

  export default Work