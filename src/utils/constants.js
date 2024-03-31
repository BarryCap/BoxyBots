export const MIN_X = 0
export const MIN_Y = 0
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
export const ACTIONS = ['Punch', 'Defense']
export const KEY_TYPES = [...MOVEMENTS, ...ACTIONS]

export const DEFAULT_P1 = { name: 'p1', x: 2, y: 4, h: 32, direction: 'right', nextArm: 'l', color: '#ff0', state: null }
export const DEFAULT_P2 = { name: 'p2', x: 13, y: 4, h: 32, direction: 'left', nextArm: 'r', color: '#0ff', state: null }

export const KEY_MAP = {
  p1: {
    up: ['KeyW'],
    right: ['KeyD'],
    down: ['KeyS'],
    left: ['KeyA'],
    Punch: ['KeyC', 'Space'],
    Defense: ['KeyV'],
  },
  p2: {
    up: ['ArrowUp', 'KeyP'],
    right: ['ArrowRight', 'Quote'],
    down: ['ArrowDown', 'Semicolon'],
    left: ['ArrowLeft', 'KeyL'],
    Punch: ['Numpad1', 'Numpad0', 'KeyM'],
    Defense: ['Numpad2', 'NumpadDecimal', 'Comma'],
  }
}

export const ACTION_DURATION = 120
export const ACTION_RELOAD = 120

export const FIRE_DAMAGE_INTERVAL = 500
export const FIRE_TIMEOUT = 8000
