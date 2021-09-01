---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---

<h2>Favorite Podcasts</h2>
<ul>
{% for item in site.data.samplelist.podcasts %}
<li><a href="{{item.url}}" alt="{{item.title}}">{{item.title}}</a></li>
{% endfor %}
</ul>

asdasdasd