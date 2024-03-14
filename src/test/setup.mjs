import { afterEach, beforeEach, vi } from 'vitest'

beforeEach(() => {
    vi.useFakeTimers()
})

afterEach(() => {
    vi.restoreAllMocks()
    vi.resetAllMocks()
    vi.clearAllTimers()
    vi.useRealTimers()
})
