export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" value="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description">
        The assignment is available online. Submit a link to the landing page of your project.
      </textarea>
      <br />
      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-ppoints" value={100} />
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select name="assignmentgroup" id="wd-group">
                <option value="A1">a1</option>
                <option value="A2">a2</option>
                <option value="A3">a3</option>
              </select>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select name="grade" id="wd-display-grade-as">
                <option value="Percentage">Percentage</option>
                <option value="Letter">Letter</option>
              </select>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select name="type" id="wd-submission-type">
                <option value="Online">Online</option>
                <option value="Paper">Paper</option>
              </select>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Online Entry Options</label>
            </td>
            <td>
              <div id="wd-select-many-genre">
                <div>
                  <input
                    type="checkbox"
                    id="wd-text-entry"
                    value="TEXTENTRY"
                    defaultChecked
                  />
                  <label htmlFor="wd-text-entry">Text Entry</label>
                </div>
                <div>
                  <input type="checkbox" id="wd-website-url" value="WEBSITE" />
                  <label htmlFor="wd-website-url">Website URL</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="wd-media-recordings"
                    value="MEDIA"
                    defaultChecked
                  />
                  <label htmlFor="wd-media-recordings">Media Recordings</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="wd-student-annotation"
                    value="STUDENT"
                  />
                  <label htmlFor="wd-student-annotation">Student Annotation</label>
                </div>
                <div>
                  <input type="checkbox" id="wd-file-upload" value="FILE" />
                  <label htmlFor="wd-file-upload">File Uploads</label>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign-to">Assign to</label>
            </td>
            <td>
              <input
                id="wd-assign-to"
                type="text"
                title="assign"
                placeholder="Everyone"
              />
            </td>
          </tr>

          <tr>
            <td>
              <label htmlFor="wd-due-date">Due</label>
            </td>
            <td>
              <input type="date" id="wd-due-date" value="2011-11-22" />
            </td>
          </tr>

          <tr>
            <td>
              <label htmlFor="wd-available-from">Available from</label>
            </td>
            <td>
              <input type="date" id="wd-available-from" value="2011-11-22" />
            </td>
          </tr>

          <tr>
            <td>
              <label htmlFor="wd-available-until">Until</label>
            </td>
            <td>
              <input type="date" id="wd-available-until" value="2011-11-22" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
