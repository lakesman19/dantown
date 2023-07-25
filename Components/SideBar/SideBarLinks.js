import { BiHomeAlt } from 'react-icons/bi'
import { MdOutlineTimer, MdOutlineSportsBasketball } from 'react-icons/md'
import {
  BsPeople,
  BsBookmark,
  BsChatLeft,
  BsMusicNoteBeamed,
} from 'react-icons/bs'
import { RiCompassDiscoverLine } from 'react-icons/ri'
import { AiOutlineUser, AiOutlineCalendar } from 'react-icons/ai'
import { GiConsoleController } from 'react-icons/gi'
import { FaReact } from 'react-icons/fa'

const TopSideBarLinks = [
  {
    path: '/',
    name: 'Home',
    icon: <BiHomeAlt />,
  },
  {
    path: '/timeline',
    name: 'Timeline',
    icon: <MdOutlineTimer />,
  },
  {
    path: '/community',
    name: 'Community',
    icon: <BsPeople />,
  },
  {
    path: '/discover',
    name: 'Discover',
    icon: <RiCompassDiscoverLine />,
  },
  {
    path: '/frends',
    name: 'Friends',
    icon: <AiOutlineUser />,
  },
  {
    path: '/bookmarks',
    name: 'Bookmarks',
    icon: <BsBookmark />,
  },
  {
    path: '/events',
    name: 'Events',
    icon: <AiOutlineCalendar />,
  },
  {
    path: '/discussion',
    name: 'Discussion',
    icon: <BsChatLeft />,
  },
]
const bottomSideBarLinks = [
  {
    path: '/sport',
    name: 'sport',
    icon: <MdOutlineSportsBasketball />,
  },
  {
    path: '/gaming',
    name: 'gaming',
    icon: <GiConsoleController />,
  },
  {
    path: '/music',
    name: 'music',
    icon: <BsMusicNoteBeamed />,
  },
  {
    path: '/tech&science',
    name: 'Tech & Science',
    icon: <FaReact />,
  },
]

export { TopSideBarLinks, bottomSideBarLinks }
