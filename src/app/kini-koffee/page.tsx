import LeftNav from "@/components/LeftNav";
import BigHighlight from "@/components/BigHighlight";

export const metadata = {
  title: "Kini Koffee — Rainee Pei",
};

const valueBars = [
  { label: "Looks of the coffee", count: 11, pct: 18.3 },
  { label: "How nice it is to take pictures", count: 4, pct: 6.7 },
  { label: "Taste of the coffee", count: 44, pct: 73.3 },
  { label: "Scenery/ambiance", count: 53, pct: 88.3 },
  { label: "Ability to work/study", count: 46, pct: 76.7 },
  { label: "Accessibility of the store", count: 7, pct: 11.7 },
  { label: "“Story” behind the store", count: 2, pct: 3.3 },
  { label: "Location of the store", count: 13, pct: 21.7 },
];

const featureBank = [
  "Store Addresses", "Dietary Accommodations", "Food Images", "Item Description",
  "Pictures of the Location", "Stand-out Drinks", "Social Media Links", "TikTok Videos",
  "Pictures from Instagram", "Text-only Menu", "Ingredients They Use", "Parking",
  "Publications They are Featured In", "Favorite Drinks", "Careers", "Contact Methods",
  "Store Specific Hours", "Google Maps", "Menu Categories (i.e. Drink, Food)",
  "Food/Drink Customizations", "Reviews", "Item Prices", "Wheelchair Accessibility",
  "Seating Availability",
];

