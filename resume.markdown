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

<section class="border-b-8">
  <div class="container mx-auto">
    <div class="grid grid-cols-4">
      {% for company in site.data.companies %}
        <div class="col-span-4 sm:col-span-1 text-center bg-black text-white p-8">
          <h2>
            {{ company.start_date | date: "%Y" }}
            -
            {% if company.end_date %}
              {{ company.end_date | date: "%Y" }}
            {% else %}
              20??
            {% endif %}
          </h2>
        </div>
        <div class="col-span-4 sm:col-span-3 p-8">
          <h3>{{ company.name }}</h3>
          <h4>{{ company.job_title }}</h4>
          <hr>
          <p>{{ company.description }}</p>
        </div>
      {% endfor %}
    </div>
  </div>
</section>

<section class="my-8">
  <div class="container mx-auto">
    <div class="grid grid-cols-4">
      <div class="col-span-4 sm:col-span-1 text-center">
        <h2>Skills</h2>
      </div>
      <div class="col-span-4 sm:col-span-3 px-8">
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
    </div>
  </div>
</section>
