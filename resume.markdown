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
        <div class="col-span-4 sm:col-span-1 text-center tracking-widest bg-black text-white py-8 px-4">
          <h2 class="font-bold">
            {{ company.start_date | date: "%Y" }}
            -
            {% if company.end_date %}
              {{ company.end_date | date: "%Y" }}
            {% else %}
              20<em>??</em>
            {% endif %}
          </h2>
        </div>
        <div class="col-span-4 sm:col-span-3 p-8">
          <h3 class="font-bold text-xl">{{ company.name }}</h3>
          <h4 class="font-light text-lg text-gray-600 pb-4 mb-4 border-b-3 border-gray-300 inline-block">{{ company.job_title }}</h4>
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
