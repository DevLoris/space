import React from 'react'

export enum Icons {
  accountFAQ = 'accountFAQ',
  apple = 'apple',
  award = 'award',
  basicCheck = 'basicCheck',
  bed = 'bed',
  bicycle = 'bicycle',
  boat = 'boat',
  book = 'book',
  book2 = 'book2',
  books = 'books',
  bus = 'bus',
  calendar = 'calendar',
  car = 'car',
  cb = 'cb',
  check = 'check',
  check2 = 'check2',
  checkBasic = 'checkBasic',
  chevronDown = 'chevronDown',
  chevronLeft = 'chevronLeft',
  chevronRight = 'chevronRight',
  chevronUp = 'chevronUp',
  close = 'close',
  coin = 'coin',
  down = 'down',
  download = 'download',
  edit = 'edit',
  euro = 'euro',
  facebook = 'facebook',
  filter = 'filter',
  google = 'google',
  group = 'group',
  headset = 'headset',
  home = 'home',
  idea = 'idea',
  info = 'info',
  instagram = 'instagram',
  key = 'key',
  lock = 'lock',
  longArrowLeft = 'longArrowLeft',
  longArrowRight = 'longArrowRight',
  magic = 'magic',
  mail = 'mail',
  mailOn = 'mailOn',
  mapMarker = 'mapMarker',
  menu = 'menu',
  muted = 'muted',
  notificationOff = 'notificationOff',
  notificationOn = 'notificationOn',
  paperPlane = 'paperPlane',
  pebbleClock = 'pebbleClock',
  pebbleUpdate = 'pebbleUpdate',
  pebbleUpload = 'pebbleUpload',
  pebbleValidate = 'pebbleValidate',
  pebbleWarning = 'pebbleWarning',
  pending = 'pending',
  pin = 'pin',
  plane = 'plane',
  plus = 'plus',
  pod = 'pod',
  pot = 'pot',
  profile = 'profile',
  profileCheck = 'profileCheck',
  profileUp = 'profileUp',
  quote = 'quote',
  refresh = 'refresh',
  search = 'search',
  search2 = 'search2',
  shoppingBag = 'shoppingBag',
  signOut = 'signOut',
  sms = 'sms',
  soutien = 'soutien',
  stage = 'stage',
  star = 'star',
  starsRating = 'starsRating',
  statusError = 'statusError',
  statusPending = 'statusPending',
  statusSuccess = 'statusSuccess',
  studyFAQ = 'studyFAQ',
  subway = 'subway',
  ticket = 'ticket',
  trash = 'trash',
  twitter = 'twitter',
  unmuted = 'unmuted',
  up = 'up',
  uploadFile = 'uploadFile',
  videoFAQ = 'videoFAQ',
  wallet = 'wallet',
  walletFAQ = 'walletFAQ',
  youtube = 'youtube',
  moneybox = 'moneybox',
  warning = 'warning',
  clock = 'clock',
  asteroid = 'asteroid',
  dwarf_planet = 'dwarf_planet',
  planet = 'planet',
  moon = 'moon',
  comet = 'comet',
}

export type IconProps = {
  className?: string
  icon: Icons
  color?: string
  style?: React.CSSProperties
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}
