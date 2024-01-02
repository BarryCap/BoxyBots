import { MIN_X, MIN_Y, MAP_HEIGHT, MAP_WIDTH } from './constants'

export const isFacingWalls = (player) => {
  switch (player.direction) {
    case 'up': return player.y <= MIN_Y + 1
    case 'right': return player.x >= MAP_WIDTH
    case 'down': return player.y >= MAP_HEIGHT
    case 'left': return player.x <= MIN_X + 1
  }
}

export const isFacingPlayer = (player, otherPlayer) => {
  switch (player.direction) {
    case 'up': return otherPlayer.y == player.y - 1 && player.x == otherPlayer.x
    case 'right': return otherPlayer.x == player.x + 1 && player.y == otherPlayer.y
    case 'down': return otherPlayer.y == player.y + 1 && player.x == otherPlayer.x
    case 'left': return otherPlayer.x == player.x - 1 && player.y == otherPlayer.y
  }
}

export const isAttackAverted = (attackingPlayer, defendingPlayer) => {
  // if the defending player is not parrying, the attack goes through
  if (
    (attackingPlayer.action == 'lPunch' && defendingPlayer.action != 'rDefense')
    || (attackingPlayer.action == 'rPunch' && defendingPlayer.action != 'lDefense')
  ) {
    return false
  }

  // the attack is blocked if and only if the defending player is facing the attacking one
  const oppositeSides = { left: 'right', right: 'left', up: 'down', down: 'up' }
  return attackingPlayer.direction == oppositeSides[defendingPlayer.direction]
}

export const isAttackingBody = (attackingPlayer, defendingPlayer) => {
  // if attacking is facing back of other
  if (attackingPlayer.direction == defendingPlayer.direction) {
    return true
  }

  // contains the sides in which defending player will be vulnerable based on attacking player side
  let sides = attackingPlayer.action == 'lPunch'
    ? { left: 'down', right: 'up', up: 'right', down: 'left' }
    : { left: 'up', right: 'down', up: 'left', down: 'right' }

  return attackingPlayer.direction == sides[defendingPlayer.direction]
}
