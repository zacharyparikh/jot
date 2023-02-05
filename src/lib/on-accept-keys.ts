import type { KeyboardEventHandler } from 'react'

export const onAcceptKeys =
  (
    handler: KeyboardEventHandler<HTMLButtonElement>
  ): KeyboardEventHandler<HTMLButtonElement> =>
  (event) => {
    const { key } = event
    if (key === 'Enter' || key === 'Space') {
      handler(event)
    }
  }
