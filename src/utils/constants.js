export const ORIGIN_X = 0
export const ORIGIN_Y = 0
export const WIDTH = 16
export const HEIGHT = 9
export const MAP_WIDTH = WIDTH - 2
export const MAP_HEIGHT = HEIGHT - 2

export const SCALE = 8

export const PATH_BODY = 'M1 2A1 1 0 012 1H3A1 1 0 014 2V6A1 1 0 013 7H2A1 1 0 011 6'
export const PATH_LEFT_ARM_NORMAL = 'M5 2A1 1 0 016 1H6A1 1 0 017 2V2A1 1 0 016 3H6A1 1 0 015 2'
export const PATH_LEFT_ARM_PUNCH = 'M5 2A1 1 0 016 1H9A1 1 0 0110 2V2A1 1 0 019 3H6A1 1 0 015 2'
export const PATH_LEFT_ARM_DEFENSE = 'M5 1A1 1 0 016 0H6A1 1 0 017 1V3A1 1 0 016 4H6A1 1 0 015 3'
export const PATH_RIGHT_ARM_NORMAL = 'M5 6A1 1 0 016 5H6A1 1 0 017 6V6A1 1 0 016 7H6A1 1 0 015 6'
export const PATH_RIGHT_ARM_PUNCH = 'M5 6A1 1 0 016 5H9A1 1 0 0110 6V6A1 1 0 019 7H6A1 1 0 015 6'
export const PATH_RIGHT_ARM_DEFENSE = 'M5 5A1 1 0 016 4H6A1 1 0 017 5V7A1 1 0 016 8H6A1 1 0 015 7'

export const MOVEMENTS = ['up', 'right', 'down', 'left']
export const ACTIONS = ['lPunch', 'rPunch', 'lDefense', 'rDefense']
export const KEY_TYPES = [...MOVEMENTS, ...ACTIONS]

export const KEY_MAP = {
  p1: {
    up: ['KeyW'],
    right: ['KeyD'],
    down: ['KeyS'],
    left: ['KeyA'],
    lPunch: ['KeyC'],
    rPunch: ['KeyV'],
    lDefense: ['KeyB'],
    rDefense: ['KeyN'],
  },
  p2: {
    up: ['ArrowUp', 'KeyP'],
    right: ['ArrowRight', 'Quote'],
    down: ['ArrowDown', 'Semicolon'],
    left: ['ArrowLeft', 'KeyL'],
    lPunch: ['Numpad1'],
    rPunch: ['Numpad2'],
    lDefense: ['Numpad3'],
    rDefense: ['NumpadSubtract'],
  }
}
