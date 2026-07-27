import {
  BatteryCharging,
  Building2,
  Cable,
  Fan,
  Home,
  Lightbulb,
  PanelsTopLeft,
  Plug,
  Search,
  Siren,
  Snowflake,
  Zap,
  type LucideIcon,
} from "lucide-react";
import type { ServiceIcon } from "@/data/services";

export const iconMap: Record<ServiceIcon, LucideIcon> = {
  Home,
  Building2,
  PanelsTopLeft,
  Lightbulb,
  Plug,
  Siren,
  Search,
  Zap,
  Fan,
  Snowflake,
  BatteryCharging,
  Cable,
};
