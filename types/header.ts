import type { RouteLocationRaw } from 'vue-router';

export interface MenuItem {
  name: string;
  description: string;
  link: RouteLocationRaw;
  icon: any;
}
