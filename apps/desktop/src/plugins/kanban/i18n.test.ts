import { describe, expect, it } from 'vitest'

import { en, KANBAN_LOCALES } from './i18n'

function leafPaths(node: unknown, prefix = ''): string[] {
  if (typeof node === 'function' || typeof node === 'string') {
    return [prefix]
  }

  return Object.entries(node as Record<string, unknown>).flatMap(([key, value]) =>
    leafPaths(value, prefix ? `${prefix}.${key}` : key)
  )
}

describe('KANBAN_LOCALES pt-BR', () => {
  it('covers the English key tree without plugin fallback', () => {
    const ptBR = KANBAN_LOCALES['pt-BR']
    expect(ptBR).toBeDefined()
    expect(leafPaths(ptBR)).toEqual(leafPaths(en))
  })
})
