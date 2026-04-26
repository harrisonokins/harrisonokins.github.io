---
layout: default
title: Résumé
permalink: /resume/
hero:
  headlines:
    - Websites.
    - Whimsy.
    - Work.
    - I'm busy.
---

{% include hero.html %}

<section>
  <div class="container mx-auto">
    <h2>Work History</h2>
    <ul>
        {% for company in site.data.companies %}
            <li>
                <dl>
                    <dt>Company</dt>
                    <dd>{{ company.name }}</dd>
                    <dt>Title</dt>
                    <dd>{{ company.job_title }}</dd>
                    <dt>Description</dt>
                    <dd>{{ company.description }}</dd>
                    <dt>From</dt>
                    <dd>{{ company.start_date }}</dd>
                    {% if company.end_date %}
                        <dt>To</dt>
                        <dd>{{ company.end_date }}</dd>
                    {% endif %}
                </dl>
            </li>
        {% endfor %}
    </ul>

    <h2>Skills</h2>
    <ul>
        {% for skill in site.data.skills %}
            <li>
                <strong>{{ skill.name }}</strong>
                {% for example in skill.examples %}
                    <ul>
                        <li>{{ example }}</li>
                    </ul>
                {% endfor %}
            </li>
        {% endfor %}
    </ul>
  </div>
</section>
