---
layout: page
title: Categories
permalink: /categories
---

<div id="archives">
  {% assign categories = site.categories | sort %}
  {% for category in categories %}
  <h6 class="side-in no-cap block">
  <a href="{{site.baseurl}}/categories/{{ category | first | slugify }}">{{ category[0] }}</a>
  </h6>
{% endfor %}
</div>