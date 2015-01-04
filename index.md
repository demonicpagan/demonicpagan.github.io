---
layout: page
title: Current Repositories
author: demonicpagan, stormbottcl
customjs:
 - //code.jquery.com/jquery-1.11.2.min.js
 - /assets/js/github-query.js
---
{% include JB/setup %}
<div id="github"></div>
<div id="github2"></div>

<!-- Javascript to load and display repos from GitHub -->
{% for js in page.customjs %}
<script type="text/javascript" src="{{ js }}"></script>
{% endfor %}
<script type="text/javascript">
  $(function() {
    $("#github").loadRepositories("Demonicpagan");
    $("#github2").loadRepositories("StormbotTCL");
  });
</script>
<!-- End GitHub repo code -->

