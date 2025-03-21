import { $ } from 'zx'
import { io } from 'fsxx'

io.json.spaces = 2

const { data: pkg, save } = await io.json<{ name: string, version: string }>`package.json`

pkg.name = 'esmo'
await save()

console.log('> publish esmo v' + pkg.version)
await $`npm publish`

pkg.name = 'esrun'
await save()

console.log('> publish esrun v' + pkg.version)
await $`npm publish`

