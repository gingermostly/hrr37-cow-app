import * as React from 'react';
import '../styles/cowlist.css';

class CowList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <table className="cow-list">
        <thead>
          <tr>
            <th>NAME</th>
            <th>DESCRIPTION</th>
          </tr>
        </thead>
        <tbody>
          {this.props.cows.map((item, index) => {
            return (
              <tr key={index}>
                <td>
                  {item.name}
                </td>
                <td>
                  {item.description}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
}

export default CowList;
