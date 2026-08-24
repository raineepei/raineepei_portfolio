import Image from "next/image";
import LeftNav from "@/components/LeftNav";
import BigHighlight from "@/components/BigHighlight";

export const metadata = {
  title: "Healthcare Robotics Lab — Rainee Pei",
};

export default function HealthcareRoboticsLab() {
  return (
    <div className="flex min-h-screen bg-background">
      <LeftNav />
      <div className="flex flex-1 justify-center px-[60px] py-11.5">
        <div className="flex w-[936px] flex-col items-start gap-10">
          <div className="flex flex-col items-start gap-[30px]">
            <div className="flex w-full flex-col items-start gap-2.5 font-cormorant font-bold italic">
              <p className="w-full text-[26px] text-accent">Healthcare Robotics Lab</p>
              <p className="w-full text-[22px] text-black">Designing for accessibility</p>
            </div>

            <div className="flex flex-col items-start gap-[22px]">
              <div className="flex items-start gap-[65px]">
                <div className="flex w-[188px] shrink-0 flex-col items-start gap-[14px]">
                  <BigHighlight>ROLE</BigHighlight>
                  <p className="font-chivo text-sm leading-normal text-black">REU Researcher</p>
                </div>
                <div className="flex w-[188px] shrink-0 flex-col items-start gap-[14px]">
                  <BigHighlight>TIMELINE</BigHighlight>
                  <p className="font-chivo text-sm leading-normal text-black">Jun 2022 - Sep 2022</p>
                </div>
                <div className="flex w-[384px] shrink-0 flex-col items-start gap-[14px]">
                  <BigHighlight>TEAM</BigHighlight>
                  <p className="font-chivo text-sm leading-normal text-black">Alyssa Kubota, Ethan Sun, Laurel Riek</p>
                </div>
              </div>

              <div className="flex w-full shrink-0 flex-col items-start gap-[14px]">
                <BigHighlight>HRI 2023 PAPER</BigHighlight>
                <a
                  href="https://dl.acm.org/doi/10.1145/3568162.3576993"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-chivo text-sm leading-normal text-black underline"
                >
                  Get SMART: Collaborative Goal Setting with Cognitively Assistive Robots
                </a>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col items-start gap-[26px]">
            <div className="flex flex-col items-start gap-[22px]">
              <div className="flex w-[879px] flex-col items-start gap-3">
                <p className="font-cormorant text-xl font-bold italic text-accent">Overview</p>
                <p className="font-chivo text-sm leading-9 text-black">
                  I worked in the{" "}
                  <a href="https://healthrobotics.ucsd.edu/" target="_blank" rel="noopener noreferrer" className="underline">
                    Healthcare Robotics Lab
                  </a>{" "}
                  under an <span className="font-bold text-accent">REU</span> (Research Experience for
                  Undergraduates), <span className="underline">contributing to a{" "}
                  <a href="https://dl.acm.org/doi/10.1145/3568162.3576993" target="_blank" rel="noopener noreferrer" className="underline">
                    paper
                  </a>{" "}
                  accepted to</span>{" "}
                  <span className="underline">HRI 2023</span>. The paper explores how
                  robots can support people in identifying and achieving their personal goals throughout a
                  longitudinal health interventional, specifically for{" "}
                  <span className="font-bold text-accent">People with Mild Cognitive Impairment (PwMCI)</span>.
                </p>
                <p className="font-chivo text-sm leading-9 text-black">
                  <span className="font-bold">Mild Cognitive Impairment (MCI)</span> - the stage between the
                  cognitive decline of normal aging and dementia.
                </p>
              </div>
              <div className="h-px w-[879px] bg-accent/20" />

              <div className="flex w-[864px] flex-col items-start gap-3">
                <p className="font-cormorant text-xl font-bold italic text-accent">What did I work on?</p>
                <div className="flex flex-col gap-[15px] font-chivo text-sm leading-9 text-black">
                  <p>
                    With a focus on <span className="font-bold text-accent">co-designing</span> and{" "}
                    <span className="font-bold text-accent">compensatory design</span>, I researched potential
                    design considerations for a robot (e.g. robot behaviors, leading goal setting, showing
                    progress) that can effectively support goal progress and motivation throughout an
                    intervention for PwMCI.
                  </p>
                  <p>Emphasis during my time at the lab was placed on answering the question:</p>
                </div>
                <p className="w-full text-center font-chivo text-sm leading-9 text-accent">
                  How can we design <span className="font-bold">with</span> others, not just for others?
                </p>
                <p className="font-chivo text-sm leading-9 text-black">
                  After conducting a few <span className="font-bold text-accent">pilot studies</span>, we
                  conducted <span className="font-bold text-accent">in-person interviews with 5 PwMCI</span>,
                  who were all from a related clinical intervention where they were involved in ME-CCT-MCI
                  (Motivationally Enhanced Compensatory Cognitive Training for Mild Cognitive Impairment). We
                  were maintaining the interventions these users have already received, and are making the
                  assumption these users are already familiar with the intervention.
                </p>
              </div>
            </div>

            <div className="flex w-full flex-col items-center gap-7">
              <div className="flex w-full items-center justify-between">
                <div className="relative h-[365px] w-[420px]">
                  <Image src="/images/healthcare/personas-jean-kim.jpg" alt="Jean Kim user persona" fill className="object-cover" />
                </div>
                <div className="relative h-[365px] w-[420px]">
                  <Image src="/images/healthcare/personas-blake-anderson.jpg" alt="Blake Anderson user persona" fill className="object-cover" />
                </div>
              </div>
              <p className="font-chivo text-sm font-bold text-black">Fig 1. User personas</p>
            </div>

            <p className="font-chivo text-sm leading-9 text-black">
              During these interviews, I led{" "}
              <span className="font-bold text-accent">live sketching sessions</span> - these help us quickly
              summarize and document user needs and expectations. The sketches are reviewed by the
              interviewee to verify the sketches are representative of their needs. The drawings allow us to
              identify concrete designs for setting <span className="font-bold text-accent">SMART</span>{" "}
              (Specific, Measurable, Achievable, Relevant, and Time-Bound){" "}
              <span className="font-bold text-accent">goals</span> and increasing user motivation to achieve
              those goals.
            </p>

            <div className="flex flex-col items-center gap-6">
              <div className="flex items-center justify-center gap-10">
                <div className="relative h-[332px] w-[393px] overflow-hidden rounded-[6px]">
                  <Image src="/images/healthcare/image16.png" alt="User interview photo" fill className="object-cover" />
                </div>
                <div className="relative h-[232px] w-[446px] overflow-hidden rounded-[6px]">
                  <Image src="/images/healthcare/image18.png" alt="Live sketching session photo" fill className="object-cover" />
                </div>
              </div>
              <p className="font-chivo text-sm font-bold text-black">Fig 2. Some examples from my live sketching sessions</p>
            </div>

            <div className="flex w-full flex-col items-start gap-[22px]">
              <div className="flex w-full flex-col items-start gap-[15px] font-chivo text-sm leading-9 text-black">
                <p>
                  These initial interviews allowed us to develop a{" "}
                  <span className="font-bold text-accent">low-fidelity prototype</span> addressing user needs.
                  We then created a video demonstrating how participants would interact with the prototype,
                  which were shown to 3 of the participants we interviewed prior. Users brought up interactions
                  that stood out to them, what they liked, what they would change, and what would motivate
                  them to work on their goals.
                </p>
                <p>
                  We then did individual rounds of{" "}
                  <span className="font-bold text-accent">Grounded Theory-Based Analysis (i.e. affinity diagramming)</span>,
                  eventually performing a group analysis to narrow down the main themes and sub-themes we
                  found from our interviews.
                </p>
                <p>
                  A hi-fidelity prototype of the robot interactions based on PwMCI&rsquo;s feedback and design
                  recommendations were later developed by a future team.
                </p>
              </div>

              <div className="h-px w-[879px] bg-accent/20" />

              <div className="flex w-full flex-col items-start gap-3">
                <p className="font-cormorant text-xl font-bold italic text-accent">Takeaways</p>
                <div className="flex w-full flex-col items-start font-chivo text-sm leading-9 text-black">
                  <p>+ Focus on designing with users, not just for users.</p>
                  <p>
                    + Continue to advocate for accessibility and inclusive design! Accessibility and inclusive
                    design should NOT be left as an afterthought and should already be integrated into the
                    workflow.
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
