// https://rollupjs.org/tutorial/#code-splitting
export default function () {
  import('./foo.js').then(({ default: foo }) => {
    console.log(foo)
  })
}