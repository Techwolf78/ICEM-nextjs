"use client";

import React from "react";
import Image from "next/image";

export default function AnnualFestPage() {
  return (
    <div className="w-full bg-white text-gray-800">
      {/* HERO */}
      <div className="relative w-full h-[70vh]">
        <Image
          src="/Annual Fest.jpg"
          alt="Annual Fest"
          fill
          className="object-cover"
          priority
          unoptimized={true}
          quality={100}
        />
      </div>

      <main className="max-w-9xl mx-auto px-6 py-8 space-y-12">
        {/* IWAA SECTION */}
        <section
          id="iwaa"
          className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 space-y-6"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-secondary">
            Indira Women Achievers Awards (IWAA)
          </h2>

          {/* MAIN IMAGE */}
          <div className="rounded-xl overflow-hidden shadow border">
            <Image
              src="/iwaa_main.jpg"
              alt="IWAA Event"
              width={1200}
              height={600}
              className="object-cover w-full h-64 md:h-80"
            />
          </div>

          <p className="text-gray-700 text-md leading-relaxed">
            The Indira Women Achievers Awards (IWAA) celebrated the extraordinary
            journeys of women who have shattered ceilings, challenged norms, and
            redefined success across diverse fields. Inspired by the legacy of leaders
            like Indira Gandhi and modern icons such as Kiran Mazumdar-Shaw, Sudha
            Murthy, and Mary Kom, this landmark event honoured the spirit of
            resilience, innovation, and empowerment.
          </p>

          <h3 className="text-xl font-semibold text-secondary">Event Highlights</h3>

          {/* SMALL IMAGE ROW */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <div className="rounded-md overflow-hidden border shadow-sm">
              <Image
                src="/iwaa_opening.jpg"
                alt="IWAA Opening"
                width={600}
                height={400}
                className="object-cover h-32 w-full"
              />
            </div>
            <div className="rounded-md overflow-hidden border shadow-sm">
              <Image
                src="/iwaa_culture.jpg"
                alt="IWAA Cultural Tribute"
                width={600}
                height={400}
                className="object-cover h-32 w-full"
              />
            </div>
            <div className="rounded-md overflow-hidden border shadow-sm hidden md:block">
              <Image
                src="/iwaa_awards.jpg"
                alt="IWAA Awards"
                width={600}
                height={400}
                className="object-cover h-32 w-full"
              />
            </div>
          </div>

          {/* FULL RESTORED TEXT */}
          <div className="text-lg text-gray-700 leading-relaxed space-y-4">
            <p className="font-medium">1. Inspiring Opening</p>
            <p>
              The evening commenced with a powerful visual journey, “INDIRA @ 40”
              showcasing the evolution of women’s roles in society, followed by a
              stirring welcome address that set the tone for the night.
            </p>

            <p className="font-medium">2. Cultural Tributes</p>
            <ul className="list-disc ml-5">
              <li>Indira Music School Performance — a soulful act celebrating womanhood.</li>
              <li>Student Dance Performances symbolizing unity and strength.</li>
              <li>Nike Women’s Film Screening — stories of perseverance and grit.</li>
            </ul>

            <p className="font-medium">3. Awards and Felicitations</p>
            <p>
              Awards were presented to women achievers in categories such as:
            </p>
            <ul className="list-disc ml-5">
              <li>Entrepreneurship & Innovation</li>
              <li>Sports & Athletics</li>
              <li>Education & Social Change</li>
              <li>Arts & Leadership</li>
            </ul>
            <p>
              A special felicitation was extended to Chief Guest Ms. Amrutai
              Fadnavis, who delivered a powerful message on women’s leadership and
              societal impact.
            </p>

            <p className="font-medium">4. Grand Finale: Sunidhi Chauhan Live</p>
            <p>
              The iconic playback singer Sunidhi Chauhan set the stage ablaze with an
              electrifying performance featuring her greatest hits. The evening
              concluded with Dr. Tarita Shankar honouring her contribution to music
              and women empowerment.
            </p>

            <h3 className="text-lg font-semibold text-secondary">Legacy of IWAA</h3>
            <p>
              IWAA honoured the past, celebrated the present, and inspired the future.
              This event reinforced Indira's commitment to gender equity, leadership
              and social transformation.
            </p>
          </div>
        </section>

        {/* GUSTO SECTION */}
        <section
          id="gusto"
          className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 space-y-6"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-secondary">
            Gusto - Annual Cultural Festival
          </h2>

          {/* MAIN IMAGE */}
          <div className="rounded-xl overflow-hidden shadow border">
            <Image
              src="/gusto_main.jpg"
              alt="Gusto Main Festival"
              width={1200}
              height={600}
              className="object-cover w-full h-64 md:h-80"
            />
          </div>

          <p className="text-lg text-gray-700 leading-relaxed">
            Gusto is the most anticipated annual cultural and management festival
            that turns the campus into a vibrant hub of creativity, talent, and
            youthful energy. A celebration of diversity and dynamism, Gusto brings
            together students from across disciplines and institutions to collaborate,
            express, and create unforgettable experiences.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            With a legacy of fostering talent and igniting passions, Gusto has become
            a movement that empowers students to express, explore, and excel.
          </p>

          <h3 className="text-xl font-semibold text-secondary">Event Highlights</h3>

          {/* 2-IMAGE GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="rounded-md overflow-hidden border shadow-sm">
              <Image
                src="/gusto_inaug.jpg"
                alt="Gusto Inauguration"
                width={600}
                height={400}
                className="object-cover h-40 w-full"
              />
            </div>
            <div className="rounded-md overflow-hidden border shadow-sm">
              <Image
                src="/gusto_crowd.jpg"
                alt="Gusto Crowd"
                width={600}
                height={400}
                className="object-cover h-40 w-full"
              />
            </div>
          </div>

          {/* RESTORED FULL CONTENT */}
          <div className="text-md text-gray-700 leading-relaxed space-y-4">

            <p className="font-medium">1. Grand Inauguration</p>
            <p>
              Every edition of Gusto begins with a spectacular inauguration ceremony,
              setting the tone for days filled with excitement, innovation, and
              cultural richness.
            </p>

            <p className="font-medium">2. Thematic Celebrations</p>
            <p>
              Each year, Gusto adopts a unique theme that shapes the decor,
              performances, installations and cultural showcases — creating an
              immersive global experience right on campus.
            </p>

            <p className="font-medium">3. Diverse Competitions & Performances</p>
            <ul className="list-disc ml-5">
              <li>Cosplay & Fashion Shows that bring creativity to life.</li>
              <li>Dance and Music performances that energize the campus.</li>
              <li>Management Events testing leadership & strategic thinking.</li>
              <li>Cultural Exhibitions showcasing arts and traditions.</li>
            </ul>

            <p className="font-medium">4. Carnival Atmosphere</p>
            <p>
              With food stalls, fun zones, games, interactive installations, and
              student-run activities, Gusto becomes a full-fledged carnival of joy,
              colour, and celebration.
            </p>

            <p className="font-medium">5. Star-Studded Performances</p>
            <p>
              The festival often ends with live performances by renowned artists,
              giving students memories that last forever.
            </p>

            <h3 className="text-lg font-semibold text-secondary">
              Why be a part of Gusto?
            </h3>

            <ul className="list-disc ml-5 space-y-1">
              <li><strong>Scale:</strong> Over 500+ students from Maharashtra participate.</li>
              <li><strong>Holistic Platform:</strong> Cultural, managerial and artistic experiences.</li>
              <li><strong>Legacy of Excellence:</strong> A decades-long celebration of youth and creativity.</li>
            </ul>

            <p className="font-medium">Be Part of the Tradition!</p>
          </div>
        </section>
      </main>
    </div>
  );
}
