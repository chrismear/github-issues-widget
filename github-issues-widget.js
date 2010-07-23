/*
Copyright 2010 Chris Mear

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
var GithubIssuesWidget = {};
GithubIssuesWidget.url = "http://github.com/api/v2/json/issues/list/" + GITHUB_ISSUES_USER + "/" + GITHUB_ISSUES_REPO + "/open?callback=?";
GithubIssuesWidget.go = function () {
  $('#github-issues-widget').append('<p class="loading">Loading...</p>');
  $.getJSON(this.url, function (data) {
    var list = $('<ul></ul>');
    $.each(data.issues, function (issueIndex, issue) {
      var issueUrl = 'http://github.com/' + GITHUB_ISSUES_USER + '/' + GITHUB_ISSUES_REPO + '/issues#issue/' + issue.number;
      var issueHtml = "<li>";
      issueHtml += '<a href="' + issueUrl + '">';
      issueHtml += issue.title;
      issueHtml += "</a>";
      $.each(issue.labels, function (labelIndex, label) {
        issueHtml += '<span class="label">' + label + '</span>';
      });
      issueHtml += "</li>";
      list.append(issueHtml);
    });
    $('#github-issues-widget p.loading').remove();
    $('#github-issues-widget').append(list);
  });
};
GithubIssuesWidget.go();
