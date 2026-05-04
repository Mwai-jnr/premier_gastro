import ServicePage from "../components/ServicePage";
import image from "../assets/images/esophageal-manometry-procedure.jpeg";
import supportingImage from "../assets/images/esophageal-manometry-illustration.jpeg";

export default function Esophageal() {
  return (
    <ServicePage
      eyebrow="High-resolution esophageal manometry"
      title="Understand how your esophagus is working"
      summary="Esophageal manometry measures the muscle contractions of the esophagus and the function of the lower esophageal sphincter, helping explain swallowing symptoms and reflux-related concerns."
      heroImage={image}
      supportingImage={supportingImage}
      highlights={[
        {
          kicker: "Measures",
          title: "Swallowing coordination",
          text: "Assesses how smoothly the esophageal muscles move food toward the stomach."
        },
        {
          kicker: "Clarifies",
          title: "Sphincter function",
          text: "Checks whether the lower esophageal sphincter opens and closes properly."
        },
        {
          kicker: "Guides",
          title: "Treatment decisions",
          text: "Provides objective data your doctor can use to choose the right next step."
        }
      ]}
      evaluatesTitle="Clinical insight"
      evaluates={[
        "Swallowing function",
        "Coordination and strength of esophageal muscles",
        "Lower esophageal sphincter opening and closing"
      ]}
      symptomsTitle="Symptoms"
      symptoms={[
        "Difficulty swallowing",
        "Chest pain not related to the heart",
        "Persistent reflux symptoms"
      ]}
      conditionsTitle="Diagnostic clarity"
      conditions={[
        "Achalasia",
        "Gastroesophageal reflux disease",
        "Esophageal spasm"
      ]}
      processTitle="Patient experience"
      process={[
        {
          title: "Focused preparation",
          text: "You receive clear instructions before the procedure so the results are useful."
        },
        {
          title: "Pressure measurement",
          text: "A thin catheter measures muscle pressure and coordination during swallows."
        },
        {
          title: "Specialist interpretation",
          text: "The findings help your doctor understand whether muscle or sphincter function is contributing to symptoms."
        }
      ]}
      importance={{
        title: "Precise motility testing helps turn vague symptoms into a clear plan.",
        text: "When swallowing difficulty, unexplained chest discomfort, or reflux symptoms persist, manometry can reveal whether the esophagus is moving and relaxing as it should."
      }}
    />
  );
}
