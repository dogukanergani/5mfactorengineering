import {
  Cable,
  Droplets,
  Factory,
  Fan,
  Flame,
  Gauge,
  Settings,
  ShieldAlert,
  Thermometer,
  type LucideIcon,
} from "lucide-react";

export const serviceIcons: Record<string, LucideIcon> = {
  "endustriyel-ve-konfor-hvac": Fan,
  "yangindan-korunma": ShieldAlert,
  "sihhi-tesisat": Droplets,
  otomasyon: Settings,
  "dogal-gaz": Flame,
  "basincli-hava": Gauge,
  "kizgin-yag-su-buhar": Thermometer,
  altyapi: Cable,
  "endustriyel-proses": Factory,
};
