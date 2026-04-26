---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
hero:
  headlines:
    - Developer.
    - Designer.
    - Dork.
    - I'm Harrison.
---

{% include hero.html %}

<section>
  <div class="container mx-auto">
    <div class="flex flex-col h-screen justify-center items-center">
      <div>
        <h2>
          <span class="flex items-center space-x-4 flex-wrap">
            <span class="text-6xl leading-[2] font-display">
              <span class="px-3 py-4 border border-gray-300 rounded-lg">3</span>
              <span class="px-3 py-4 border border-gray-300 rounded-lg">1</span>
              <span class="">,</span>
              <span class="px-3 py-4 border border-gray-300 rounded-lg">0</span>
              <span class="px-3 py-4 border border-gray-300 rounded-lg">8</span>
              <span class="px-3 py-4 border border-gray-300 rounded-lg">1</span>
            </span>
            <span class="text-3xl font-thin">
              hours spent delivering
              <br>
              <strong class="font-semibold">Business Value<sup>℠</sup></strong>
            </span>
          </span>
        </h2>
        <p class="text-xs text-gray-500 mt-3">
          <sup>*</sup> Calculation assumes a 40-hour work-week/50-week work-year.
          <br>
          <sup>**</sup> Not including leap years or GitHub downtime.
        </p>
      </div>
    </div>
  </div>
</section>
