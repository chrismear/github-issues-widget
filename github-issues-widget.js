var GithubIssuesWidget = {};
GithubIssuesWidget.url = "http://github.com/api/v2/json/issues/list/" + GITHUB_ISSUES_USER + "/" + GITHUB_ISSUES_REPO + "/open?callback=?";
GithubIssuesWidget.go = function () {
  $.getJSON(this.url, function (data) {
    var list = $('<ul></ul>');
    $.each(data.issues, function (issueIndex, issue) {
      var issueHtml = "<li>";
      issueHtml += issue.title;
      $.each(issue.labels, function (labelIndex, label) {
        issueHtml += '<span class="label">' + label + '</span>';
      });
      issueHtml += "</li>";
      list.append(issueHtml);
    });
    $('#github-issues-widget').append(list);
  });
};
GithubIssuesWidget.go();
