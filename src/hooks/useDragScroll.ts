import { useRef, useCallback } from 'react'

export function useDragScroll<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return
    isDragging.current = true
    startX.current = e.pageX - ref.current.offsetLeft
    scrollLeft.current = ref.current.scrollLeft
    ref.current.style.cursor = 'grabbing'
    ref.current.style.userSelect = 'none'
  }, [])

  const onMouseUp = useCallback(() => {
    if (!ref.current) return
    isDragging.current = false
    ref.current.style.cursor = 'grab'
    ref.current.style.userSelect = ''
  }, [])

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging.current || !ref.current) return
    e.preventDefault()
    const x = e.pageX - ref.current.offsetLeft
    const walk = (x - startX.current) * 1.5
    ref.current.scrollLeft = scrollLeft.current - walk
  }, [])

  const onMouseLeave = useCallback(() => {
    if (!ref.current) return
    isDragging.current = false
    ref.current.style.cursor = 'grab'
    ref.current.style.userSelect = ''
  }, [])

  return { ref, onMouseDown, onMouseUp, onMouseMove, onMouseLeave }
}
