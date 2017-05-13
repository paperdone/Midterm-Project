
import React from 'react';
import LogBlock from 'components/Logblock.jsx';
import NewLogger from 'components/newLogger.jsx';

export default class FirstPage extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
      return(
        <div>
          <h1>Labtalk</h1>
          <LogBlock />
          <NewLogger />
        </div>

      );
    }
}
