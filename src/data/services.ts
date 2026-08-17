import boatDetailingHero from "../assets/images/services/boat-detailing-hero.jpg";
import bottomCleaningHero from "../assets/images/services/bottom-cleaning-hero.jpg";
import docksideServiceHero from "../assets/images/services/dockside-service-hero.jpg";
import marineMaintenanceHero from "../assets/images/services/marine-maintenance-hero.jpg";
import boatPreparationHero from "../assets/images/services/boat-preparation-hero.jpg";
import seasonalServiceHero from "../assets/images/services/seasonal-service-hero.jpg";

const serviceData = [
  {
    id: "boat-detailing",

    title: "Boat Detailing",

    heroImage: boatDetailingHero,

    description:
      "Detailed cleaning and care to help maintain your vessel's appearance and condition.",

    overview:
      "Boat detailing focuses on cleaning and caring for the vessel's interior and exterior surfaces. Regular detailing helps remove accumulated dirt, salt, and environmental buildup while keeping the vessel clean and presentable.",

    offer: [
      "Exterior washing and cleaning",
      "Surface cleaning and treatment",
      "Interior cleaning",
      "Removal of salt and environmental buildup",
      "Finishing and presentation work",
    ],

    audience:
      "Boat detailing is appropriate for owners who want to maintain their vessel between trips, prepare it for an upcoming season, or restore its appearance after extended exposure to the elements.",

    approach: [
      {
        id: "assessment",

        title: "Assessment",

        content:
          "The vessel is inspected to determine its condition and the areas requiring attention.",
      },
      {
        id: "preparation",

        title: "Preparation",

        content:
          "Surfaces are prepared for cleaning based on their material and condition.",
      },
      {
        id: "cleaning",

        title: "Cleaning",

        content:
          "Interior and exterior surfaces are cleaned to remove accumulated dirt, salt, and debris.",
      },
      {
        id: "detailing",

        title: "Detailing",

        content:
          "Appropriate care is applied to the vessel's surfaces to improve its overall condition and presentation.",
      },
      {
        id: "review",

        title: "Review",

        content:
          "The completed work is reviewed to ensure the vessel has been properly serviced.",
      },
    ],

    considerations: [
      "Service requirements vary according to vessel size and condition",
      "Existing damage or deterioration may require additional work",
      "Pricing is determined by the scope of service required",
    ],

    faq: [
      {
        id: "question1",

        question: "How often should my boat be detailed?",

        answer:
          "The appropriate frequency depends on how often the vessel is used, where it is stored, and its exposure to the elements.",
      },
      {
        id: "question2",

        question: "Can you detail both the interior and exterior?",

        answer:
          "Yes. The scope of detailing can include both interior and exterior areas depending on the vessel and requested service.",
      },
      {
        id: "question3",

        question: "How is pricing determined?",

        answer:
          "Pricing depends on factors such as vessel size, condition, accessibility, and the scope of work required.",
      },
      {
        id: "question4",

        question: "Do I need to have the boat at a marina?",

        answer:
          "Service availability depends on the vessel's location and accessibility. Contact us to discuss your situation.",
      },
    ],

    slug: "boat-detailing",
  },
  {
    id: "bottom-cleaning",

    title: "Bottom Cleaning",

    heroImage: bottomCleaningHero,

    description:
      "Routine underwater cleaning to help keep your vessel's bottom clean and properly maintained.",

    overview:
      "Bottom cleaning focuses on the submerged portion of the vessel's hull. Regular cleaning helps remove accumulated marine growth and buildup, keeping the hull cleaner and helping the vessel remain in better condition between maintenance intervals.",

    offer: [
      "Removal of marine growth and buildup",
      "Cleaning of accessible submerged hull surfaces",
      "Inspection of the hull during service",
      "Identification of areas requiring additional attention",
    ],

    audience:
      "Bottom cleaning is intended for vessels that remain in the water and experience recurring exposure to marine growth. It is particularly useful for owners who want to maintain their vessel between haul-outs or other routine maintenance.",

    approach: [
      {
        id: "assessment",

        title: "Assessment",

        content:
          "The accessible portions of the hull are evaluated to determine the level of buildup and marine growth.",
      },
      {
        id: "preparation",

        title: "Preparation",

        content:
          "The vessel and surrounding work area are prepared for the cleaning process.",
      },
      {
        id: "cleaning",

        title: "Cleaning",

        content:
          "Marine growth and accumulated buildup are carefully removed from the accessible hull surfaces.",
      },
      {
        id: "inspection",

        title: "Inspection",

        content:
          "The cleaned surfaces are reviewed for remaining buildup or conditions that may require additional attention.",
      },
      {
        id: "completion",

        title: "Completion",

        content:
          "The vessel is returned to its normal condition with the completed service documented as appropriate.",
      },
    ],

    considerations: [
      "The amount of buildup varies depending on how long the vessel has remained in the water and its environment",
      "Existing damage or deterioration may require additional evaluation",
      "Service availability depends on vessel location and accessibility",
      "Pricing varies according to vessel size, condition, accessibility, and scope of work",
    ],

    faq: [
      {
        id: "question1",

        question: "How often should a boat's bottom be cleaned?",

        answer:
          "Cleaning frequency depends on the vessel, its location, and how quickly marine growth accumulates in its environment.",
      },
      {
        id: "question2",

        question: "Can you clean a vessel while it is in the water?",

        answer:
          "Bottom cleaning is intended for vessels that remain in the water, subject to appropriate access and service conditions.",
      },
      {
        id: "question3",

        question: "Does bottom cleaning remove all marine growth?",

        answer:
          "The extent of removal depends on the type and severity of the buildup and the condition of the hull.",
      },
      {
        id: "question4",

        question: "How is pricing determined?",

        answer:
          "Pricing depends on factors such as vessel size, condition, accessibility, location, and the amount of cleaning required.",
      },
    ],

    slug: "bottom-cleaning",
  },
  {
    id: "dockside-service",

    title: "Dockside Service",

    heroImage: docksideServiceHero,

    description:
      "Convenient marine services performed at your dock or designated location.",

    overview:
      "Dockside service provides convenient on-location assistance for vessels that can be serviced where they are currently docked. The scope of work depends on the vessel's condition, location, accessibility, and the specific service required.",

    offer: [
      "On-location vessel service",
      "Routine cleaning and maintenance",
      "Inspection of accessible areas",
      "Minor service and maintenance tasks",
      "Service-specific work based on the vessel's needs",
    ],

    audience:
      "Dockside service is intended for boat owners who need routine care or maintenance performed at their existing dock rather than transporting the vessel to another location.",

    approach: [
      {
        id: "assessment",

        title: "Assessment",

        content:
          "The vessel and dockside environment are evaluated to determine whether the requested work can be performed safely and effectively on location.",
      },
      {
        id: "planning",

        title: "Planning",

        content:
          "The required work, access requirements, and service conditions are established.",
      },
      {
        id: "preparation",

        title: "Preparation",

        content:
          "The vessel and work area are prepared for the scheduled service.",
      },
      {
        id: "service",

        title: "Service",

        content:
          "The requested work is performed with attention to the vessel and surrounding environment.",
      },
      {
        id: "review",

        title: "Review",

        content:
          "The completed work is reviewed to ensure the requested service has been properly addressed.",
      },
    ],

    considerations: [
      "Dock accessibility must be suitable for the requested service",
      "The scope of work depends on the vessel and its condition",
      "Certain repairs or services may require the vessel to be moved or accessed at another location",
      "Pricing varies according to the service requested and its specific requirements",
    ],

    faq: [
      {
        id: "question1",

        question: "Can you service my boat at my private dock?",

        answer:
          "Dockside service may be available at private docks depending on accessibility, location, and the type of work requested.",
      },
      {
        id: "question2",

        question: "What types of work can be performed dockside?",

        answer:
          "Many routine cleaning and maintenance services can be performed dockside, although suitability depends on the vessel and the specific work required.",
      },
      {
        id: "question3",

        question: "Does my boat need to be moved?",

        answer:
          "Not necessarily. The purpose of dockside service is to perform appropriate work at the vessel's existing location whenever conditions allow.",
      },
      {
        id: "question4",

        question: "How is pricing determined?",

        answer:
          "Pricing depends on the type of service, vessel size and condition, location, accessibility, and the scope of work.",
      },
    ],

    slug: "dockside-service",
  },
  {
    id: "marine-maintenance",

    title: "Marine Maintenance",

    heroImage: marineMaintenanceHero,

    description:
      "Routine maintenance services designed to help keep your vessel operating properly.",

    overview:
      "Marine maintenance focuses on the routine care and upkeep of a vessel and its accessible components. Services are tailored to the vessel, its condition, usage, and the maintenance requirements identified during assessment.",

    offer: [
      "Routine maintenance tasks",
      "Inspection of accessible components",
      "Identification of visible maintenance concerns",
      "Cleaning and care of applicable areas",
      "Service-specific maintenance work",
    ],

    audience:
      "Marine maintenance is intended for boat owners who want to keep up with routine vessel care, address known maintenance needs, or establish a consistent maintenance routine.",

    approach: [
      {
        id: "assessment",

        title: "Assessment",

        content:
          "The vessel is evaluated to understand its current condition and identify areas requiring attention.",
      },
      {
        id: "planning",

        title: "Planning",

        content:
          "Required maintenance tasks are identified and organized according to the vessel's needs.",
      },
      {
        id: "preparation",

        title: "Preparation",

        content:
          "The vessel and applicable work areas are prepared for service.",
      },
      {
        id: "maintenance",

        title: "Maintenance",

        content:
          "The identified maintenance work is performed carefully and according to the requirements of the vessel.",
      },
      {
        id: "review",

        title: "Review",

        content:
          "Completed work is reviewed and any additional concerns identified during service are communicated to the owner.",
      },
    ],

    considerations: [
      "Maintenance requirements vary by vessel, age, condition, and usage",
      "Some issues may require specialized repair or service beyond routine maintenance",
      "Existing damage or deterioration may require additional evaluation",
      "Pricing depends on the vessel and scope of maintenance required",
    ],

    faq: [
      {
        id: "question1",

        question: "How often should marine maintenance be performed?",

        answer:
          "Maintenance frequency depends on the vessel, how often it is used, its environment, and the manufacturer's maintenance requirements.",
      },
      {
        id: "question2",

        question: "Can you identify maintenance issues during service?",

        answer:
          "Visible or accessible maintenance concerns can be identified during an assessment. Issues requiring specialized inspection may need to be evaluated by an appropriate professional.",
      },
      {
        id: "question3",

        question: "Does routine maintenance include repairs?",

        answer:
          "Routine maintenance and repairs are not necessarily the same. The scope of service will depend on the specific condition and requirements of the vessel.",
      },
      {
        id: "question4",

        question: "How is pricing determined?",

        answer:
          "Pricing depends on the vessel, required maintenance, accessibility, condition, and overall scope of work.",
      },
    ],

    slug: "marine-maintenance",
  },
  {
    id: "boat-preparation",

    title: "Boat Preparation",

    heroImage: boatPreparationHero,

    description:
      "Preparation services for vessels that need to be readied for storage, transport, or extended periods away from the water.",

    overview:
      "Preparing a vessel properly can help reduce avoidable maintenance issues and ensure it is ready for its intended use or storage period. Boat preparation is tailored to the vessel, its current condition, and what the owner is preparing it for.",

    offer: [
      "Vessel condition assessment",
      "Cleaning and preparation",
      "Inspection of accessible areas",
      "Preparation of applicable systems and equipment",
      "Final readiness review",
    ],

    audience:
      "Boat preparation is intended for owners getting a vessel ready for a trip, a new season, extended storage, or a change in how the vessel will be used.",

    approach: [
      {
        id: "assessment",

        title: "Assessment",

        content:
          "The vessel is evaluated to determine its current condition and preparation requirements.",
      },
      {
        id: "planning",

        title: "Planning",

        content:
          "Preparation tasks are identified based on the vessel's intended use or upcoming storage period.",
      },
      {
        id: "preparation",

        title: "Preparation",

        content:
          "Applicable areas, equipment, and surfaces are prepared according to the planned scope of work.",
      },
      {
        id: "inspection",

        title: "Inspection",

        content:
          "The vessel is reviewed for visible issues or areas that may require additional attention.",
      },
      {
        id: "review",

        title: "Review",

        content:
          "Completed preparation work is reviewed to ensure the vessel is appropriately prepared for its intended use or storage.",
      },
    ],

    considerations: [
      "Preparation requirements vary depending on the vessel and its intended use",
      "Extended storage may require additional preparation beyond routine service",
      "Existing mechanical or structural issues may require specialized service",
      "Pricing depends on vessel size, condition, accessibility, and preparation requirements",
    ],

    faq: [
      {
        id: "question1",

        question: "What can a boat be prepared for?",

        answer:
          "Preparation can be tailored to upcoming use, seasonal changes, extended storage, or other planned transitions involving the vessel.",
      },
      {
        id: "question2",

        question: "How far in advance should I schedule preparation?",

        answer:
          "Scheduling requirements depend on the scope of work and the time of year. Contact us to discuss your preparation needs.",
      },
      {
        id: "question3",

        question: "Does preparation include repairs?",

        answer:
          "Preparation focuses on getting the vessel ready for its intended use or storage. Repairs or specialized work may require additional service.",
      },
      {
        id: "question4",

        question: "How is pricing determined?",

        answer:
          "Pricing depends on the vessel, its condition, accessibility, intended use, and the scope of preparation required.",
      },
    ],

    slug: "boat-preparation",
  },
  {
    id: "seasonal-service",

    title: "Seasonal Service",

    heroImage: seasonalServiceHero,

    description:
      "Scheduled marine care designed around the changing needs of your vessel throughout the year.",

    overview:
      "Seasonal service focuses on the maintenance and preparation tasks that become relevant as a vessel moves between periods of active use and storage. Services are tailored to the vessel, its condition, and the upcoming season.",

    offer: [
      "Seasonal vessel assessment",
      "Cleaning and preparation",
      "Inspection of accessible areas",
      "Seasonal maintenance tasks",
      "Preparation for use or storage",
    ],

    audience:
      "Seasonal service is intended for boat owners preparing for a new boating season, transitioning into a period of reduced use, or getting a vessel ready for extended storage.",

    approach: [
      {
        id: "assessment",

        title: "Assessment",

        content:
          "The vessel is evaluated to determine its current condition and seasonal requirements.",
      },
      {
        id: "planning",

        title: "Planning",

        content:
          "Necessary preparation and maintenance tasks are identified based on the upcoming season.",
      },
      {
        id: "preparation",

        title: "Preparation",

        content:
          "Applicable areas of the vessel are cleaned, maintained, or prepared according to the planned scope.",
      },
      {
        id: "inspection",

        title: "Inspection",

        content:
          "Completed work and accessible areas are reviewed for visible concerns.",
      },
      {
        id: "review",

        title: "Review",

        content:
          "The vessel's preparation is reviewed to ensure it is appropriately positioned for the upcoming period of use or storage.",
      },
    ],

    considerations: [
      "Seasonal requirements vary according to vessel type, usage, location, and storage conditions",
      "Extended storage may require additional preparation",
      "Mechanical or structural concerns may require specialized service",
      "Pricing depends on vessel size, condition, accessibility, and the required seasonal work.",
    ],

    faq: [
      {
        id: "question1",

        question: "When should seasonal service be scheduled?",

        answer:
          "The appropriate timing depends on the vessel's use, storage arrangements, and the upcoming seasonal transition. Scheduling ahead of the transition is recommended.",
      },
      {
        id: "question2",

        question: "Does seasonal service prepare a boat for storage?",

        answer:
          "Yes. Services can be tailored to help prepare a vessel for an extended period of reduced use or storage.",
      },
      {
        id: "question3",

        question: "Can seasonal service prepare a boat for active use?",

        answer:
          "Yes. The service can also focus on preparing a vessel for an upcoming period of regular use.",
      },
      {
        id: "question4",

        question: "How is pricing determined?",

        answer:
          "Pricing depends on the vessel, its condition, accessibility, intended seasonal use, and the scope of work required.",
      },
    ],

    slug: "seasonal-service",
  },
];

export default serviceData;
