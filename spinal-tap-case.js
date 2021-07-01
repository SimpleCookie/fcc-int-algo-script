function spinalCase(str) {
  const mappedValues = [...str].reduce((acc, next) => {
    if (next === "-") return [...acc, next]
    if (next === " ") return [...acc, "-"]
    if (next === "_") return [...acc, "-"]
    if (next.toUpperCase() === next) {
      if (acc.length === 0) return [next.toLowerCase()]
      if (acc[acc.length - 1] === "-") return [...acc, next.toLowerCase()]
      return [...acc, `-${next.toLowerCase()}`]
    }
    return [...acc, next]
  }, [])
  return mappedValues.join("")
}

spinalCase('This Is Spinal Tap');