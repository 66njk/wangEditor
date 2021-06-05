/**
 * @description menu entry
 * @author wangfupeng
 */

import BoldMenu from './BoldMenu'
import CodeMenu from './CodeMenu'
import ItalicMenu from './ItalicMenu'
import ThroughMenu from './ThroughMenu'
import UnderlineMenu from './UnderlineMenu'

export const boldMenuConf = {
  key: 'bold',
  factory() {
    return new BoldMenu()
  },
}

export const codeMenuConf = {
  key: 'code',
  factory() {
    return new CodeMenu()
  },
}

export const italicMenuConf = {
  key: 'italic',
  factory() {
    return new ItalicMenu()
  },
}

export const throughMenuConf = {
  key: 'through',
  factory() {
    return new ThroughMenu()
  },
}

export const underlineMenuConf = {
  key: 'underline',
  factory() {
    return new UnderlineMenu()
  },
}
