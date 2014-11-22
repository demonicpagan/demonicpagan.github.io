---
layout: page
title: Current Repositories
tagline:
customjs:
 - //code.jquery.com/jquery-1.11.0.min.js
 - /assets/js/github-query.js
---
{% include JB/setup %}
{% for js in page.customjs %}
<script async type="text/javascript" src="{{ js }}"></script>
{% endfor %}
<script type="text/javascript">
  $(function() {
    $("#my-github-projects").loadRepositories("Demonicpagan");
  });
</script>

