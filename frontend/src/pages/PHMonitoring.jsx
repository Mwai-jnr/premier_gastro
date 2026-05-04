import ServicePage from "../components/ServicePage";
import image from "../assets/images/esophageal-ph-studies.jpeg";

export default function PHMonitoring() {
  return (
    <ServicePage
      eyebrow="Esophageal pH studies"
      title="Objective reflux testing over time"
      summary="pH monitoring measures how much acid from the stomach reaches the esophagus, helping confirm reflux and connect symptoms with real acid exposure."
      heroImage={image}
      highlights={[
        {
          kicker: "Tracks",
          title: "Acid exposure",
          text: "Records pH levels over time instead of relying on symptoms alone."
        },
        {
          kicker: "Connects",
          title: "Symptoms to events",
          text: "A symptom diary helps compare meals, sleep, cough, pain, or hoarseness with reflux episodes."
        },
        {
          kicker: "Evaluates",
          title: "Treatment response",
          text: "Shows whether acid-suppressing treatment is controlling reflux effectively."
        }
      ]}
      evaluatesTitle="What it is used for"
      evaluates={[
        "Gastroesophageal reflux disease",
        "Chronic cough, hoarseness, or chest pain suspected to be reflux-related",
        "Effectiveness of acid-suppressing treatment"
      ]}
      symptomsTitle="Who may need it"
      symptoms={[
        "Persistent heartburn",
        "Reflux symptoms despite treatment",
        "Chest discomfort, cough, or voice changes that may be reflux-related"
      ]}
      conditionsTitle="Monitoring options"
      conditions={[
        "24-hour catheter-based pH monitoring",
        "Wireless Bravo pH monitoring",
        "Symptom correlation studies"
      ]}
      processTitle="How the test works"
      process={[
        {
          title: "Recorder setup",
          text: "A thin tube or wireless capsule records acid levels while you continue normal activities."
        },
        {
          title: "Daily diary",
          text: "You note symptoms, meals, and sleep so the data can be matched with how you felt."
        },
        {
          title: "Correlation review",
          text: "Results show whether acid exposure is truly driving your symptoms."
        }
      ]}
      importance={{
        title: "pH monitoring directly measures acid exposure.",
        text: "Unlike endoscopy, this study measures reflux over time, making it one of the most accurate ways to confirm whether symptoms are caused by acid."
      }}
    />
  );
}
