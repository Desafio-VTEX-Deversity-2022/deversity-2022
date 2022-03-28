export async function status(ctx: Context, next: () => Promise<any>) {
    const {
      clients: { catalog },
    } = ctx
  
    const test = await catalog.getProductsAndSkus(1,50)
  
    console.log(test)
  
    ctx.body = test
  
    await next()
  }