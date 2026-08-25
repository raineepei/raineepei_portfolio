import Image from "next/image";
import LeftNav from "@/components/LeftNav";
import BigHighlight from "@/components/BigHighlight";

export const metadata = {
  title: "Kini Koffee — Rainee Pei",
};

export default function KiniKoffee() {
  return (
    <div className="flex min-h-screen bg-background">
      <LeftNav />
      <div className="mr-[60px] flex flex-1 justify-center overflow-x-hidden py-11.5 pl-[60px]">
        <div className="flex w-[936px] flex-col items-start gap-[50px]">
          <div className="flex w-full flex-col items-start gap-[30px]">
            <div className="flex w-[422px] flex-col items-start gap-1 font-cormorant font-bold italic">
              <p className="w-full text-[26px] text-accent">Kini Koffee</p>
              <p className="w-full text-[22px] text-black">UX research</p>
            </div>

            <div className="flex w-full flex-col items-start gap-[22px]">
              <div className="flex w-full items-start gap-5">
                <div className="flex w-[188px] shrink-0 flex-col items-start gap-[14px]">
                  <BigHighlight>ROLE</BigHighlight>
                  <p className="font-chivo text-sm text-black">UX Researcher</p>
                </div>
                <div className="flex w-[188px] shrink-0 flex-col items-start gap-[14px]">
                  <BigHighlight>TIMELINE</BigHighlight>
                  <p className="font-chivo text-sm text-black">Jun 2021 - Sep 2021</p>
                </div>
                <div className="flex flex-[1_0_0] flex-col items-start gap-[14px]">
                  <BigHighlight>TEAM</BigHighlight>
                  <p className="font-chivo text-sm text-black">
                    Edward de Leon, Stella Seki, Chynna Tumalad, Deepika Vuppala
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col items-start gap-[22px]">
            <div className="flex w-full flex-col items-start gap-[22px]">
              <div className="flex w-full flex-col items-start gap-[14px]">
                <div className="flex w-full flex-col items-start gap-3">
                  <p className="font-cormorant text-xl font-bold italic text-accent">Overview</p>
                  <p className="font-chivo text-sm leading-9 text-black">
                    Kini Koffee is a women-owned coffee shop based in San Diego featuring unique and creative
                    drinks. They hope to build a community of women who work unconventional jobs while also
                    creating a fun place for people to grab a quick drink on their way to the nearby beaches.
                  </p>
                </div>
                <div className="flex w-full flex-col items-start gap-3">
                  <p className="font-cormorant text-xl font-bold italic text-accent">Impact</p>
                  <p className="font-chivo text-sm leading-9 text-black">
                    I spearheaded the research and interview process, including the end-to-end process
                    involving <span className="font-bold text-accent">recruitment</span> and{" "}
                    <span className="font-bold text-accent">data analysis and synthesis</span>. Collaborating
                    with the UI/UX and Visual Designers, I helped pull key insights from our research and
                    interviews to help inform our design decisions. The work showcased below are my{" "}
                    <span className="font-bold text-accent">primary contributions</span>.
                  </p>
                </div>
              </div>
              <div className="h-px w-full bg-accent/20" />

              <div className="flex w-full flex-col items-start gap-3">
                <p className="font-cormorant text-xl font-bold italic text-accent">
                  Identifying problem statements
                </p>
                <div className="flex w-full flex-col items-start gap-1.5 font-chivo text-sm leading-9 text-black">
                  <p>
                    To address both client and customer needs, we created{" "}
                    <span className="font-bold text-accent">2 problem statements</span> that encompassed our
                    goals for this project while designing Kini Koffee&rsquo;s website and expanding their
                    brand:
                  </p>
                  <ol className="list-decimal">
                    <li className="ms-[21px]">
                      Kini Koffee needs a place where all their information is centralized so customers can
                      easily learn more about the business, drinks, and prices.
                    </li>
                    <li className="ms-[21px]">
                      People who are looking for coffee shops in the Del Mar area need access to attractive,
                      unique features about Kini Koffee to encourage them to go over there over any other
                      coffee shop in the area.
                    </li>
                  </ol>
                </div>
              </div>

              <div className="flex w-full flex-col items-start gap-[15px]">
                <p className="font-cormorant text-xl font-bold italic text-accent">Understanding our users</p>
                <p className="font-chivo text-sm leading-9 text-black">
                  Kini Koffee wants to be portrayed as a &ldquo;fun, beachy, creative&rdquo; coffee shop for
                  people ~16-20 years old. To kickoff our discovery research, I:
                </p>
                <div className="font-chivo text-sm leading-9 text-black">
                  <p>
                    + <span className="text-accent">Surveyed 60 users</span> within the target demographic
                    on their outlook on small coffee shops.
                  </p>
                  <p>
                    + <span className="text-accent">Interviewed 5 customers and 1 employee</span> at Kini
                    Koffee&rsquo;s Del Mar location.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex w-full flex-col items-start gap-[15px]">
              <BigHighlight>KEY INSIGHTS</BigHighlight>

              <div className="flex w-full flex-col items-start gap-[22px]">
                <div className="flex w-full flex-col items-center gap-1">
                  <ol className="w-full list-decimal font-chivo text-sm leading-9 text-accent">
                    <li className="ms-[21px]">
                      Coffee shop aficionados value the scenery and ambiance of a coffee shop just as much as
                      the taste of their coffee.
                    </li>
                  </ol>
                  <div className="flex w-full flex-col items-center gap-3">
                    <div className="flex w-full items-start gap-[14px] font-chivo text-sm leading-9 text-black">
                      <p className="w-[433px]">
                        &rarr; <span className="text-accent">88.3%</span> of our survey participants
                        responded that they care about the scenery and ambiance of a coffee shop.
                      </p>
                      <p className="flex-1">
                        &rarr; <span className="text-accent">4/5 customers</span> interviewed mentioned how
                        they appreciated the atmosphere they experience from Kini Koffee
                      </p>
                    </div>
                    <p className="w-[581px] font-chivo text-sm text-black">
                      <span className="text-accent">&ldquo;</span> One - if the drinks are good and the
                      service - drinks and service would be primary, and then the atmosphere, like this
                      [points at ocean] definitely is the icing on the cake.
                    </p>
                  </div>
                </div>

                <div className="flex w-full flex-col items-center gap-3">
                  <ol className="w-full list-decimal font-chivo text-sm leading-9 text-accent">
                    <li className="ms-[21px]">
                      Most users discover coffee shops on Google Maps and Yelp rather than on websites and
                      social media.
                    </li>
                  </ol>
                  <div className="flex w-full items-center justify-center gap-9">
                    <div className="w-[498px] font-chivo text-sm leading-9 text-black">
                      &rarr; <span className="font-bold text-accent">38.3%</span> of people usually find
                      coffee shops through Google Maps &amp; <span className="font-bold text-accent">36.7%</span>{" "}
                      usually find coffee shops through Yelp.
                    </div>
                    <div className="relative size-[200px] shrink-0">
                      <Image src="/images/kini/discovery-chart.png" alt="Coffee shop discovery channels chart" fill className="object-contain" />
                    </div>
                  </div>
                </div>

                <div className="flex w-full flex-col items-center gap-3">
                  <div className="flex w-full flex-col items-start gap-1">
                    <ol className="w-full list-decimal font-chivo text-sm leading-9 text-accent">
                      <li className="ms-[21px]">Customers of Kini Koffee love the taste of the shop&rsquo;s specialty drinks.</li>
                    </ol>
                    <div className="flex w-full items-start gap-[14px] font-chivo text-sm leading-9 text-black">
                      <p className="w-[433px]">
                        &rarr; <span className="font-bold text-accent">All 5 interviewees</span> enjoyed one
                        of Kini Koffee&rsquo;s featured, specialty drinks.
                      </p>
                      <p className="flex-1">
                        &rarr; <span className="font-bold text-accent">73.3%</span> of people mentioned that
                        the taste of the coffee is one of the top three things they value most about small
                        coffee shops.
                      </p>
                    </div>
                  </div>
                  <div className="relative h-[345px] w-[859px]">
                    <Image src="/images/kini/value-bar-chart.png" alt="Chart of what people value about small coffee shops" fill className="object-contain" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex w-full flex-col items-center gap-3">
              <div className="flex w-full flex-col items-start gap-3">
                <p className="font-cormorant text-xl font-bold italic text-accent">
                  Determining website features
                </p>
                <p className="font-chivo text-sm leading-9 text-black">
                  We had <span className="font-bold text-accent">7 participants</span> do a{" "}
                  <span className="font-bold text-accent">feature sorting exercise</span> to determine what
                  to prioritize when designing Kini Koffee&rsquo;s website. Given a scenario, we had them
                  sort features usually seen in a coffee shop website into{" "}
                  <span className="font-bold text-accent">4 categories</span>.
                </p>
              </div>
              <div className="relative h-[409px] w-[646px]">
                <Image src="/images/kini/feature-sorting.png" alt="Feature sorting exercise results" fill className="object-contain" />
              </div>
            </div>

            <div className="flex w-full flex-col items-start gap-3">
              <BigHighlight>KEY INSIGHTS</BigHighlight>
              <div className="flex w-full flex-col items-start gap-3">
                <div className="flex w-full items-start gap-10">
                  <div className="w-[442px] font-chivo text-sm leading-9 text-black">
                    <p>
                      + <span className="text-accent">6/7 participants</span> said{" "}
                      <span className="text-accent">item prices</span> were things they want to know right
                      away.
                    </p>
                    <p>
                      + <span className="text-accent">4/7 participants</span> said{" "}
                      <span className="text-accent">pictures of the location</span> would be nice to have.
                    </p>
                    <p>
                      + People usually find out about coffee shops on{" "}
                      <span className="text-accent">Google Maps and Yelp</span> rather than websites or
                      social media.
                    </p>
                  </div>
                  <div className="h-full w-px shrink-0 bg-accent/20" />
                  <div className="flex-1 font-chivo text-sm leading-9 text-black">
                    <p>From our survey earlier, we found that:</p>
                    <p>
                      + <span className="text-accent">31.7%</span> would try to find the{" "}
                      <span className="text-accent">menu</span> FIRST
                    </p>
                    <p>
                      + <span className="text-accent">30%</span> would try to find the{" "}
                      <span className="text-accent">store location</span> FIRST
                    </p>
                    <p>
                      + <span className="text-accent">32%</span> would try to find{" "}
                      <span className="text-accent">pictures</span> SECOND
                    </p>
                  </div>
                </div>
                <p className="font-chivo text-sm leading-9 text-black">
                  Alongside the logistical information, we needed to show off Kini Koffee&rsquo;s strongest
                  points--their scenery, location, and unique drinks--so people are motivated to visit and
                  spend time there.
                </p>
              </div>
            </div>

            <div className="flex w-full flex-col items-start gap-3">
              <p className="font-cormorant text-xl font-bold italic text-accent">A/B testing</p>
              <p className="font-chivo text-sm leading-9 text-black">
                I conducted <span className="text-accent">A/B Testing</span> with{" "}
                <span className="text-accent">3 participants</span> after the UX Designers finished
                developing 2 wireframes. Each user engaged with both wireframes given a task list and
                answered prototype-specific questions.
              </p>
            </div>

            <div className="flex w-full flex-col items-start gap-3">
              <BigHighlight>KEY INSIGHTS</BigHighlight>
              <ol className="list-decimal font-chivo text-sm leading-9 text-black">
                <li className="ms-[21px]">Social media isn&rsquo;t a priority, but adds legitimacy to the site and business.</li>
                <li className="ms-[21px]">Users had difficulty navigating back to the homepage.</li>
                <li className="ms-[21px]">
                  Users don&rsquo;t trust curated or selected content, which is why they gravitate towards
                  Google Maps or Yelp as they are more likely to showcase honest customer feedback and
                  reviews.
                </li>
                <li className="ms-[21px]">Career opportunities needed to be more discoverable.</li>
              </ol>
            </div>

            <div className="flex w-full flex-col items-start gap-[22px]">
              <div className="flex w-full flex-col items-start gap-3">
                <div className="flex w-full flex-col items-start gap-3">
                  <p className="font-cormorant text-xl font-bold italic text-accent">Analysis and synthesis</p>
                  <p className="font-chivo text-sm leading-9 text-black">
                    I grouped each user&rsquo;s feedback into suggestions, expectations, likes, and
                    confusions, to help us determine features we want to implement into the final prototype.
                  </p>
                </div>
                <div className="flex w-full items-start gap-[50px]">
                  <div className="flex flex-1 flex-col items-start gap-[15px]">
                    <BigHighlight>PROTOTYPE A KEY INSIGHTS</BigHighlight>
                    <div className="font-chivo text-sm leading-9 text-black">
                      <p>+ Menu is more visually exciting and engaging with pictures of the drinks, but it needs to show drink prices.</p>
                      <p>+ Too much blank space and images detracts from the user experience (too much scrolling).</p>
                      <p>+ Using smaller text to display important information may dissuade users from reading through it.</p>
                      <p>+ Displaying speciality drinks in the homepage is engaging and fun.</p>
                      <p>+ Menu and online ordering are showcased well.</p>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-start gap-[15px]">
                    <BigHighlight>PROTOTYPE B KEY INSIGHTS</BigHighlight>
                    <div className="font-chivo text-sm leading-9 text-black">
                      <p>+ Menu is better for finding prices and drink information, and also shows Kini Koffee&rsquo;s specialization in drinks.</p>
                      <p>+ Prototype B has more clarity, making it easier to access information, such as directions and locations.</p>
                      <p>+ Menu and online ordering are showcased well.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-px w-full bg-accent/20" />

              <div className="flex w-full flex-col items-start gap-3">
                <p className="font-cormorant text-xl font-bold italic text-accent">Takeaways</p>
                <div className="flex w-full flex-col items-start font-chivo text-sm leading-9 text-black">
                  <p>
                    + Working with an actual stakeholder (as opposed to school projects) highlights the
                    necessity of effective communication and compromise.
                  </p>
                  <p>
                    + UX research is fundamental to the design process. Analysis and synthesis of your
                    research guides all design decisions and prevents teams from designing for the
                    &ldquo;wrong&rdquo; problem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
