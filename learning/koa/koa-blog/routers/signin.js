const router = require('koa-router')()

router.get('/signin',  async (ctx) => {
  await ctx.render('signin')
})

module.exports = router