export default function KiniKoffee() {
  return (
    <div className="flex min-h-screen bg-background">
      <LeftNav />
      <div className="flex flex-1 justify-center px-[60px] py-11.5">
        <div className="flex w-[900px] flex-col gap-[50px]">
          <div className="flex flex-col gap-[50px]">
            <div className="flex w-[422px] flex-col gap-2.5 font-cormorant text-2xl font-bold italic">
              <p className="text-[34px] text-accent">Kini Koffee</p>
              <p className="text-[28px] text-black">UX research</p>
            </div>

            <div className="flex flex-col gap-[25px]">
              <div className="flex gap-[65px]">
                <div className="flex w-[188px] flex-col items-start gap-[15px]">
                  <BigHighlight>ROLE</BigHighlight>
                  <p className="font-chivo text-xl text-black">UX Researcher</p>
                </div>
                <div className="flex w-[188px] flex-col items-start gap-[15px]">
                  <BigHighlight>TIMELINE</BigHighlight>
                  <p className="font-chivo text-xl text-black">Jun 2021 - Sep 2021</p>
                </div>
                <div className="flex w-[384px] flex-col items-start gap-[15px]">
                  <BigHighlight>TEAM</BigHighlight>
                  <p className="font-chivo text-xl text-black">
                    Edward de Leon, Stella Seki, Chynna Tumalad, Deepika Vuppala
                  </p>
                </div>
              </div>

              <div className="flex w-[851px] flex-col items-start gap-[15px]">
                <BigHighlight>FINAL WEBSITE</BigHighlight>
                <a
                  href="https://www.kinikoffeesd.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-chivo text-xl text-black underline"
                >
                  Kini Koffee
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-[15px]">
                <p className="font-cormorant text-[28px] font-bold italic text-accent">Overview</p>
                <p className="font-chivo text-xl leading-[50px] text-black">
                  Kini Koffee is a women-owned coffee shop based in San Diego featuring unique and creative
                  drinks. They hope to build a community of women who work unconventional jobs while also
                  creating a fun place for people to grab a quick drink on their way to the nearby beaches.
                </p>
                <div className="flex w-[864px] flex-col gap-[15px]">
                  <p className="font-cormorant text-[28px] font-bold italic text-accent">Impact</p>
                  <p className="font-chivo text-xl leading-[50px] text-black">
                    I spearheaded the research and interview process, including the end-to-end process
                    involving recruitment and data analysis and synthesis. Collaborating with the UI/UX and
                    Visual Designers, I helped pull key insights from our research and interviews to help
                    inform our design decisions. The work showcased below are my{" "}
                    <span className="font-bold text-accent">primary contributions</span>.
                  </p>
                </div>
              </div>
              <div className="h-px w-full bg-accent/20" />
            </div>

            <div className="flex flex-col gap-[15px]">
              <p className="font-cormorant text-[28px] font-bold italic text-accent">
                Identifying problem statements
              </p>
              <p className="font-chivo text-xl leading-[50px] text-black">
                To address both client and customer needs, we created{" "}
                <span className="font-bold text-accent">2 problem statements</span> that encompassed our
                goals for this project while designing Kini Koffee&rsquo;s website and expanding their brand:
              </p>
              <ol className="list-decimal pl-8 font-chivo text-xl leading-[50px] text-black">
                <li>
                  Kini Koffee needs a place where all their information is centralized so customers can
                  easily learn more about the business, drinks, and prices.
                </li>
                <li>
                  People who are looking for coffee shops in the Del Mar area need access to attractive,
                  unique features about Kini Koffee to encourage them to go over there over any other coffee
                  shop in the area.
                </li>
              </ol>
            </div>

            <div className="flex flex-col gap-[15px]">
              <p className="font-cormorant text-[28px] font-bold italic text-accent">
                Understanding our users
              </p>
              <p className="font-chivo text-xl leading-[50px] text-black">
                Kini Koffee wants to be portrayed as a &ldquo;fun, beachy, creative&rdquo; coffee shop for
                people ~16-20 years old. To kickoff our discovery research, I:
              </p>
              <div className="font-chivo text-xl leading-[50px] text-black">
                <p>
                  + <span className="font-bold text-accent">Surveyed 60 users</span> within the target
                  demographic on their outlook on small coffee shops.
                </p>
                <p>
                  + <span className="font-bold text-accent">Interviewed 5 customers and 1 employee</span> at
                  Kini Koffee&rsquo;s Del Mar location.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start gap-[15px]">
              <BigHighlight>KEY INSIGHTS</BigHighlight>

              <ol className="list-decimal pl-8 font-chivo text-xl leading-[50px] text-accent" start={1}>
                <li>
                  Coffee shop aficionados value the scenery and ambiance of a coffee shop just as much as the
                  taste of their coffee.
                </li>
              </ol>
              <div className="flex gap-[15px] font-chivo text-xl leading-[50px] text-black">
                <p className="w-[433px]">
                  &rarr; <span className="font-bold text-accent">88.3%</span> of our survey participants
                  responded that they care about the scenery and ambiance of a coffee shop.
                </p>
                <p className="flex-1">
                  &rarr; <span className="font-bold text-accent">4/5 customers</span> interviewed mentioned
                  how they appreciated the atmosphere they experience from Kini Koffee
                </p>
              </div>
              <p className="w-full max-w-[581px] font-chivo text-black">
                <span className="text-[50px] text-accent">&ldquo;</span>
                <span className="text-2xl leading-[50px]">
                  {" "}One - if the drinks are good and the service - drinks and service would be primary, and
                  then the atmosphere, like this [points at ocean] definitely is the icing on the cake.
                </span>
              </p>

              <ol className="list-decimal pl-8 font-chivo text-xl leading-[50px] text-accent" start={2}>
                <li>
                  Most users discover coffee shops on Google Maps and Yelp rather than on websites and social
                  media.
                </li>
              </ol>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start">
                <p className="font-chivo text-xl leading-[50px] text-black sm:flex-1">
                  &rarr; <span className="font-bold text-accent">38.3%</span> of people usually find coffee
                  shops through Google Maps &amp; <span className="font-bold text-accent">36.7%</span>{" "}
                  usually find coffee shops through Yelp.
                </p>
                <DiscoveryDonut />
              </div>

              <ol className="list-decimal pl-8 font-chivo text-xl leading-[50px] text-accent" start={3}>
                <li>Customers of Kini Koffee love the taste of the shop&rsquo;s specialty drinks.</li>
              </ol>
              <div className="flex gap-[15px] font-chivo text-xl leading-[50px] text-black">
                <p className="w-[433px]">
                  &rarr; <span className="font-bold text-accent">All 5 interviewees</span> enjoyed one of
                  Kini Koffee&rsquo;s featured, specialty drinks.
                </p>
                <p className="flex-1">
                  &rarr; <span className="font-bold text-accent">73.3%</span> of people mentioned that the
                  taste of the coffee is one of the top three things they value most about small coffee shops.
                </p>
              </div>

              <div className="flex flex-col gap-[10px]">
                <p className="font-chivo text-lg font-bold text-black">
                  What do you value about small coffee shops? Select your top 3 reasons.
                </p>
                <p className="font-chivo text-sm text-black">60 responses</p>
              </div>
              <div className="flex flex-col gap-[15px]">
                {valueBars.map((bar) => (
                  <div key={bar.label} className="flex items-center gap-[5px]">
                    <p className="w-[200px] shrink-0 text-right font-chivo text-sm text-black">{bar.label}</p>
                    <div className="flex flex-1 items-center gap-[10px]">
                      <div
                        className="h-[23px] rounded-sm bg-accent/40"
                        style={{ width: `${bar.pct}%` }}
                      />
                      <p className="whitespace-nowrap font-chivo text-sm font-bold text-black">
                        {bar.count} ({bar.pct}%)
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-[15px]">
              <p className="font-cormorant text-[28px] font-bold italic text-accent">
                Determining website features
              </p>
              <p className="font-chivo text-xl leading-[50px] text-black">
                We had <span className="font-bold text-accent">7 participants</span> do a{" "}
                <span className="font-bold text-accent">feature sorting exercise</span> to determine what to
                prioritize when designing Kini Koffee&rsquo;s website. Given a scenario, we had them sort
                features usually seen in a coffee shop website into{" "}
                <span className="font-bold text-accent">4 categories</span>.
              </p>
              <p className="font-chivo text-sm font-bold text-black">
                Scenario: Your friend told you about a new coffee shop and you&rsquo;re trying to figure out
                if it&rsquo;s worth going to when you&rsquo;re in the area.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Things I want to know right away",
                  "Things that are nice to know, but not my priority",
                  "Things I would disregard even if I saw it",
                  "Things I wouldn't go to a store's website for (I would search for this somewhere else)",
                ].map((label) => (
                  <div key={label} className="rounded-lg border border-accent/40 p-4">
                    <p className="font-chivo text-sm font-bold text-black">{label}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                {featureBank.map((feature) => (
                  <span
                    key={feature}
                    className="rounded bg-[#bbd1ee] px-3 py-2 font-chivo text-xs text-black"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-start gap-[15px]">
              <BigHighlight>KEY INSIGHTS</BigHighlight>
              <div className="flex flex-col gap-3 font-chivo text-xl leading-[50px] text-black sm:flex-row sm:gap-6">
                <div className="flex-1">
                  <p>
                    + <span className="font-bold text-accent">6/7 participants</span> said{" "}
                    <span className="font-bold text-accent">item prices</span> were things they want to know
                    right away.
                  </p>
                  <p>
                    + <span className="font-bold text-accent">4/7 participants</span> said{" "}
                    <span className="font-bold text-accent">pictures of the location</span> would be nice to
                    have.
                  </p>
                  <p>
                    + People usually find out about coffee shops on{" "}
                    <span className="font-bold text-accent">Google Maps and Yelp</span> rather than websites
                    or social media.
                  </p>
                </div>
                <div className="flex-1">
                  <p className="leading-[50px]">From our survey earlier, we found that:</p>
                  <p>
                    + <span className="font-bold text-accent">31.7%</span> would try to find the{" "}
                    <span className="font-bold text-accent">menu</span> FIRST
                  </p>
                  <p>
                    + <span className="font-bold text-accent">30%</span> would try to find the{" "}
                    <span className="font-bold text-accent">store location</span> FIRST
                  </p>
                  <p>
                    + <span className="font-bold text-accent">32%</span> would try to find{" "}
                    <span className="font-bold text-accent">pictures</span> SECOND
                  </p>
                </div>
              </div>
              <p className="font-chivo text-xl leading-[50px] text-black">
                Alongside the logistical information, we needed to show off Kini Koffee&rsquo;s strongest
                points--their scenery, location, and unique drinks--so people are motivated to visit and
                spend time there.
              </p>
            </div>

            <div className="flex flex-col gap-[15px]">
              <p className="font-cormorant text-[28px] font-bold italic text-accent">A/B testing</p>
              <p className="font-chivo text-xl leading-[50px] text-black">
                I conducted <span className="font-bold text-accent">A/B Testing</span> with{" "}
                <span className="font-bold text-accent">3 participants</span> after the UX Designers finished
                developing 2 wireframes. Each user engaged with both wireframes given a task list and
                answered prototype-specific questions.
              </p>
            </div>

            <div className="flex flex-col items-start gap-[15px]">
              <BigHighlight>KEY INSIGHTS</BigHighlight>
              <ol className="list-decimal pl-8 font-chivo text-xl leading-[50px] text-black">
                <li>Social media isn&rsquo;t a priority, but adds legitimacy to the site and business.</li>
                <li>Users had difficulty navigating back to the homepage.</li>
                <li>
                  Users don&rsquo;t trust curated or selected content, which is why they gravitate towards
                  Google Maps or Yelp as they are more likely to showcase honest customer feedback and
                  reviews.
                </li>
                <li>Career opportunities needed to be more discoverable.</li>
              </ol>
            </div>

            <div className="flex flex-col gap-[15px]">
              <p className="font-cormorant text-[28px] font-bold italic text-accent">Analysis and synthesis</p>
              <p className="font-chivo text-xl leading-[50px] text-black">
                I grouped each user&rsquo;s feedback into suggestions, expectations, likes, and confusions, to
                help us determine features we want to implement into the final prototype.
              </p>
              <div className="flex gap-[15px]">
                <div className="flex flex-1 flex-col items-start gap-[15px]">
                  <BigHighlight>PROTOTYPE A KEY INSIGHTS</BigHighlight>
                  <div className="font-chivo text-xl leading-[50px] text-black">
                    <p>+ Menu is more visually exciting and engaging with pictures of the drinks, but it needs to show drink prices.</p>
                    <p>+ Too much blank space and images detracts from the user experience (too much scrolling).</p>
                    <p>+ Using smaller text to display important information may dissuade users from reading through it.</p>
                    <p>+ Displaying speciality drinks in the homepage is engaging and fun.</p>
                    <p>+ Menu and online ordering are showcased well.</p>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-start gap-[15px]">
                  <BigHighlight>PROTOTYPE B KEY INSIGHTS</BigHighlight>
                  <div className="font-chivo text-xl leading-[50px] text-black">
                    <p>+ Menu is better for finding prices and drink information, and also shows Kini Koffee&rsquo;s specialization in drinks.</p>
                    <p>+ Prototype B has more clarity, making it easier to access information, such as directions and locations.</p>
                    <p>+ Menu and online ordering are showcased well.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-px w-full bg-accent/20" />

            <div className="flex flex-col gap-[15px]">
              <p className="font-cormorant text-[28px] font-bold italic text-accent">Takeaways</p>
              <div className="font-chivo text-xl leading-10 text-black">
                <p className="mb-[15px]">
                  + Working with an actual stakeholder (as opposed to school projects) highlights the
                  necessity of effective communication and compromise.
                </p>
                <p>
                  + UX research is fundamental to the design process. Analysis and synthesis of your research
                  guides all design decisions and prevents teams from designing for the &ldquo;wrong&rdquo;
                  problem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DiscoveryDonut() {
  return (
    <div className="flex shrink-0 flex-col items-center gap-3">
      <div
        className="size-[180px] rounded-full"
        style={{
          background:
            "conic-gradient(#0857c3 0% 38.3%, #7ca6df 38.3% 75%, #e2e8f0 75% 100%)",
        }}
      >
        <div className="flex size-full items-center justify-center">
          <div className="flex size-[110px] items-center justify-center rounded-full bg-background text-center font-chivo text-xs font-bold text-black">
            Discovery
            <br />
            channels
          </div>
        </div>
      </div>
      <div className="flex gap-4 font-chivo text-xs text-black">
        <span className="flex items-center gap-1">
          <span className="size-2.5 rounded-full bg-accent" /> Google Maps 38.3%
        </span>
        <span className="flex items-center gap-1">
          <span className="size-2.5 rounded-full bg-[#7ca6df]" /> Yelp 36.7%
        </span>
      </div>
    </div>
  );
}
