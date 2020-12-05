---
layout: page
permalink: /categories/
title: Categories
---
<div id="archives">
{% for category in site.categories %}
  <div class="archive-group">
    {% capture category_name %}{{ category | first }}{% endcapture %}
    <div id="#{{ category_name | slugize }}"></div>
    <p></p>

    <h3 class="category-head">{{ category_name }}</h3>
    <a name="{{ category_name | slugize }}"></a>
    {% for post in site.categories[category_name] %}
    <article class="archive-item">
      <h4><a href="{{ site.baseurl }}{{ post.url }}">{{post.title}}</a></h4>
    </article>
    {% endfor %}
  </div>
{% endfor %}
</div>

---

{% for post in site.categories.Personal %}
 <li><span>{{ post.date | date_to_string }}</span> &nbsp; <a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}

---

<h2>tags</h2>

<h1>Tag Cloud</h1>
{% assign tags = site.tags | sort %}
{% for tag in tags %}
 <span class="site-tag">
    <a href="/tag/{{ tag | first | slugify }}/"
        style="font-size: {{ tag | last | size  |  times: 4 | plus: 80  }}%">
            {{ tag[0] | replace:'-', ' ' }} ({{ tag | last | size }})
    </a>
</span>
{% endfor %}

<h2>categories</h2>

<h1>categories Cloud</h1>
{% assign categories = site.categories | sort %}
{% for category in categories %}
 <span class="site-categories">
    <a href="/category/{{ category | first | slugify }}/"
        style="font-size: {{ category | last | size  |  times: 4 | plus: 80  }}%">
            {{ category[0] | replace:'-', ' ' }} ({{ category | last | size }})
    </a>
</span>
{% endfor %}