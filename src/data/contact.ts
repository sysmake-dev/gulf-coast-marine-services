import { MapPin, Phone, Mail } from "lucide-react";

const contactInfo = [
  {
    id: "location",

    icon: MapPin,

    type: "Location",

    content: "123 Main Street, Fort Myers, Florida 33931",
  },
  {
    id: "phone",

    icon: Phone,

    type: "Phone",

    content: "(239) 123-456",
  },
  {
    id: "mail",

    icon: Mail,

    type: "Mail",

    content: "info@example.com",
  },
];

export default contactInfo;
