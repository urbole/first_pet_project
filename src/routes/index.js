import { HomePage } from "../pages/homePage/homPage";
import { GalleryPage } from "../pages/galleryPage/galleryPage";
import { ContactsPage } from "../pages/contacts/contactsPage";
import { LocationPage } from "../pages/location/locationPage";


export const appRoutes = [
  {
    path: '/first_pet_project/',
    exact: true,
    component: HomePage
  },
  {
    path: '/first_pet_project/gallery',
    component: GalleryPage
  },
  {
    path: '/first_pet_project/contacts',
    component: ContactsPage
  },
  {
    path: '/first_pet_project/location',
    component: LocationPage
  },
]