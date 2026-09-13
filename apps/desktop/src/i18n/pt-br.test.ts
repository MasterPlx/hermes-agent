import { describe, expect, it } from 'vitest'

import { en } from './en'
import { ptBR } from './pt-br'

function leafPaths(node: unknown, prefix = ''): string[] {
  if (typeof node === 'function' || typeof node === 'string') {
    return [prefix]
  }

  return Object.entries(node as Record<string, unknown>).flatMap(([key, value]) =>
    leafPaths(value, prefix ? `${prefix}.${key}` : key)
  )
}

describe('pt-BR desktop catalog', () => {
  it('implements every English translation leaf', () => {
    expect(leafPaths(ptBR)).toEqual(leafPaths(en))
  })

  it('preserves interpolator arguments', () => {
    expect(ptBR.notifications.updateReadyMessage(7)).toContain('7')
  })
})
