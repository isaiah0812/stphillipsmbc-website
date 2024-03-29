import Contact from "../pages/contact"
import Events from "../pages/events"
import Home from "../pages/home"
import Offering from "../pages/offering"
import Photos from "../pages/photos"
import About from "../pages/staff"

export interface IRoute {
  path: string,
  title: string,
  component?: () => JSX.Element
}

export const routes: IRoute[] = [
  {
    path: "/",
    title: "Home",
    component: Home
  },
  {
    path: "/about",
    title: "About",
    component: About
  },
  {
    path: "/events",
    title: "Events",
    component: Events
  },
  {
    path: "/offering",
    title: "Offering",
    component: Offering
  },
  {
    path: "/photos",
    title: "Photos",
    component: Photos
  },
  {
    path: "/contact",
    title: "Contact",
    component: Contact
  },
]