import ServicePage from "../components/ServicePage";
import image from "../assets/images/anorectal_.jpg";

export default function Anorectal() {
  return (
    <ServicePage
      eyebrow="Anorectal manometry"
      title="Detailed answers for bowel control and pelvic floor function"
      summary="Anorectal manometry evaluates how well the muscles and nerves in the rectum and anus work together, helping investigate constipation, stool leakage, and defecation difficulty."
      heroImage={image}
      highlights={[
        {
          kicker: "Measures",
          title: "Anal sphincter strength",
          text: "Assesses the muscles responsible for bowel control."
        },
        {
          kicker: "Evaluates",
          title: "Rectal sensation",
          text: "Checks how the rectum senses filling and responds during bowel function."
        },
        {
          kicker: "Reveals",
          title: "Muscle coordination",
          text: "Shows whether rectal pressure and anal relaxation are working together correctly."
        }
      ]}
      evaluatesTitle="What the test evaluates"
      evaluates={[
        "Strength of the anal sphincter muscles",
        "Sensation in the rectum",
        "Reflexes needed for normal bowel movements",
        "Coordination between rectal pressure and anal relaxation"
      ]}
      symptomsTitle="Symptoms"
      symptoms={[
        "Chronic constipation",
        "Difficulty passing stool",
        "Fecal incontinence",
        "Suspected pelvic floor dysfunction"
      ]}
      conditionsTitle="Diagnostic clarity"
      conditions={[
        "Dyssynergic defecation",
        "Fecal incontinence",
        "Hirschsprung disease"
      ]}
      processTitle="Patient pathway"
      process={[
        {
          title: "Comfort-first setup",
          text: "The test is explained clearly before it begins so you know what to expect."
        },
        {
          title: "Muscle and reflex testing",
          text: "Specialized measurements show how the anorectal muscles and nerves respond."
        },
        {
          title: "Treatment direction",
          text: "Results can guide biofeedback therapy, medications, or specialist treatment."
        }
      ]}
      importance={{
        title: "The right diagnosis helps avoid trial-and-error treatment.",
        text: "Detailed anorectal function data is essential for choosing treatment that matches the true cause of constipation, incontinence, or pelvic floor dysfunction."
      }}
    />
  );
}
