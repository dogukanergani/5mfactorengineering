import {
  Building2,
  Factory,
  FileText,
  Flame,
  Settings,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export const serviceIcons: Record<string, LucideIcon> = {
  "dogalgaz-sistemleri": Flame,
  "mekanik-tesisat-sistemleri": Wrench,
  "projelendirme-ve-taahhut": FileText,
  "endustriyel-imalat-ve-montaj": Factory,
  "endustriyel-tesisler": Building2,
  "bakim-onarim-ve-revizyon": Settings,
};
