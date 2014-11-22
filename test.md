---
layout: page
title: "Test"
customjs:
 - //code.jquery.com/jquery-1.11.0.min.js
 - /assets/js/test.js
---
{% include JB/setup %}
<div id="github"></div>

{% for js in page.customjs %}
<script type="text/javascript" src="{{ js }}"></script>
{% endfor %}

<script type="text/javascript">
  $(function() {
    $("#github").loadRepositories("Demonicpagan");
  });
</script>