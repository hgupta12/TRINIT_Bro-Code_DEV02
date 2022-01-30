import React from 'react';
import Visibility from './Visibility';
import './PendingBugList.scss';

function PendingBugList() {
  return <div>
      <table id="pendingbuglist-table">
          <tr>
              <th className="pendingbuglist-table-heading" id="pendingbuglist-table-heading-slno">SL No.</th>
              <th className="pendingbuglist-table-heading" id="pendingbuglist-table-heading-bugtitle">Bug Title</th>
              <th className="pendingbuglist-table-heading" id="pendingbuglist-table-heading-assignedto">Assigned to</th>
              <th className="pendingbuglist-table-heading" id="pendingbuglist-table-heading-email">Email</th>
              <th className="pendingbuglist-table-heading" id="pendingbuglist-table-heading-visibility">Visibility</th>
          </tr>

          <tr>
              <td>1</td>
              <td>Blue Moon</td>
              <td>Calvin Ferns</td>
              <td>calf23@gmail.com</td>
              <td>
                  <Visibility />
              </td>
          </tr>
          <tr>
            <td colspan="4" className="pendingbuglist-table-element-description"><p><u>Description: </u>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p></td>
          </tr>

      </table>
  </div>;
}

export default PendingBugList;
