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
  image:
    src: /assets/harrison-in-2026.jpeg
    alt: Harrison, genuinely smiling (see the wrinkles around the eyes) in January 2026.
---

{% include hero.html %}

<section>
  <div class="container mx-auto">
    <div class="flex flex-col min-h-screen justify-center items-center">
      <div class="px-8">
        <h2>
          <span class="flex items-center gap-4 flex-wrap">
            <span class="text-[min(10vw,3.75rem)] leading-[2] font-display">
              <span class="px-[0.25em] py-[0.35em] border border-gray-300 rounded-lg">3</span>
              <span class="px-[0.25em] py-[0.35em] border border-gray-300 rounded-lg">1</span>
              <span class="">,</span>
              <span class="px-[0.25em] py-[0.35em] border border-gray-300 rounded-lg">0</span>
              <span class="px-[0.25em] py-[0.35em] border border-gray-300 rounded-lg">8</span>
              <span class="px-[0.25em] py-[0.35em] border border-gray-300 rounded-lg">1</span>
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

<section class="bg-black mb-8">
  <div class="container mx-auto">
    <div class="flex min-h-screen justify-center items-center px-8">
      <div class="flex flex-col sm:flex-row gap-8">
        <div>
          <h2 class="text-xl font-light text-white border-b-2 border-dotted inline-block pb-2 border-white">
            About
            <span class="font-bold">Me</span>
          </h2>
        </div>
        <div class="rounded bg-white p-4 max-w-sm">
          <p class="mb-8"><strong>I thrive on chaos.</strong></p>
          <p class="mb-8">With over a decade-and-a-half of experience, I bring many things to the table, including tacos.</p>
          <p class="mb-8">I offer a variety of expertise in many topics. Hard and soft skills are my specialty, much like taco shells.</p>
          <img src="{{ '/assets/that-pose-is-a-bit-much.jpeg' | relative_url }}" alt="Harrison, sporting a peculiar sock choice, poses in front of a heart-shaped flower arrangement." class="border border-3 rounded">
        </div>
      </div>
    </div>
  </div>
</section>
