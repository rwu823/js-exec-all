export interface ExecAll {
  (RE: RegExp, str: string): { match: string; index: number }[]
}

const execAll: ExecAll = (RE, str) => {
  let match
  const matches = []

  let { flags } = RE

  if (RE.global) {
    flags = `g${flags}`
  }

  const cloneRE = new RegExp(RE.source, `${flags}`)

  while ((match = cloneRE.exec(str))) {
    matches.push({
      match: match[0],
      index: match.index,
    })

    cloneRE.lastIndex = match.index + 1
  }

  return matches
}

export default execAll

exports = execAll
