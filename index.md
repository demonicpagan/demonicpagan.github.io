---
layout: page
title: Current Repositories
tagline:
customjs:
 - //code.jquery.com/jquery-1.11.0.min.js
 - /assets/js/github-query.js
---
{% include JB/setup %}
<div id="my-github-projects"></div>

<!-- Javascript to load and display repos from GitHub -->
{% for js in page.customjs %}
<script async type="text/javascript" src="{{ js }}"></script>
{% endfor %}
<script type="text/javascript">
  $(function() {
    $("#my-github-projects").loadRepositories("Demonicpagan");
  });
</script>
<!-- End GitHub repo code -->

